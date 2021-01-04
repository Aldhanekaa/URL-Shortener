import React, { Component, Fragment } from 'react'

import Home from '../../pages/home';
import { Navbar as HomePageNavbar, Footer, LoginSignUpModal } from '../../components'

import axios from 'axios'

class Parent extends Component {
  state = {}
  // <link href="https://cdn.jsdelivr.net/gh/hung1001/font-awesome-pro@8af0edd/css/all.css" rel="stylesheet" type="text/css" />

  componentDidMount = () => {
    axios({
      method: "POST",
      data: {
        email: "aldhaneka@gmail.com",
        password: "123",
        "_method": "login"
      },
      withCredentials: true,
      url: "http://localhost:3004/login",
    })
      .then(res => {
        console.log(res)
      }).catch(err => {
        console.log(err)
      })

    // axios.get("http://localhost:3004/")
    //   .then(res => {
    //     console.log(res)
    //   })
  }

  loginOrSignupClick = event => {

    if (event.target.id === 'login') {
      this.modalState(event.target.id, this.openModal);
      event.preventDefault()
    } else {
      this.modalState(event.target.id, this.openModal)
      event.preventDefault()
    }

    return false
  }

  gMB = () => {
    const modal = document.querySelector(".modal");
    const dsdfwer = document.querySelector('.dsdfwer')
    return {
      modal,
      dsdfwer
    }
  }

  openModal = () => {
    const { dsdfwer, modal } = this.gMB()

    dsdfwer.classList.add("active")
    modal.classList.add("is-open");
    document.body.classList.add("popup-active");

    return false
  }

  closeModal = () => {
    this.modalState('')
  }

  modalState = (param, next) => {
    this.setState({
      modal: param
    }, next)
  }

  render() {
    let c;
    if (this.state.modal !== 'signup' && this.state.modal !== "login") {
      c = this.state.modal;
    } else {
      c = <LoginSignUpModal loginOrSignupClick={this.loginOrSignupClick} content={this.state.modal} closeModal={this.closeModal} />
    }
    return (
      <Fragment >
        <div className="dsdfwer"
        >
          {c}
        </div>
        <HomePageNavbar loginOrSignupClick={this.loginOrSignupClick} />
        <Home loginOrSignupClick={this.loginOrSignupClick} />
        <Footer />

      </Fragment>
    );
  }
}

export default Parent;