import { createSlice } from "@reduxjs/toolkit";
import type { authInitialState } from "../../types/auth/authTypes";
import {loginThunk, signupThunk} from "./authThunk"


const initialState:authInitialState = {
    user : null,
    isAuthenticated:false,
    loading : false,
    token:null
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
                state.user = action.payload.data.user
                state.token = action.payload.data.token
                state.isAuthenticated = true
            })
            .addCase(loginThunk.rejected,(state)=>{
                state.loading = false
            })
    }
})


export default authSlice.reducer