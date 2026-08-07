import axios from "axios"
import type { loginUserType, User } from "../../types/auth/authTypes"



const signupUser = async (data:User)=>{
    return axios.post("http://localhost:5000/auth/signup",data)
}
const loginUser = async (data:loginUserType)=>{
    return axios.post("http://localhost:5000/auth/login",data)
}
const checkAuth = async ()=>{
    return axios.get("http://localhost:5000/auth/checkAuth")
}


export {
    signupUser,
    loginUser,
    checkAuth
}