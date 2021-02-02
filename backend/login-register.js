app.post('/api/auth/register', async (req, res, next) => {
    let error = false;

    let errors = req.body.map((input, idx, self) => {
        const emailRegex = /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/;

        let Input = { ...input }
        if (input.value === '') Input["error"] = "Cannot be empty";

        if (Input.Id === 'password' && Input.value < 5)
            Input.error = "Password atleast has 5 characters";

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
            res.send(errors);
            return;
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const newUser = new User({
            username: username,
            password: hashedPassword,
            email: email
        });

        await newUser.save();

        next(null, newUser);

    } catch (err) {
        console.error("ERR FOUND", err);
        res.send("error when check the user exist or not");
        return;
    }
})