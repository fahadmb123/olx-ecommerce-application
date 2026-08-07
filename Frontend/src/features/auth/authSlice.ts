import { createSlice } from "@reduxjs/toolkit";
import type { authInitialState } from "../../types/auth/authTypes";
import {checkAuthThunk, loginThunk, signupThunk} from "./authThunk"


const initialState:authInitialState = {
    user : null,
    isAuthenticated:false,
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
            .addCase(signupThunk.fulfilled,(state:authInitialState)=>{
                state.loading = false
            })
            .addCase(signupThunk.rejected,(state:authInitialState)=>{
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
            })
    }
})


export default authSlice.reducer