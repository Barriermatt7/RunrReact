import axios from "axios";

const API = {
    login:function(newUser){
        return axios.post("/login", newUser)
    },
    register:function(newUser){
        return axios.post("/api/user", newUser)
    }
}


export default API