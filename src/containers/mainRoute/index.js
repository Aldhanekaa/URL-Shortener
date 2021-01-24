
import { useHistory } from "react-router-dom";
import React, { Component, Fragment, useEffect } from 'react'

import Home from '../../pages/home';
import { Navbar as HomePageNavbar, Footer, LoginSignUpModal } from '../../components';

import { homeComponents } from '..';
import { Main } from '../../assets/styles/homeComponents';
import axios from 'axios';


class Parent extends Component {
  state = {
    login: {
      status: false
    }
  }
  // <link href="https://cdn.jsdelivr.net/gh/hung1001/font-awesome-pro@8af0edd/css/all.css" rel="stylesheet" type="text/css" />

  componentDidMount = () => {
    console.log(this.props)
  }
  loginOrSignupClick = modal => {
    // console.log("loginOrSignupClick")
    // console.log("Modal", modal)

    window.history.pushState({}, "", "/page/" + modal)

    if (modal === 'login') {
      this.changeModal(modal, this.openModal);
    } else {
      this.changeModal(modal, this.openModal)
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

    if (modal) {
      dsdfwer.classList.add("active")
      modal.classList.add("is-open")
      main.classList.add("popup-active");
    } else {
      window.alert("Something has changed..")
    }


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
      c = "";
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
            <HomePageNavbar login={this.state.login} onClick={this.loginOrSignupClick} />
            <Home onClick={this.loginOrSignupClick} />

            <Footer />

          </Main>
          : ""}
      </>
    );
  }
}


export default Parent;