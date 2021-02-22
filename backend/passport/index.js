const { User } = require("../models/");
let LocalStrategy = require('./strategies/local')

module.exports = function (passport) {
    passport.use(
        LocalStrategy
    );
    passport.serializeUser((user, cb) => {
        cb(null, user.id);
    });
    passport.deserializeUser((id, cb) => {
        User.findOne({ _id: id }, (err, user) => {
            const userInformation = {
                username: user.username,
            };
            cb(err, userInformation);
        });
    });


};
