import axios from "axios"
import type { loginUserType, User } from "../../types/auth/authTypes"
const API_URL = import.meta.env.VITE_API_URL;


export const signupUser = async (data:User)=>{
    return axios.post(`${API_URL}/auth/signup`,data)
}
export const loginUser = async (data:loginUserType)=>{
    return axios.post(`${API_URL}/auth/login`,data,{withCredentials: true})
}
export const checkAuth = async ()=>{
    return axios.get(`${API_URL}/auth/checkAuth`,{withCredentials: true})
}
export const logout = async ()=>{
    return axios.get(`${API_URL}/auth/logout`,{withCredentials: true})
}