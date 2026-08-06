import axios from "axios"
import type { User } from "../../types/auth/authTypes"



const signupUser = async (data:User)=>{
    return axios.post("api/auth/signup",data)
}



export {signupUser}