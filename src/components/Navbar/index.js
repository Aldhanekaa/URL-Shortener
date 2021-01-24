import React, { Component } from 'react'
import { homeNavbar as Nav } from '../../assets/styles'
import loginOrSignupClick from "../../functions/loginOrSignupClick";
import { Link } from 'react-router-dom'

class Navbar extends Component {
  state = {
    login: false
  }

  componentDidMount = () => {
    const mobileNavToggle = document.getElementById("icon-mobile-nav-toggle");
    const mobileNav = document.getElementById("nav-links");

    mobileNavToggle.addEventListener("click", () => {
      if (mobileNavToggle.classList.contains("fa-bars")) {
        this.displayMobileNav(mobileNavToggle, mobileNav);
      } else {
        this.hideMobileNav(mobileNavToggle, mobileNav);
      }
    });

    // simulate nav link functionality
    mobileNav.addEventListener("click", (e) => {
      if (e.target.tagName === "A") {
        this.hideMobileNav(mobileNavToggle, mobileNav);
      }
    });

  }

  displayMobileNav = (mobileNavToggle, mobileNav) => {
    // change icon to times
    mobileNavToggle.className = "fas fa-times";
    // show mobile nav
    mobileNav.classList.add("active");
  }

  hideMobileNav = (mobileNavToggle, mobileNav) => {
    // change icon to bars
    mobileNavToggle.className = "fas fa-bars";
    // hide mobile nav
    mobileNav.classList.remove("active");
  }

  togglePopover = () => {
    console.log("hello!")
  }

  render() {
    return (
      <Nav>
        <h2>MeLink</h2>
        <ul className="nav-links" id="nav-links">
          <li className="nav-link">
            <Link to="/section-features" className="nav-link-anchor">
              features
                        </Link>
          </li>
          <li className="nav-link">
            <Link to="/pricing" className="nav-link-anchor">
              Pricing
                        </Link>
          </li>
          <li className="nav-link">
            <Link to="/recourses" className="nav-link-anchor">
              resources
                        </Link>
          </li>
          {this.props.login.status ? ""
            : <li className="nav-link"><a href="/?page=login" onClick={
              event => {
                event.preventDefault()
                loginOrSignupClick(event, this.props, "login")
              }
            } className="nav-link-anchor"
              data-modal="login">login</a></li>
          }
          <li className="nav-link">
            <a href="/?page=signup" className="nav-link-anchor btn btn-sign-up"
              onClick={
                event => {
                  event.preventDefault()
                  loginOrSignupClick(event, this.props, "signup")
                }
              } role="button"
            >sign up</a>
          </li>
        </ul>
        <i
          className="fas fa-bars"
          id="icon-mobile-nav-toggle"
        ></i>
      </Nav>

    )
  }
}

export default Navbar;