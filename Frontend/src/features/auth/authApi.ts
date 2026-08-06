import axios from "axios"
import type { User } from "../../types/auth/authTypes"



const signupUser = async (data:User)=>{
    return axios.post("http://localhost:5000/auth/signup",data)
}



export {signupUser}