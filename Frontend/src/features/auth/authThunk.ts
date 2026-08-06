import { createAsyncThunk } from "@reduxjs/toolkit"
import { signupUser } from "./authApi"
import type { User } from "../../types/auth/authTypes"



const signup = createAsyncThunk("api/signup",async (data:User)=>{
    const response = await signupUser(data)
    return response.data

})


export {signup}