import { createAsyncThunk } from "@reduxjs/toolkit"
import { checkAuth, loginUser, signupUser } from "./authApi"
import type { User,ErrorResponse, loginUserType } from "../../types/auth/authTypes"
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


const loginThunk = createAsyncThunk("api/login",async (data:loginUserType,{rejectWithValue})=>{
    try {
        const response = await loginUser(data)
        return response.data
    } catch (error) {
        const err = error as AxiosError<ErrorResponse>
        return rejectWithValue(err.response?.data.message)
    }
})

const checkAuthThunk = createAsyncThunk("api/checkAuth",async (_,{rejectWithValue})=>{
    try {
        const response = await checkAuth()
        return response.data
    } catch (error) {
        const err = error as AxiosError<ErrorResponse>
        console.log(err.response?.data.message)
        return rejectWithValue(err.response?.data.message)
    }
})

export {
    signupThunk,
    loginThunk,
    checkAuthThunk
}