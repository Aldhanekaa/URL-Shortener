if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config()
}


const mongoose = require("mongoose");
const db = mongoose.connection
const express = require("express");
const cors = require("cors");
const passport = require("passport");
const passportLocal = require("passport-local").Strategy;
const cookieParser = require("cookie-parser");
const bcrypt = require("bcryptjs");
const session = require("express-session");
const bodyParser = require("body-parser");
const app = express();
const User = require("./user");
const { default: axios } = require('axios');

console.log(process.env.mongodb_URI)
let MongoDB_URI = process.env.mongoDB_URI || "mongodb://127.0.0.1:27017/UrlShortener";
//----------------------------------------- END OF IMPORTS---------------------------------------------------
mongoose.connect(
  MongoDB_URI,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

db.on("error", err => console.error("error when connecting to db"))
db.once("open", () => console.log('connected to mongoose'))

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

var whitelist = ['http://localhost:3000', 'http://localhost:3001']
app.use(
  cors({
    origin: function (origin, callback) {
      if (whitelist.indexOf(origin) !== -1) {
        callback(null, true)
      } else {
        callback(new Error('Not allowed by CORS'))
      }
    }, // <-- location of the react app were connecting to
    credentials: true,
  })
);
app.use(
  session({
    secret: "secretcode",
    resave: true,
    saveUninitialized: true,
  })
);
app.use(cookieParser("secretcode"));
app.use(passport.initialize());
app.use(passport.session());
require("./passportConfig")(passport, db);

//----------------------------------------- END OF MIDDLEWARE---------------------------------------------------

app.route("/api/auth/login")
  .post(passport.authenticate('local', { failureRedirect: '/login' }),
    function (req, res) {
      console.log("user logged in")
      passport.authenticate("local", (err, user, info) => {
        if (err) throw err;
        if (!user) res.send("No User Exists");
        else {
          req.logIn(user, (error) => {
            if (error) throw error;
            res.send("Successfully Authenticated");
            console.log(req.user);
          });
        }
      })

    });

app.post('/api/auth/register', async (req, res, next) => {
  console.log("FUCK")
  let error = false;

  let errors = req.body.map((input, idx, self) => {
    const emailRegex = /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/;


    let Input = { ...input }
    if (input.value === '') Input["error"] = "Cannot be empty";

    if (Input.Id === 'password' && Input.value.length < 5) {
      Input.error = "Password atleast has 5 characters";
    }
    if (Input.Id === 'email' && !emailRegex.test(Input.value))
      Input.error = "Please provide a valid email address."

    if (Input.Id === "termsOfUse") {
      if (Input.value) {
        Input.error = "";
      } else Input.error = "please agree to the terms of use";
    }

    if (Input.error && !error) {
      error = true;
    }

    // console.log(error)

    return Input;

  })
  // console.log(errors, error)

  let email = errors[errors.findIndex(error => error.Id === 'email')]['value'];
  let username = errors[errors.findIndex(err => err.Id === 'name')]['value'];
  let password = errors[errors.findIndex(error => error.Id === 'password')]["value"];

  try {
    const user = await User.findOne({ email: email });
    console.log("user", user)

    if (user) {
      const usernameIndex = errors.findIndex(error => error.Id == 'email');
      errors = [...errors, { ...errors[usernameIndex], error: 'email already exists' }];
      error = true;
    }
    if (error) {
      res.send({ inputErrors: errors });
      return;
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new User({
      username: username,
      password: hashedPassword,
      email: email
    });

    console.log(newUser)
    await newUser.save();

    res.send({ inputErrors: errors, status: 'user created' });

    return;
  } catch (err) {
    console.error("ERR FOUND", err);
    res.send("error when check the user exist or not");
    return;
  }
}, passport.authenticate('local', (err, user, info) => {
  console.error('err', err);
  console.log('user', user);
  console.log('info', info);


}))


app.get("/user", (req, res) => {
  console.log(req.user)
  res.json(req.user); // The req.user stores the entire user that has been authenticated inside of it.
});
app.get("/logout", (req, res) => {
  req.logOut();
  res.redirect('/')
})
//----------------------------------------- END OF ROUTES---------------------------------------------------
//Start Server
app.listen(3004, () => {
  console.log("Server Has Started");
});

// mongod --dbpath ~/data/db