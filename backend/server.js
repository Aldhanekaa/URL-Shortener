if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config()
}

const express = require("express");
const app = express();
const passport = require("passport");
const bcrypt = require("bcryptjs");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const session = require("express-session");
const bodyParser = require("body-parser");

const mongoose = require("mongoose");
const authentication = require('./routes/authentication');
const db = mongoose.connection

require("./passport")(passport);

//----------------------------------------- END OF IMPORTS---------------------------------------------------

let MongoDB_URI = process.env.mongoDB_URI || "mongodb://127.0.0.1:27017/UrlShortener";
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

//----------------------------------------- CORS ---------------------------------------------------
var whitelist = ['http://localhost:3000', 'http://localhost:3001', 'http://localhost:3004', '/']
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

//----------------------------------------- END OF MIDDLEWARE && START OF ROUTES ---------------------------------------------------

app.use('/api/auth', authentication)

app.get("/user", (req, res) => {
  console.log(req.user)
  res.json(req.user); // The req.user stores the entire user that has been authenticated inside of it.
});

//----------------------------------------- END OF ROUTES---------------------------------------------------
//Start Server
app.listen(3004, () => {
  console.log("Server Has Started");
});

// mongod --dbpath ~/data/db