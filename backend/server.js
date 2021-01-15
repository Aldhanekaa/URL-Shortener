if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config()
}


const mongoose = require("mongoose");
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

console.log(process.env.mongodb_URI)
let MongoDB_URI = process.env.mongoDB_URI || "mongodb+srv://localhost:27017/localUrlShortener";
//----------------------------------------- END OF IMPORTS---------------------------------------------------
mongoose.connect(
  "mongodb+srv://localhost:27017/localUrlShortener",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  () => {
    console.log("Mongoose Is Connected");
  }
);

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(
  cors({
    origin: "http://localhost:3000", // <-- location of the react app were connecting to
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
require("./passportConfig")(passport);

//----------------------------------------- END OF MIDDLEWARE---------------------------------------------------

// Routes
app.route("/auth/")
  .post((req, res, next) => {
    if (req.query["_method"] === "login") {
      passport.authenticate("local", (err, user, info) => {
        if (err) throw err;
        if (!user) res.send("No User Exists");
        else {
          req.logIn(user, (err) => {
            if (err) throw err;
            res.send("Successfully Authenticated");
            console.log(req.user);
          });
        }
      })(req, res, next);
    } else if (req.query["_method"] === "register") {
      User.findOne({ email: req.body.email }, async (err, doc) => {
        if (err) throw err;
        if (doc) res.send("User Already Exists");
        if (!doc) {
          const hashedPassword = await bcrypt.hash(req.body.password, 10);

          const newUser = new User({
            username: req.body.username,
            password: hashedPassword,
            email: req.body.email
          });
          console.log(newUser)
          await newUser.save();
          res.send("User Created");
        }
      });
    }

  });

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