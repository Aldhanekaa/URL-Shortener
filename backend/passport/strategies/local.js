const { User } = require("../../models/index");
const bcrypt = require("bcryptjs");
const localStrategy = require("passport-local").Strategy;

module.exports = new localStrategy((username, password, done) => {
    User.findOne({ email: username }, (err, user) => {
        console.log("username", username)

        if (err) throw err;
        if (!user) return done(null, false);
        bcrypt.compare(password, user.password, (err, result) => {
            if (err) throw err;
            if (result === true) {
                return done(null, user);
            } else {
                return done(null, false);
            }
        });
    });
})