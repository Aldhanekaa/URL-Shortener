
import React, { Component, Fragment, useEffect, useState, useContext } from 'react';
import { Home } from '../../assets/styles';
import {ModalContext} from '../../components/loginSignUpModal/modalContext';
import loginOrSignupClick from '../../functions/loginOrSignupClick';

const { HomeFeatures, BoostSection } = Home;


const Content = () =>  {
    const [modal, changeModal] = useContext(ModalContext)

    
    return (
        <Fragment>

            <div className="hero">
                    <div className="hero-img-container">
                        <img
                            src="https://res.cloudinary.com/daaj49exo/image/upload/v1609601441/illustration-working_ylm1tu.svg"
                            alt="Illustration of a person working with a computer"
                            className="hero-img"
                        />
                    </div>
                    <div className="hero-text">
                        <h1 className="main-heading heading">More than just shorter links</h1>
                        <p className="hero-info info">
                            Build your brand's recognition and get detailed insights on how links
                            are performing.
        </p>
                        <a href="#shorten-form" className="btn btn-get-started" role="button"
                        >get started</a>

                    </div>
                    <form className="shorten-form" id="shorten-form">
                        <label htmlFor="shorten">
                            <input
                                type="text"
                                name="shorten"
                                id="shorten"
                                placeholder="Shorten a link here..."
                            />
                        </label>
                        <p className="error-msg" id="error-msg"></p>
                        <button
                            onClick={
                                event => {
                                    event.preventDefault()
                                    modal.ChangeModal("signup", changeModal)
                                }
                            }
                            className="btn btn-shorten btn-shorten-it"
                            form="shorten-form"
                            type="submit"
                        >
                            Shorten it!
        </button>
                    </form>

                </div>

            <div className="shortened-links"></div>

            <Features />

            <BoostSection>
                <h2 className="boost-heading heading">Boost your links today</h2>
                <a
                    href="#shorten-form"
                    className="btn btn-boost btn-get-started"
                    role="button"
                >
                    get started
                </a>
            </BoostSection>
         </Fragment>

    );
    
}

function Features() {

    return (
        <HomeFeatures className="section-features" id="section-features">
            <h2 className="section-heading heading">advanced statistics</h2>
            <p className="info section-features-info">
                Track how your links are performing across the web with our advanced
                statistics dashboard.
      </p>
            <div className="features">
                <div className="feature">
                    <div className="feature-icon-container">
                        <i className="far fa-chart-bar"></i>                    </div>
                    <h3 className="feature-title heading">brand recognition</h3>
                    <p className="info feature-info">
                        Boost your brand recognition with each click. Generic links don't
                        mean a thing. Branded links help instill confidence in your content.
          </p>
                </div>
                <div className="feature">
                    <div className="feature-icon-container">
                        <i className="fas fa-tachometer-alt"></i>                    </div>
                    <h3 className="feature-title heading">detailed records</h3>
                    <p className="info feature-info">
                        Gain insights into who is clicking your links. Knowing when and
                        where people engage with your content helps inform better decisions.
          </p>
                </div>
                <div className="feature">
                    <div className="feature-icon-container">
                        <i className="fas fa-tools"></i>
                    </div>
                    <h3 className="feature-title heading">fully customizable</h3>
                    <p className="info feature-info">
                        Improve brand awareness and content discoverability through
                        customizable links, supercharging audience engagement.
          </p>
                </div>
            </div>
        </HomeFeatures>

    )
}

export default Content;

