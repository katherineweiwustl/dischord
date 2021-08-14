import React, { useState } from "react"
import { StyledForm } from "../Style"
import { signIn } from "../../../utils/session_api_util"
import sessionActionCreators from "../../../state/actions/session/index"
import { useSelector, useDispatch } from "react-redux"
import { bindActionCreators } from 'redux'

const SignInForm = () => {
    // setIsOpen is a prop; for object destructuring you have to name it the same thing as it originally was/is in SessionButtons
    const dispatch = useDispatch()
    const { login } = bindActionCreators({ ...sessionActionCreators}, dispatch)
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const currentUser = useSelector(store => store.session.currentUser)
    
    const handleSubmit = (e) => {
        e.preventDefault()
        login({
            username, // 'username': 'value of username' since username is used above; same with password
            password 
        })
        // signIn({
        //     username, // 'username': 'value of username' since username is used above; same with password
        //     password 
        // }).then(res => login(res.data))
    }
    return (
        <StyledForm onSubmit={ handleSubmit }>
            <label>
                username
                <input type="text" onChange={ (e) => setUsername(e.target.value) }></input>
            </label>
            <label>
                password
                <input type="password" onChange={ (e) => setPassword(e.target.value) }></input>
            </label>
            <button type="submit" onClick={handleSubmit}>submit</button>
        </StyledForm>
    )
}
export default SignInForm