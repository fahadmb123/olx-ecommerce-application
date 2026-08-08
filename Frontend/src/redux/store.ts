import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/auth/authSlice"
import uiLoadingSlice from "../features/UI/uiLoadingSlice"


const store = configureStore({
    reducer : {
        auth:authReducer,
        globalLoading:uiLoadingSlice
    }
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store