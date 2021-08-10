import axios from "axios";

export const signUp = (userData) => {
    return axios.post("/users", { user: userData }) // has to be under top level key of user; check users_controller and its strong params
}