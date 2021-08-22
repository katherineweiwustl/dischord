import React, { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
// bind action creators and give it the dispatch variable
import { bindActionCreators } from "redux"

import Header from "./components/Header/Index"
import Modal from "./components/Modal"
import Sidebar from "./components/Sidebar"

import uiActionCreators from "./state/actions/ui"
import { getServers as apiGetServers } from "./utils/server_api_util"
import serverActionCreators from "./state/actions/servers"

const ServerExplorePage = (props) => {
    useEffect(() => {
        getServers(false) // getAllServers = false
      }, [])
    const serverList = useSelector(store => store.servers.serverList)
    return(
        <>
            { serverList.map((servers) => {
                return(
                    <>
                        <ServerExplorePageItem/>
                    </>
                )
            } )}
        </>
    )
}
export default ServerExplorePage 