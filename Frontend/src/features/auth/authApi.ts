import axios from "axios"
import type { loginUserType, User } from "../../types/auth/authTypes"



export const signupUser = async (data:User)=>{
    return axios.post("http://localhost:5000/auth/signup",data)
}
export const loginUser = async (data:loginUserType)=>{
    return axios.post("http://localhost:5000/auth/login",data,{withCredentials: true})
}
export const checkAuth = async ()=>{
    return axios.get("http://localhost:5000/auth/checkAuth",{withCredentials: true})
}
export const logout = async ()=>{
    return axios.get("http://localhost:5000/auth/logout",{withCredentials: true})
}