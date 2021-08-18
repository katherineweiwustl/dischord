import axios from "axios";

export const createServer = (serverData) => {
    return axios.post("/servers", { server: serverData }) // has to be under top level key of server; check users_controller and its strong params
}

export const getServers = (user_id) => {
    return axios.get("/servers", { user_id })
}


// axios is a library that allows us to send http requests
// this sends a post request to the backend which will hit our servers CONTROLLER,
    // the data is { server: serverData } which is obtained in the form
    // and sending that to the URL
// because the http request is POST, it will hit the create action in the servers controller
// backend has controller that handles the actual posting to the database