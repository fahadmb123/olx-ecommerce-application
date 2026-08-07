import { createSlice } from "@reduxjs/toolkit";
import type { authInitialState } from "../../types/auth/authTypes";
import {checkAuthThunk, loginThunk, logoutThunk, signupThunk} from "./authThunk"


const initialState:authInitialState = {
    user : null,
    isAuthenticated:false,
    loading : false,
    checkingAuth : true
}

const authSlice = createSlice({
    name : "auth",
    initialState,
    reducers : {},
    extraReducers : (builder) => {
        builder
            .addCase(signupThunk.pending,(state)=>{
                state.loading = true
            })
            .addCase(signupThunk.fulfilled,(state)=>{
                state.loading = false
            })
            .addCase(signupThunk.rejected,(state)=>{
                state.loading = false
            })
            .addCase(loginThunk.pending,(state)=>{
                state.loading = true
            })
            .addCase(loginThunk.fulfilled,(state,action)=>{
                state.loading = false
                state.user = action.payload.user
                state.isAuthenticated = true
            })
            .addCase(loginThunk.rejected,(state)=>{
                state.loading = false
            })
            .addCase(checkAuthThunk.pending,(state)=>{
                state.loading = true
                state.checkingAuth = true
            })
            .addCase(checkAuthThunk.fulfilled,(state,action)=>{
                state.loading = false
                state.user = action.payload.user
                state.isAuthenticated = true
                state.checkingAuth = false
            })
            .addCase(checkAuthThunk.rejected,(state)=>{
                state.loading = false
                state.checkingAuth = false
            })
            .addCase(logoutThunk.fulfilled,(state)=>{
                state.loading = false
                state.user = null
                state.isAuthenticated = false
            })
    }
})


export default authSlice.reducer