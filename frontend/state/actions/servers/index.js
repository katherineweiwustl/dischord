// action creator is just a function that dispatches an action
import { closeModal } from '../ui/index'
import { CREATE_SERVER } from "../../reducers/server_reducer"
import * as ServerApiUtil from '../../../utils/server_api_util'


const createServerActionCreator = (serverData) => {
    return {
        type: CREATE_SERVER,
        payload: serverData
    }
}

export const createServer = (serverData) => { // Here userData will be username/password
    return (dispatch) => {
        return ServerApiUtil.createServer(serverData)
            .then((res) => dispatch(createServerActionCreator(res.data)))
            .then(() => dispatch(closeModal()))
    }
}

export default {
    createServer
}

// create a central index.js file

// bind provides the dispatch function to the action creators (it's a shortcut!)