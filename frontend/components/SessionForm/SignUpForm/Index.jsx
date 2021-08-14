import React, { useState } from "react"

import { useSelector, useDispatch } from 'react-redux'
import { bindActionCreators } from "redux"

import { closeModal } from "../../../state/actions/ui"
import sessionActionCreators from "../../../state/actions/session"

import { StyledForm } from "../Style"


const SignUpForm = () => {
    // setIsOpen is a prop; for object destructuring you have to name it the same thing as it originally was/is in SessionButtons
    const dispatch = useDispatch()
    const { logup } = bindActionCreators(sessionActionCreators, dispatch)

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const currentUser = useSelector(store => store.session.currentUser)

    const handleSubmit = (e) => {
        e.preventDefault()
        logup({
            username, // 'username': 'value of username' since username is used above; same with password
            password 
        })
    }
    return (
        <StyledForm onSubmit={handleSubmit}>
            <label>
                username
                <input type="text" onChange={ (e) => setUsername(e.target.value) }></input>
            </label>
            <label>
                password
                <input type="password" onChange={ (e) => setPassword(e.target.value) }></input>
            </label>
            <button type="submit" >submit</button>
        </StyledForm>
    )
}
export default SignUpForm