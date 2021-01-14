import styled from 'styled-components'

export default styled.div`
position: fixed;
left: 0;
bottom: -60px;
width: 100%;
height: 60px;
background: rgba(51,51,51, 0.5);
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
transition: 0.4s;


.modal-container {
  display: flex;
  max-width: 720px;
  width: 100%;
  border-radius: 10px;
  overflow: hidden;
  position: absolute;
  opacity: 0;
  pointer-events: none;
  transition-duration: 0.3s;
  background: #fff;
}

.modal-title {
  font-size: 26px;
  margin: 0;
  font-weight: 400;
  color: #55311c;
}

.modal-desc {
  margin: 6px 0 30px 0;
}

.modal-left {
  padding: 60px 30px 20px;
  background: #fff;
  flex: 1.5;
  transition-duration: 0.5s;
  transform: translateY(80px);
  opacity: 0;
}

.modal-button {
  color: darken(#8c7569, 5%);
  font-family: "Nunito", sans-serif;
  font-size: 18px;
  cursor: pointer;
  border: 0;
  outline: 0;
  padding: 10px 40px;
  border-radius: 30px;
  background: rgb(255, 255, 255);
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.16);
  transition: 0.3s;
  
  &:hover {
    border-color: rgba(255, 255, 255, 0.2);
    background: rgba(#fff, 0.8);
  }
}

.modal-right {
  flex: 2;
  font-size: 0;
  transition: 0.3s;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    transform: scale(2);
    object-fit: cover;
    transition-duration: 1.2s;
  }
}

&.is-open {
  bottom: 0;
  height: 100%;
  background: rgba(51, 51, 51, 0.85);
  .modal-button {
    opacity: 0;
  }

  .modal-container {
    opacity: 1;
    transition-duration: 0.6s;
    pointer-events: auto;
    transform: translateY(0) scale(1);
  }

  .modal-right img {
    transform: scale(1);
  }

  .modal-left {
    transform: translateY(0);
    opacity: 1;
    transition-delay: 0.1s;
  }
}

.modal-buttons {
  display: flex;
  justify-content: space-between;
  align-items: center;

  a {
    color: rgba(#333, 0.6) !important;
    font-size: 14px;
  }
}

  
.sign-up {
margin: 60px 0 0;
font-size: 14px;
text-align: center;

a {
  color: #8c7569 !important;
}
}

.input-button {
padding: 8px 12px;
outline: none;
border: 0;
color: #fff;
border-radius: 4px;
background: #8c7569;
font-family: "Nunito", sans-serif;
transition: 0.3s;
cursor: pointer;

&:hover {
  background: #55311c;
}
}


.input-block {
display: flex;
flex-direction: column;
padding: 10px 10px 8px;
border: 1px solid #ddd;
border-radius: 4px;
margin-bottom: 20px;
transition: 0.3s;

&.error {
  color: #f97878;
  border-color: #f97878;
  &:focus-within {
    border-color: #f97878;
    .input-label {
      color: #f97878;
    }
  }
  .input-label {
    color: #f97878;
  }
}

.input-label {
  font-size: 11px;
  text-transform: uppercase;
  font-family: "Nunito", sans-serif;
  font-weight: 600;
  letter-spacing: 0.7px;
  color: #8c7569 ;
  transition: 0.3s;
}

input {
  outline: 0;
  border: 0;
  padding: 4px 0 0;
  font-size: 14px;
  font-family: "Nunito", sans-serif;

  &::placeholder {
    color: #ccc;
    opacity: 1;
  }
}

&:focus-within {
  border-color: #8c7569;

  .input-label {
    color: rgba(#8c7569, 0.8) ;
  }
}
}

.icon-button {
outline: 0;
position: absolute;
right: 10px;
top: 12px;
width: 32px;
height: 32px;
border: 0;
background: 0;
padding: 0;
cursor: pointer;
}

.scroll-down {
position: fixed;
top: 50%;
left: 50%;
display: flex;
flex-direction: column;
align-items: center;
text-align: center;
color: darken(#8c7569, 5%);
font-size: 32px;
font-weight: 800;
transform: translate(-50%, -50%);
svg {
  margin-top: 16px;
  width: 52px;
  fill: currentColor;
}
}


@media(max-width: 750px) {
.modal-container {
  width: 90%;
}
.modal-right {
  display: none;
}
}
`