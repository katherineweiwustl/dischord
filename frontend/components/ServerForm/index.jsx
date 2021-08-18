import React, { useState } from "react"
import { StyledServerForm } from "./Style"
// import { createServer } from "../../utils/server_api_util"
import { useSelector, useDispatch } from "react-redux"
import { bindActionCreators } from "redux"
import serverActionCreators from "../../state/actions/servers"
const ServerForm = () => {
    const owner_id = useSelector(store => store.session.currentUser.id)
    const [serverName, setServerName] = useState('')
    const dispatch = useDispatch()
    const { createServer } = bindActionCreators(serverActionCreators, dispatch)
    const handleSubmit = (e) => {
        e.preventDefault() // stops page from reloading when submitted
        createServer({
            name: serverName,
            owner_id:  owner_id
        })// .then(res => console.log(res)) // res = response; if it's successful, console log the response
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