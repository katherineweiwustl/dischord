import React, {useState, useEffect} from "react"
import { Container, StyledButton } from "./Style"
import ServerForm from "../ServerForm"
import { useSelector, useDispatch } from "react-redux"
import { bindActionCreators } from "redux"
import { map } from "jquery"

import uiActionCreators from "../../state/actions/ui"
import { ServerStyleSheet } from "styled-components"
import serverActionCreators from "../../state/actions/servers"
import ServerExplorePage from "../ServerExplorePage"
import ServerItem from "./ServerItem"
import { render } from "react-dom"

const Sidebar = (props) => {
    const dispatch = useDispatch()
    const { openModal } = bindActionCreators(uiActionCreators, dispatch)
    const { getServers } = bindActionCreators(serverActionCreators, dispatch)
    /* const servers = useSelector(store => servers.)
    Object.values(servers) => {} => []
    */
    const serverList = useSelector(store => store.servers.serverList)
    handleClick = () => {
      return(
        <ServerExplorePage/>
      )
    }
    return(
        <>
            <Container>
                <ul>
                  { serverList.map((servers) => {
                    return(
                      <li>{servers}</li>
                      /* <ServerItem serverName = { servers }/> // would be <li> inside of the serveritem component */
                    )
                  })}
                </ul>
                <StyledButton onClick={() => openModal('createServer')}>
                    +
                </StyledButton>
                <StyledButton onClick={() => handleClick()}>
                    <img src="https://cdn4.iconfinder.com/data/icons/48-bubbles/48/47.Explore-512.png"/>
                </StyledButton>
            </Container>
        </>
    )
}
export default Sidebar 