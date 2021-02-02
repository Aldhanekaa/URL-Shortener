import { getInputs } from "./inputFunctions";
import axios from 'axios';


function signup() {
    console.log(this)
}

export default function () {
    const Inputs = getInputs();

    if (this.props.content == "signup") {
        const termsOfUse = document.getElementById("termsOfUse");

        axios({
            method: "POST",
            data: [
                {
                    Id: "email",
                    value: this.state.email
                },
                {
                    Id: "name",
                    value: this.state.name,
                },
                {
                    Id: "password",
                    value: this.state.password,
                },
                {
                    Id: "termsOfUse",
                    value: this.state.termsOfUse
                }
            ],
            withCredentials: true,
            url: "http://localhost:3004/api/auth/register",
        }).then(res => {
            console.log(res)

            if (Array.isArray(res.data.inputErrors)) {
                res.data.inputErrors.forEach(({ Id, error, value }) => {
                    let input = Inputs[Id] ? Inputs[Id] : termsOfUse;

                    this.setErrorForInput(Id, error, input, value);

                });
            }

        }).catch(err => {
            console.error(err)
        })
    } else {

    }
}

