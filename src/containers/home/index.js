
import { useHistory } from "react-router-dom";
import React, { Component, Fragment } from 'react'

import Home from '../../pages/home';
import { Navbar as HomePageNavbar, Footer, LoginSignUpModal } from '../../components';

import { homeComponents } from '..'
import axios from 'axios';


let Main;
class Parent extends Component {
  state = {
    login: {
      status: false
    }
  }
  // <link href="https://cdn.jsdelivr.net/gh/hung1001/font-awesome-pro@8af0edd/css/all.css" rel="stylesheet" type="text/css" />

  componentDidMount = () => {
    Main = homeComponents.Main;
    console.log(Main)
  }

  loginOrSignupClick = event => {

    if (event.target.id === 'login') {
      this.changeModal(event.target.id, this.openModal);
      event.preventDefault()
    } else {
      this.changeModal(event.target.id, this.openModal)
      event.preventDefault()
    }

    return false
  }

  getModal_Main_AndModalsParent = () => {
    const modal = document.querySelector(".modal");
    const dsdfwer = document.querySelector('.dsdfwer');
    const main = document.querySelector("#main");
    return {
      modal,
      dsdfwer,
      main
    }
  }

  openModal = () => {
    const { dsdfwer, modal, main } = this.getModal_Main_AndModalsParent()

    dsdfwer.classList.add("active")
    modal.classList.add("is-open");
    main.classList.add("popup-active");

    return false
  }

  changeModal = (param, next) => {
    this.setState({
      modal: param
    }, next)
  }

  render() {
    let c;
    if (this.state.modal !== 'signup' && this.state.modal !== "login") {
      c = this.state.modal;
    } else {
      c = <LoginSignUpModal getModal_Main_AndModalsParent={this.getModal_Main_AndModalsParent} loginOrSignupClick={this.loginOrSignupClick} content={this.state.modal} closeModal={this.changeModal} />
    }

    return (
      <>
        {Main ?
          <Main data-page="home">
            <div className="dsdfwer"
            >
              {c}
            </div>
            <HomePageNavbar login={this.state.login} loginOrSignupClick={this.loginOrSignupClick} />
            <Home loginOrSignupClick={this.loginOrSignupClick} />

            <Footer />

          </Main>
          : ""}
      </>
    );
  }
}

export default Parent;