import React, { useState } from "react"
import ServerForm from "../ServerForm"
import SingUpForm from "../SessionForm/SignUpForm/Index"
import SignInForm from "../SessionForm/SignInForm/Index"
import { InnerContainer, OuterContainer } from "./Style"

const SIGN_UP = 'signUp'
const SIGN_IN = 'signIn'
const CREATE_SERVER = 'createServer'

const Modal = ({ closeModal, modalType }) => {
    let component;
    switch (modalType) {
        case SIGN_UP:
            component = <SingUpForm />
            break;
        case SIGN_IN:
            component = <SignInForm />
            break;
        case CREATE_SERVER:
            component = <ServerForm />
            break;
        default:
            break;
    }
    
    return (
        <OuterContainer onClick={() => closeModal()}>
            { /* first parameter for event arrow functions will always be the event object which has a bunch of parameters that can be accessed */ }
            <InnerContainer onClick={(e) => e.stopPropagation()}>
                {component}
            </InnerContainer>
        </OuterContainer>
    )
}
export default Modal

