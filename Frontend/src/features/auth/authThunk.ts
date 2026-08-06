import { createAsyncThunk } from "@reduxjs/toolkit"
import { signupUser } from "./authApi"
import type { User } from "../../types/auth/authTypes"



const signupThunk = createAsyncThunk("api/signup",async (data:User)=>{
    const response = await signupUser(data)
    return response.data

})


export {signupThunk}