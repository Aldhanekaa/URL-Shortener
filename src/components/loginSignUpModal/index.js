// import library / packages / frameworks
import React, { Component, Fragment, useState, useContext } from 'react';

// import styles
import { signInSignUpModal as Modal } from '../../assets/styles'

// import function
// this function is used for when we click a button to change a modal or to appear a modal
import { inputValidation, inptInline, setErrorForInput, getInputs, verifyInputs } from '../../functions/inputFunctions';
import auth from '../../functions/auth';
import { ErrorText } from './input';
import getContent from './contents';

// import components
import CloseButton from './closeButton';
import ModalRight from './modalRight';
import Input from './input'

// import contexts
import {ModalContext} from './modalContext';
class ModalLeft extends Component {

    constructor(props) {
        super(props);

        this.auth = auth.bind(this);
        this.inputValidation = inputValidation.bind(this);
        this.inptInline = inptInline.bind(this);
        this.setErrorForInput = setErrorForInput.bind(this);
    }

    name = false;

    state = {
        name: "",
        email: "",
        password: "",
        errors: {

        },
        termsOfUse: false
    }

    componentDidMount = () => {
        
        const { email, password, name } = getInputs();

        email.addEventListener('focusout', event => {
            this.inputValidation(event.target)
        })
        password.addEventListener('focusout', event => {
            this.inputValidation(event.target)
        })

        if (this.props.content === "signup" && name && !this.name) {
            this.name = true;
            name.addEventListener('focusout', event => {
                this.inputValidation(event.target)
            })
        }


    }

    // if modal was switched to signup page then ..
    componentDidUpdate = () => {
        const { name } = getInputs();
        if (this.props.content === "signup") {
            if (!this.name) {
                this.name = true;
                name.addEventListener('focusout', event => {
                    this.inputValidation(event.target)
                })
            }

            if (this.state.errors.nameError) {
                name.parentElement.classList.add("error")
            }
        } else
            this.name = false;

    }

    // handle form submit
    handleFormSubmit = event => {
        console.log(event)
        event.preventDefault();

        this.auth()

    }

    render() {
        const { ChangeModal } = this.props.modal;
        const changeModal = this.props.changeModal;
        let content = getContent(this.props.content);

        return (
            <form className="modal-left" method="POST" data-inputerror="true" data-method={content.modalLink.method} onSubmit={this.handleFormSubmit}>
                <h1 className="modal-title">Welcome!</h1>
                <p className="modal-desc">Fanny pack hexagon food truck, street art waistcoat kitsch.</p>
                {content.modalLink.method === "signup" ?
                    <Input placeholder="John Doe" id="name" className={this.state.nameErr ? "error" : ""} type="text" inptInline={this.inptInline} state={this.state} labelText="Name" />
                    : ""
                }

                <Input id="email" placeholder="email@example.com" type="email" inptInline={this.inptInline} state={this.state} labelText="Email" />
                <Input id="password" placeholder="****" type="password" inptInline={this.inptInline} state={this.state} labelText="Password" />

                {content.modalLink.method === "signup"
                    && <div style={{ textAlign: "left", fontSize: "12px", marginBottom: "10px" }}>
                        <p><input checked={this.state.termsOfUse} onChange={() => {
                            this.setState(state => {
                                return {
                                    ...state,
                                    termsOfUse: !state.termsOfUse
                                }
                            })
                        }} type="checkbox" id="termsOfUse" /> <label htmlFor="termsOfUse">I agree to <a href="#" style={{ color: "blue" }}>Terms of use</a></label></p>
                        {this.state.errors.termsOfUseError && <ErrorText message={this.state.errors.termsOfUseError} />}
                    </div>
                }
                <div className="modal-buttons">
                    {content.modalLink.method === "signup" ? "" : <a >Forgot your password?</a>
                    }
                    <button type="submit" className="input-button" onClick={e => e.target.textContent = 'loading..'} id={content.modalLink.method}>{content.modalLink.method}</button>
                </div>
                <p className="sign-up">{content.modalLink.title} <a href={content.modalLink.link}
                    onClick={
                        event => {
                            event.preventDefault()
                            ChangeModal(content.modalLink.reverseMethod, changeModal)
                        }
                    } >{content.modalLink.linkTitle}</a></p>
            </form >

        )
    }
}

const ModalClass = () => {
    const [modal, changeModal] = useContext(ModalContext);

    return (
        <Modal className="modal">
            <div className="modal-container">
                <ModalLeft changeModal={changeModal} modal={modal} content={modal.modal} />
                <ModalRight />
                <CloseButton />
            </div>
        </Modal>
    );
}

export default ModalClass;