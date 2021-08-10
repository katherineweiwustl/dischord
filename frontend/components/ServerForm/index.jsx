import React, { useState } from "react"
import { StyledServerForm } from "./Style"
import { createServer } from "../utils/server_api_util"

const ServerForm = () => {
    const [serverName, setServerName] = useState('')
    const handleSubmit = (e) => {
        e.preventDefault() // stops page from reloading when submitted
        console.log('HASDFASDFASDF')
        createServer({
            name: serverName // strong params REQUIRES a key called name
        }).then(res => console.log(res)) // res = response; if it's successful, console log the response
    }
    return (
        <StyledServerForm onSubmit={handleSubmit}>
            <label>
                server name
                <input type="text" onChange={(e) => setServerName(e.target.value)}></input>
            </label>
            <button type="submit" >submit</button>
        </StyledServerForm>
    )
}
export default ServerForm