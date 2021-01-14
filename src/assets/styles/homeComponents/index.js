import styled from 'styled-components';
import { tablet as tabletDevice } from './mediaQueries'
import devices from '../themes';
import HomeFeatures from './features';
import BoostSection from './boost';

const Main = styled.main.attrs(props => {
  return {
    id: "main"
  }
})`
height: 100vh;
overflow-y: auto;
text-align: center;
overflow-x: hidden;
&.popup-active {
    overflow-y: hidden !important;
}


img {
    max-width: 100%;
  }

  .dsdfwer {
    position: fixed;

    &.active {
        position: fixed;
        width: 100vw;
        height:100vh;
        // background: rgb(191, 191, 191);
        z-index: 99999;
        top: 0;
    }

  }
  a:link,
  a:visited {
    color: var(--white);
    text-decoration: none;
  }
  
  a.btn {
    background-color: var(--cyan);
  }
  
  a.btn.btn-get-started {
    border-radius: 25px;
    padding: 0.8rem 2rem;
    text-transform: capitalize;
  }
  
  button.btn-shorten,
  a.btn.btn-shorten {
    width: 100%;
  }
  
  .heading {
    color: var(--very-dark-violet);
  }

  
  /* *****main navigation***** */

  div.hero,
  div.hero div.hero-img-container {
    width: 100%;
  }
  
  div.hero {
    background-color: var(--white);
    padding: 0 8% 10rem;
    position: relative;
  }
  
  div.hero div.hero-text h1.main-heading {
    padding: 1.5rem 0 1rem;
  }
  
  div.hero div.hero-text p.hero-info {
    padding-bottom: 2.5rem;
  }
  
  div.hero form.shorten-form {
    background: url("../../assets/svgs/bg-shorten-mobile.svg") center center / 100% 100%,
      no-repeat var(--dark-violet);
    border-radius: 8px;
    margin-top: 4rem;
    padding: 1.5rem;
    position: absolute;
    top: 78%;
    left: 50%;
    transform: translateX(-50%);
    width: 84%;
  }
  
  div.hero form.shorten-form input[type="text"] {
    width: 100%;
    padding: 0.8rem 1rem;
    font-size: 1rem;
    border-radius: 8px;
    -webkit-appearance: none;
    appearance: none;
    border: none;
    border: 2px solid transparent;
  }
  
  div.hero form.shorten-form.empty input[type="text"] {
    border: 2px solid var(--red);
  }
  
  div.hero form.shorten-form.empty input[type="text"]::placeholder {
    color: var(--red);
    opacity: 1;
  }
  
  div.hero form.shorten-form.empty input[type="text"]:-ms-input-placeholder {
    color: var(--red);
  }
  
  div.hero form.shorten-form.empty input[type="text"]::-ms-input-placeholder {
    color: var(--red);
  }
  
  div.hero form.shorten-form p.error-msg {
    color: var(--red);
    text-align: left;
    padding-left: 1rem;
    font-size: 0.8rem;
    display: none;
  }
  
  div.hero form.shorten-form.empty p.error-msg {
    display: block;
  }
  
  div.hero form.shorten-form button.btn-shorten {
    padding: 0.8rem;
    font-size: 1rem;
    background-color: var(--cyan);
    border: none;
    border-radius: 8px;
    color: var(--white);
    cursor: pointer;
    font-weight: 700;
    margin-top: 1rem;
  }
  
  div.shortened-links {
    width: 100%;
    padding: 6rem 8%;
  }
  
  div.shortened-links div.shortened-link-container {
    background-color: var(--white);
    border-radius: 8px;
    box-shadow: 0 4px 12px hsla(0, 0%, 0%, 0.1);
    margin-bottom: 1rem;
    padding: 1rem;
    text-align: left;
  }
  
  div.shortened-links div.shortened-link-container p.link-to-shorten,
  div.shortened-links div.shortened-link-container p.shortened-link {
    font-size: 1rem;
  }
  
  div.shortened-links div.shortened-link-container p.link-to-shorten {
    padding-bottom: 0.6rem;
    border-bottom: 1px solid var(--gray);
    color: var(--very-dark-violet);
    max-width: 270px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  
  div.shortened-links div.shortened-link-container p.shortened-link {
    padding: 0.6rem 0;
    color: var(--cyan);
  }
  
  div.shortened-links div.shortened-link-container a.btn.btn-shorten {
    display: block;
    text-align: center;
    border-radius: 8px;
    padding: 0.5rem 1.5rem;
    font-size: 1rem;
    text-transform: capitalize;
    font-weight: 700;
  }
  
  div.shortened-links div.shortened-link-container a.btn.btn-shorten.copied {
    background-color: var(--dark-violet);
  }


  
  /* *****media queries***** */
  @media only screen and ${devices["tablet"]} {
    ${tabletDevice}
  }
  
  @media only screen and (min-width: 1200px) {
    nav.main-nav {
      justify-content: space-between;
    }
  
    nav.main-nav ul.nav-links {
      background-color: transparent;
      border-radius: 12px;
      display: flex;
      flex-flow: row nowrap;
      align-items: center;
      position: static;
      left: unset;
      top: unset;
      transform: translateX(0%);
      width: calc(100%-122px);
      padding: 0;
      text-align: center;
    }
  
    nav.main-nav ul.nav-links li.nav-link {
      padding: 0 0 0 2rem;
    }
  
    nav.main-nav ul.nav-links li.nav-link:nth-child(3) {
      border-bottom: none;
    }
  
    nav.main-nav ul.nav-links li.nav-link:nth-child(4) {
      margin-left: auto;
    }
  
    nav.main-nav ul.nav-links li.nav-link:last-child {
      padding-right: 0;
      transition: all 0.2s;
    }
  
    nav.main-nav ul.nav-links li.nav-link:hover {
      -webkit-filter: brightness(115%);
      filter: brightness(115%);
    }
  
    nav.main-nav ul.nav-links li.nav-link a {
      color: var(--grayish-violet);
      transition: all 0.2s;
    }
  
    nav.main-nav ul.nav-links li.nav-link a:hover {
      color: var(--very-dark-violet);
    }
  
    nav.main-nav ul.nav-links li.nav-link:last-child a {
      color: var(--white);
      padding: 0.6rem 2rem;
    }
  
    nav.main-nav i#icon-mobile-nav-toggle {
      display: none !important;
    }
  
    div.hero div.hero-text h1.main-heading {
      font-size: 3.8rem;
      line-height: 1.3;
      max-width: 600px;
    }
  
    div.hero div.hero-text p.hero-info {
      max-width: 500px;
    }
  
  }
  

`

export { Main, HomeFeatures, BoostSection };