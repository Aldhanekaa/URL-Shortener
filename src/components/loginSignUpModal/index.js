import React, { Component, Fragment, useState } from 'react';
import axios from 'axios';

import '../../assets/scss/loginSignupModal/index.scss'


const Input = (props) => {
    return (
        <div className="input-block">
            <label htmlFor={props.id} className={`input-label ${props.className}`}>* {props.labelText}</label>
            <input type={props.type} name={props.id} id={props.id} onChange={props.inptInline} placeholder="Password" />
            {props.state.errors[`${props.id}Error`] ? <ErrorText message={props.state.errors[`${props.id}Error`]} /> : ""
            }
        </div>
    )
}

class ModalLeft extends Component {

    state = {
        errors: {

        }
    }

    componentDidMount = () => {

        const { email, password, name } = this.getInputs();

        email.addEventListener('focusout', event => {
            this.inputValidation(event.target)
        })
        password.addEventListener('focusout', event => {
            this.inputValidation(event.target)
        })

        if (this.props.content === "signup") {

            name.addEventListener('focusout', event => {
                this.inputValidation(event.target)
            })
        }


    }

    // if modal was switched to signup page then ..
    componentDidUpdate = () => {
        const { name } = this.getInputs();
        if (this.props.content === "signup") {
            name.addEventListener('focusout', event => {
                this.inputValidation(event.target)
            })
            if (this.state.errors.nameError) {
                name.parentElement.classList.add("error")
            }
        }
    }

    // used for onChange
    inptInline = ({ target }) => {
        this.inputValidation(target)
    }

    // input validation
    inputValidation = event => {
        const value = event.value;
        const Id = event.id;
        const emailRegex = /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/;

        if (value == "") {
            this.setErrorOrNot(Id, Id + " couldn't be empty.", event, "error", value)

        } else {
            if (Id === "email" && !emailRegex.test(value)) {
                this.setErrorOrNot(Id, "Invalid email.", event, "error", value);
            } else {
                this.setErrorOrNot(Id, false, event, "", value)
            }
        }
    }

    // set Error for input, by changing state
    setErrorOrNot = (key, value, event, status, inputValue) => {

        // console.log("first", errors)
        // console.log("last", errors)
        this.setState((state) => {
            console.log(key)
            state[key] = inputValue;
            state["errors"][key + "Error"] = value;

            return state
        }, () => {
            if (event) {
                if (status === "error") {
                    event.parentElement.classList.add("error");
                } else {
                    event.parentElement.classList.remove("error");
                }
            }
        })
    }

    // handle form submit
    handleFormSubmit = event => {
        event.preventDefault();

        Object.values(this.getInputs()).filter(input => input != null).forEach((input, i, p) => {
            this.inputValidation(input)
        })
        setTimeout(() => {
            if (!this.state.errors.emailError && !this.state.errors.passwordError) {
                if (this.props.content == "login") {

                    axios({
                        method: "POST",
                        data: {
                            username: this.state.email,
                            password: this.state.password
                        },
                        withCredentials: true,
                        url: "http://localhost:3004/auth/?_method=login",
                    })
                        .then(res => {
                            console.log("D")
                            console.log(res)
                            if (res.data == "Successfully Authenticated") {
                                window.location.replace("/Dashboard");
                            }
                        }).catch(err => {
                            console.log(err)
                        })
                } else if (!this.state.errors.nameError) {
                    //
                }
            }
        }, 1000);

    }

    // get all inputs (password, email, username)
    getInputs = () => {
        const email = document.querySelector('#email');
        const password = document.querySelector('#password');
        const name = document.querySelector("#name");

        return {
            email,
            password,
            name
        }
    }

    render() {

        let content;
        // check modal content
        if (this.props.content === "signup") {
            content = {
                modalLink: {
                    title: "Already have an Account?",
                    linkTitle: "Login now",
                    link: "/?__method=login",
                    method: "singup",
                    reverseMethod: "login"
                }
            }
        } else {
            content = {
                ForgotUrPassword: true,
                modalLink: {
                    title: "Don't have an account?",
                    linkTitle: "Sign up now",
                    link: "/?__method=signup",
                    method: "login",
                    reverseMethod: "signup"

                }
            }
        }

        return (
            <form className="modal-left" method="POST" data-inputerror="true" data-method={content.modalLink.method} onSubmit={this.handleFormSubmit}>
                <h1 className="modal-title">Welcome!</h1>
                <p className="modal-desc">Fanny pack hexagon food truck, street art waistcoat kitsch.</p>
                {content.modalLink.method === "singup" ?
                    <Input id="name" className={this.state.nameErr ? "error" : ""} type="text" inptInline={this.inptInline} state={this.state} labelText="Name" />
                    : ""
                }

                <Input id="email" type="email" inptInline={this.inptInline} state={this.state} labelText="Email" />
                <Input id="password" type="password" inptInline={this.inptInline} state={this.state} labelText="Password" />

                <div className="modal-buttons">
                    {content.modalLink.method === "signup" ? "" : <a >Forgot your password?</a>
                    }
                    <button type="submit" className="input-button" id={content.modalLink.method}>{content.modalLink.method}</button>
                </div>
                <p className="sign-up">{content.modalLink.title} <a href={content.modalLink.link} onClick={this.props.onClick} id={content.modalLink.reverseMethod}>{content.modalLink.linkTitle}</a></p>
            </form >

        )
    }
}

function ErrorText(props) {
    return (
        <p style={{
            "fontSize": "10px",
            "color": "#f97878",
            "margiTop": "10px"
        }}>{props.message}</p>
    )
}

const ModalRight = (props) => {
    return (
        <div className="modal-right">
            <img src="https://images.unsplash.com/photo-1512486130939-2c4f79935e4f?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=dfd2ec5a01006fd8c4d7592a381d3776&auto=format&fit=crop&w=1000&q=80" alt="" />
        </div>

    )
}

const CloseButton = () => {
    return (
        <button className="icon-button close-button">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
                <path d="M 25 3 C 12.86158 3 3 12.86158 3 25 C 3 37.13842 12.86158 47 25 47 C 37.13842 47 47 37.13842 47 25 C 47 12.86158 37.13842 3 25 3 z M 25 5 C 36.05754 5 45 13.94246 45 25 C 45 36.05754 36.05754 45 25 45 C 13.94246 45 5 36.05754 5 25 C 5 13.94246 13.94246 5 25 5 z M 16.990234 15.990234 A 1.0001 1.0001 0 0 0 16.292969 17.707031 L 23.585938 25 L 16.292969 32.292969 A 1.0001 1.0001 0 1 0 17.707031 33.707031 L 25 26.414062 L 32.292969 33.707031 A 1.0001 1.0001 0 1 0 33.707031 32.292969 L 26.414062 25 L 33.707031 17.707031 A 1.0001 1.0001 0 0 0 32.980469 15.990234 A 1.0001 1.0001 0 0 0 32.292969 16.292969 L 25 23.585938 L 17.707031 16.292969 A 1.0001 1.0001 0 0 0 16.990234 15.990234 z"></path>
            </svg>
        </button>

    )
}

class Modal extends Component {

    state = {}

    componentDidMount = () => {
        const closeButton = document.querySelector(".close-button");
        closeButton.addEventListener("click", this.closeModal)
    }

    gMB = () => {
        const modal = document.querySelector(".modal");
        const dsdfwer = document.querySelector('.dsdfwer')
        return {
            modal,
            dsdfwer
        }
    }

    closeModal = () => {
        const modal = document.querySelector(".modal");
        const dsdfwer = document.querySelector('.dsdfwer');
        dsdfwer.classList.remove("active")
        modal.classList.remove("is-open");
        document.body.classList.remove("popup-active");

        this.props.closeModal()
    };

    render() {

        return (
            <Fragment>
                <div className="modal">
                    <div className="modal-container">

                        <ModalLeft content={this.props.content} onClick={this.props.loginOrSignupClick} />
                        <ModalRight />
                        <CloseButton />
                    </div>

                </div>
            </Fragment>

        );
    }
}

export default Modal;