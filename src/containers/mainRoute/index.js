import React, { Component, useContext, useMemo, useRef, useEffect } from 'react'
import Home from '../../pages/home';
import { Navbar as HomePageNavbar, Footer, LoginSignUpModal } from '../../components';
import { Main } from '../../assets/styles/homeComponents';
import {ModalContext, ModalFunctionsContext} from '../../components/loginSignUpModal/modalContext';


const Parent = () => {
  let c = useRef();
  const [modal, changeModal] = useContext(ModalContext);

  useMemo(() => {
    if (modal.modal !== 'signup' && modal.modal !== "login") {
      c.current = "";
    } else {
      c.current = <LoginSignUpModal />;
    }
  }, [modal.modal]);

  useEffect(() => {
    if (c.current) {
      modal.openModal()
    }
  }, [c.current]);


  return (
    <Main data-page="home">
      <div className="dsdfwer">
        {c.current}
      </div>
      <HomePageNavbar  />
      <Home />
      <Footer />
    </Main>
  );
}


export default Parent;