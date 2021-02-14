module.exports = (inputs, error) => {

    let errors = inputs.map((input, idx, self) => {
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
    return errors
    // console.log(errors, error)
}