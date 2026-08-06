import { createSlice } from "@reduxjs/toolkit";
import type { authInitialState } from "../../types/auth/authTypes";
import {signup} from "./authThunk"


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
            .addCase(signup.pending,(state:authInitialState)=>{
                state.loading = true
            })
            .addCase(signup.fulfilled,(state:authInitialState,action:ReturnType<typeof signup.fulfilled>)=>{
                state.loading = false
                state.user = action.payload
            })
            .addCase(signup.rejected,(state:authInitialState,action:ReturnType<typeof signup.rejected>)=>{
                state.loading = false
                state.error = (action.payload as string) || "Signup Failed";
            })
    }
})


export default authSlice.reducer