import React, { useState } from "react"
import { SignUpForm } from "../Style"
import { signIn } from "../../utils/session_api_util"
import sessionActionCreators from "../../../state/actions/session/index"
import { useSelector } from "react-redux"

const SignInForm = () => {
    // setIsOpen is a prop; for object destructuring you have to name it the same thing as it originally was/is in SessionButtons
    // const { loginUsername, loginPassword } = bindActionCreators(sessionActionCreators, dispatch)
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const currentUser = useSelector(store => store.session.currentUser)
    const handleSubmit = (e) => {
        e.preventDefault()
        signIn({
            username, // 'username': 'value of username' since username is used above; same with password
            password 
        }).then(res => console.log(res))
        setUsername(useSelector(store => store.session.currentUser.username))
        setPassword(useSelector(store => store.session.currentUser.password))
    }
    return (
        <SignInForm onSubmit={ handleSubmit }>
            <label>
                username
                <input type="text" onChange={ (e) => setUsername(e.target.value) }></input>
            </label>
            <label>
                password
                <input type="password" onChange={ (e) => setPassword(e.target.value) }></input>
            </label>
            <button type="submit" onClick={ handleSubmit }>submit</button>
        </SignInForm>
    )
}
export default SignInForm