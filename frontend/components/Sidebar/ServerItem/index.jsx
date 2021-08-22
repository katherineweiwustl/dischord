import React, {useState} from "react"
import { useSelector, useDispatch } from "react-redux"
import { bindActionCreators } from "redux"

import uiActionCreators from "../../../state/actions/ui"
import { ServerStyleSheet } from "styled-components"
import serverActionCreators from "../../../state/actions/servers"

const ServerItem = (props) => {
    const dispatch = useDispatch()
    const { openModal } = bindActionCreators(uiActionCreators, dispatch)
    const { getServers } = bindActionCreators(serverActionCreators, dispatch)
    /* const servers = useSelector(store => servers.)
    Object.values(servers) => {} => []
    */
    // getServers(false)
    return (
        <>
            <li>
                <p>{ props.serverName }</p>
            </li>
        </>
    )
}
export default ServerItem 