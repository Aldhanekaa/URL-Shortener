const passport = require('passport');
const inputValidation = require('./inputValidation');
const bcrypt = require('bcryptjs');

const { User } = require('../models');

const register = async (req, res, next) => {
    console.log('======== register ========')

    let error = false;

    let errors = inputValidation(req.body);

    let email = errors[errors.findIndex(error => error.Id === 'email')]['value'];
    let username = errors[errors.findIndex(err => err.Id === 'name')]['value'];
    let password = errors[errors.findIndex(error => error.Id === 'password')]["value"];

    try {
        const user = await User.findOne({ email: email });
        console.log(user ? "USER ALREADY EXIST!" : "NO, WE DIDN'T FIND ANY USER");

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

        await newUser.save();

        res.send({ inputErrors: errors, status: 'user created' });

        return;
    } catch (err) {
        console.error("ERR FOUND", err);
        res.send("error when check the user exist or not");
        return;
    }
}

const login = (req, res, next) => {
    console.log('====== user try to log in ======')
    passport.authenticate("local", (err, user, info) => {
        console.log("Requesting User: ", user)
        if (err) throw err;
        if (!user) res.send("No User Exists");
        else {
            req.logIn(user, (err) => {
                if (err) throw err;
                res.send("Successfully Authenticated");
            });
        }
    })(req, res, next);

}

module.exports = {
    register: register,
    login: login
}
