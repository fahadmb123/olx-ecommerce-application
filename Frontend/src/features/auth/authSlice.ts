import { createSlice } from "@reduxjs/toolkit";
import type { authInitialState } from "../../types/auth/authTypes";
import {signupThunk} from "./authThunk"


const initialState:authInitialState = {
    user : null,
    isAuthenticated:false,
    error : null,
    loading : false
}
const authSlice = createSlice({
    name : "auth",
    initialState,
    reducers : {},
    extraReducers : (builder) => {
        builder
            .addCase(signupThunk.pending,(state:authInitialState)=>{
                state.loading = true
            })
            .addCase(signupThunk.fulfilled,(state:authInitialState,action:ReturnType<typeof signupThunk.fulfilled>)=>{
                state.loading = false
                state.user = action.payload
            })
            .addCase(signupThunk.rejected,(state:authInitialState,action:ReturnType<typeof signupThunk.rejected>)=>{
                state.loading = false
                state.error = (action.payload as string) || "Signup Failed";
            })
    }
})


export default authSlice.reducer