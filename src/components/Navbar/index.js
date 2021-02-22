import React, { useState, useEffect, useContext } from 'react'
import { homeNavbar as Nav } from '../../assets/styles'
import loginOrSignupClick from "../../functions/loginOrSignupClick";
import { Link } from 'react-router-dom';

import {ModalContext} from '../../components/loginSignUpModal/modalContext';

const Navbar = () =>  {
  const [modal, changeModal] = useContext(ModalContext);

  useEffect(() => {
    const mobileNavToggle = document.getElementById("icon-mobile-nav-toggle");
    const mobileNav = document.getElementById("nav-links");

    mobileNavToggle.addEventListener("click", () => {
      if (mobileNavToggle.classList.contains("fa-bars")) {
        displayMobileNav(mobileNavToggle, mobileNav);
      } else {
        hideMobileNav(mobileNavToggle, mobileNav);
      }
    });

    // simulate nav link functionality
    mobileNav.addEventListener("click", (e) => {
      if (e.target.tagName === "A") {
        hideMobileNav(mobileNavToggle, mobileNav);
      }
    });

  }, [])

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
          {["login", "signup"].map(item => {
            return (
              <li className='nav-link'><a href="/?page=login" onClick={
                event => {
                  event.preventDefault()
                  loginOrSignupClick(item, changeModal)
                }
              } role={item === "signup" ? "button" : ""} className={`nav-link${item === 'signup' ? "-anchor btn btn-sign-up" : ""}`} data-modal={item}>{item}</a></li>
            );
          })}
          
        </ul>
        <i
          className="fas fa-bars"
          id="icon-mobile-nav-toggle"
        ></i>
      </Nav>

    )
  
}

function displayMobileNav(mobileNavToggle, mobileNav)  {
  // change icon to times
  mobileNavToggle.className = "fas fa-times";
  // show mobile nav
  mobileNav.classList.add("active");
}

function hideMobileNav(mobileNavToggle, mobileNav) {
  // change icon to bars
  mobileNavToggle.className = "fas fa-bars";
  // hide mobile nav
  mobileNav.classList.remove("active");
}

export default Navbar;