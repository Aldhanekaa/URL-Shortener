// import library / packages / frameworks
import React, { Component, Fragment, useState } from 'react';
import axios from 'axios';

// import styles
import { signInSignUpModal as Modal } from '../../assets/styles'

// import function
// this function is used for when we click a button to change a modal or to appear a modal
import loginOrSignupClick from '../../functions/loginOrSignupClick';

// import components
import CloseButton from './closeButton';
import ModalRight from './modalRight';
import Input from './input'

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
        const value = event.value ? event.value.trim() : event.value;
        const Id = event.id;
        const emailRegex = /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/;

        if (!value) {
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
                    method: "signup",
                    reverseMethod: "login",
                    forgotPassword: false
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
                    reverseMethod: "signup",
                    forgotPassword: true
                }
            }
        }

        return (
            <form className="modal-left" method="POST" data-inputerror="true" data-method={content.modalLink.method} onSubmit={this.handleFormSubmit}>
                <h1 className="modal-title">Welcome!</h1>
                <p className="modal-desc">Fanny pack hexagon food truck, street art waistcoat kitsch.</p>
                {content.modalLink.method === "signup" ?
                    <Input id="name" className={this.state.nameErr ? "error" : ""} type="text" inptInline={this.inptInline} state={this.state} labelText="Name" />
                    : ""
                }

                <Input id="email" type="email" inptInline={this.inptInline} state={this.state} labelText="Email" />
                <Input id="password" type="password" inptInline={this.inptInline} state={this.state} labelText="Password" />

                {content.modalLink.method === "signup"
                    ? <div style={{ textAlign: "left", fontSize: "12px", marginBottom: "10px" }}>
                        <p><input type="checkbox" /> I agree to <a href="#" style={{ color: "blue" }}>Terms of use</a></p></div>
                    : ""

                }
                <div className="modal-buttons">
                    {content.modalLink.method === "signup" ? "" : <a >Forgot your password?</a>
                    }
                    <button type="submit" className="input-button" id={content.modalLink.method}>{content.modalLink.method}</button>
                </div>
                <p className="sign-up">{content.modalLink.title} <a href={content.modalLink.link}
                    onClick={
                        event => {
                            event.preventDefault()
                            loginOrSignupClick(event, this.props, content.modalLink.reverseMethod)
                        }
                    } >{content.modalLink.linkTitle}</a></p>
            </form >

        )
    }
}

class ModalClass extends Component {

    state = {}

    closeModal = () => {
        window.history.pushState({}, "", "/")
        const { modal, dsdfwer, main } = this.props["getModal_Main_AndModalsParent"]();
        dsdfwer.classList.remove("active")
        modal.classList.remove("is-open");
        main.classList.remove("popup-active");

        this.props.closeModal()
    };

    render() {

        return (
            <Modal className="modal">
                <div className="modal-container">

                    <ModalLeft content={this.props.content} onClick={this.props.loginOrSignupClick} />
                    <ModalRight />
                    <CloseButton closeModal={this.closeModal} />
                </div>

            </Modal>

        );
    }
}

export default ModalClass;