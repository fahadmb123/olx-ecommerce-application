import { createAsyncThunk } from "@reduxjs/toolkit"
import { signupUser } from "./authApi"
import type { User,ErrorResponse } from "../../types/auth/authTypes"
import { AxiosError } from "axios"


const signupThunk = createAsyncThunk("api/signup",async (data:User,{rejectWithValue})=>{

    try {
        const response = await signupUser(data)
        return response.data
    } catch (error) {
        const err = error as AxiosError<ErrorResponse>
        return rejectWithValue(err.response?.data.message)
    }
    

})


export {signupThunk}