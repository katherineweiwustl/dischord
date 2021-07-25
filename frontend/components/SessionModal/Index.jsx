import React, { useState } from "react"
import { InnerContainer, OuterContainer, SignUpForm } from "./Style"
import { signUp } from "../utils/session_api_util"


const SessionModal = ({ setIsOpen }) => {
    // setIsOpen is a prop; for object destructuring you have to name it the same thing as it originally was/is in SessionButtons
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const handleSubmit = (e) => {
        e.preventDefault()
        signUp({
            username, // 'username': 'value of username' since username is used above; same with password
            password 
        })
    }
    
    return (
        <OuterContainer onClick={ () => setIsOpen(false) }>
            { /* first parameter for event arrow functions will always be the event object which has a bunch of parameters that can be accessed */ }
            <InnerContainer onClick={ (e) => e.stopPropagation() }>
                <SignUpForm onSubmit={handleSubmit}>
                    <label>
                        username
                        <input type="text" onChange={ (e) => setUsername(e.target.value) }></input>
                    </label>
                    <label>
                        password
                        <input type="password" onChange={ (e) => setPassword(e.target.value) }></input>
                    </label>
                    <button type="submit" >submit</button>
                </SignUpForm>
            </InnerContainer>
        </OuterContainer>
    )
}
export default SessionModal