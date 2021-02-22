import { useState, createContext, useMemo } from "react";

const ModalContext = createContext();
const ModalFunctionsContext = createContext();

function openModal() { 
  console.log(this)
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

function getModal_Main_AndModalsParent() {
    const modal = document.querySelector(".modal");
    const dsdfwer = document.querySelector('.dsdfwer');
    const main = document.querySelector("#main");
    return {
      modal,
      dsdfwer,
      main
    }
}

function closeModal(changeModal) {
  const { modal, dsdfwer, main } = this.getModal_Main_AndModalsParent();
  dsdfwer.classList.remove("active")
  modal.classList.remove("is-open");
  main.classList.remove("popup-active");
  this.ChangeModal(false, changeModal);
};

function ChangeModal(changeModalTo, changeModal) {
  changeModal(state => {
      return Object.assign({}, state, {modal: changeModalTo})
  });
}

const ModalProvider = props => {

  const [modal, changeModal] = useState({
    modal: false,
    closeModal,
    openModal,
    getModal_Main_AndModalsParent,
    ChangeModal,

  })

  return (
    <ModalContext.Provider value={[modal, changeModal]}>
      {props.children}
    </ModalContext.Provider>
  )
}

export {ModalProvider, ModalContext, ModalFunctionsContext};