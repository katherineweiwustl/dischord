import React, { useState } from "react"
import { useSelector, useDispatch } from "react-redux"
import { bindActionCreators } from "redux"
import uiActionCreators from "../../state/actions/ui"
import Modal from "../Modal"
import SessionForm from "../SessionForm/SignUpForm/Index"
import { signOut } from "../utils/session_api_util"

const SessionButtons = () => {
    const dispatch = useDispatch()
    const { openModal } = bindActionCreators(uiActionCreators, dispatch)
    // How get if currentUser exists or not?
    // Use selector gets passed the store, and then we extract the part we want. In this case currentUser
    // which is stored under session
    const [currentUser, setCurrentUser] = useState(store => store.session.currentUser)
    const handleSubmit = () => {
      setCurrentUser(null),
      () => signOut()
    }
    // const handleClick = () => {
    //   () => signOut();
    //   () => setCurrentUser(null)
    // }
    return (
        <>
        <div>
            {
              currentUser ? (
                <form onSubmit={handleSubmit}>
                  <button type="submit">sign out</button> {/* onClick={ handleClick }>sign out</button> */ }
                </form>
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