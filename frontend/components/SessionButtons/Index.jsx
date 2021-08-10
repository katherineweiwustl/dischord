import React from "react"
import { useSelector, useDispatch } from "react-redux"
import { bindActionCreators } from "redux"
import uiActionCreators from "../../state/actions/ui"
import Modal from "../Modal"
import SessionForm from "../SessionForm/Index"

const SessionButtons = () => {
    const dispatch = useDispatch()
    const { openModal } = bindActionCreators(uiActionCreators, dispatch)

    return (
        <>
        <div>
            <button onClick={() => openModal('signUp')}>sign up</button>
            <button>sign in</button>
            <button>sign out</button>
        </div>
        </>
    )
}

export default SessionButtons 