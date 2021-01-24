export function setErrorForInput(key, error, event, inputValue) {

    // console.log("first", errors)
    // console.log("last", errors)
    this.setState((state) => {
        state[key] = inputValue;
        state["errors"][key + "Error"] = error;

        return state
    }, () => {
        if (event) {
            if (error) {
                event.parentElement.classList.add("error");
            } else {
                event.parentElement.classList.remove("error");
            }
        }
    })
}

export function inputValidation(event) {
    const value = event.value ? event.value.trim() : event.value;
    const Id = event.id;

    console.log(event)

    const emailRegex = /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/;

    if (Id == 'name' && value.length > 10) {
        this.setErrorForInput(Id, "Maximum character 10", event, value);
        return;
    }

    if (!value) {
        this.setErrorForInput(Id, Id + " cannot be empty.", event, value)

    } else {
        if (Id === "email" && !emailRegex.test(value)) {
            this.setErrorForInput(Id, "Please provide a valid email.", event, value);
        } else if (Id === "password" && value.length < 5) {
            this.setErrorForInput(Id, false, event, value)
        } else {
            this.setErrorForInput(Id, false, event, value)
        }
    }
}

// to get inputs 
export function getInputs() {
    const email = document.querySelector('#email');
    const password = document.querySelector('#password');
    const name = document.querySelector("#name");

    return {
        email,
        password,
        name
    }
}

// used for onChange
export function inptInline({ target }) {
    this.inputValidation(target)
}
