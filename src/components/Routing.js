import './style.scss'

import { Routes } from "../containers/";
import {ModalProvider} from '../components/loginSignUpModal/modalContext';
import React, { useState, Component } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";

import axios from 'axios';

const { Home, Dashboard, pageRoute } = Routes;

export default class App extends Component {

  state = {
    loggedIn: false,
    fetchingUser: false
  }

  componentDidMount = () => {
    console.log('props', this.props)
    axios({
      method: "POST",
      data: {
        username: 'aldhaneka.aufa.izzat@gmail.com',
        password: '12345'
      },
      withCredentials: true,
      url: "http://localhost:3004/api/auth/login",
    })
      .then(res => {
        console.log(res)
        // if (res.data == "Successfully Authenticated") {
        //   window.history.pushState({}, "", "/dashboard")
        // }
      }).catch(err => {
        console.log(err)
      })
    // checkUser()
    //   .then(res => {
    //     console.log(res)
    //     if (res.data && res.data.username) {
    //       this.setState({
    //         loggedIn: true,
    //         fetchingUser: true
    //       })
    //     }
    //   }).catch(err => {
    //     console.log(err)
    //     this.setState({
    //       loggedIn: false,
    //       fetchingUser: true
    //     })
    //   })
  }
  render() {
    const { loggedIn } = this.state;
    return (
      <Router>
        <Switch >

          <Route exact path="/page/Dashboard">
            <Dashboard />
          </Route>

          {/* <Route path="/page/:page" component={pageRoute} /> */}

          <Route exact path="/">
            {loggedIn ? <Redirect to="/dashboard" /> :
            <ModalProvider>
              <Home />

            </ModalProvider>
            }
          </Route>

          <Route >
            <NotFound />
          </Route>

        </Switch>
      </Router >
    );
  }
}

function NotFound() {
  return (
    <p>Error Not Found</p>
  )
}
