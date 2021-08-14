import axios from "axios";

export const signUp = (userData) => {
    return axios.post("/users", { user: userData }) // has to be under top level key of user; check users_controller and its strong params
}

export const signIn = (userData) => {
    console.log({user: userData})
    return axios.post("/session", { user: userData })
}

export const signOut = () => {
    return axios.delete("/session")
}


// {
//     user: {
//         username: ...,
//         password: ...,
//     }
// }

/*
    this is all accessed thru the params which have the same name (user[username], user[password])
*/ 