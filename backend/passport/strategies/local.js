const LocalStrategy = require("passport-local");
const bcrypt = require('bcryptjs');

module.exports = myDataBase => {
    return new LocalStrategy({ // or whatever you want to use
        usernameField: 'email',    // define the parameter in req.body that passport can use as username and password
        passwordField: 'password'
    },
        (username, password, done) => {
            console.log("==== findUserDocument ====")
            console.log(`User ${username} attempted to log in.`)

            console.log("username", username);
            console.log("password", password)

            myDataBase.findOne(
                { username: username },
                (err, user) => {
                    console.log("user", user);
                    if (err) {
                        console.log("error", err)
                        return done(err);
                    }

                    if (!user) {
                        return done(null, false);
                    } else if (!bcrypt.compareSync(password, user.password)) {
                        console.log("b")
                        return done(null, false)
                    }

                    console.log("NIC#!")

                    return done(null, user)
                }
            )
        }
    );
}