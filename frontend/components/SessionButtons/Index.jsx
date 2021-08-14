import React, { useState } from "react"
import { useSelector, useDispatch } from "react-redux"
import { bindActionCreators } from "redux"
import uiActionCreators from "../../state/actions/ui"
import sessionActionCreators from '../../state/actions/session'
import Modal from "../Modal"
import SessionForm from "../SessionForm/SignUpForm/Index"
import * as SessionApiUtil from "../../utils/session_api_util" // SessionApiUtil will be an object that holds all the exports from the import file

const SessionButtons = () => {
    const dispatch = useDispatch()
    const { openModal, logout } = bindActionCreators({ ...uiActionCreators, ...sessionActionCreators }, dispatch)
    // How get if currentUser exists or not?
    // Use selector gets passed the store, and then we extract the part we want. In this case currentUser
    // which is stored under session
    const currentUser = useSelector(store => store.session.currentUser)

    const handleClick = () => {
      logout()
    }

    return (
        <>
        <div>
            {
              currentUser ? (
                <button type="button" onClick={handleClick}>sign out</button>
              ) : (
                  <>
                    <button onClick={() => openModal('signUp')}>sign up</button>
                    <button onClick={() => openModal('signIn')}>sign in</button>
                  </>
              ) 
            }
        </div>
        </>
    )
}

export default SessionButtons 