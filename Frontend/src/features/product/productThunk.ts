import { createAsyncThunk } from "@reduxjs/toolkit"
import type { AxiosError } from "axios"
import type { ErrorResponse } from "../../types/auth/authTypes"
import { addProduct } from "./productApi"




export const addProductThunk = createAsyncThunk("/api/addProduct",async (data:FormData,{rejectWithValue})=>{
    try {
        console.log("DATA SENT:");

        for (const [key, value] of data.entries()) {
            console.log(key, value);
        }
        const response = await addProduct(data)
        return response.data
    } catch (error) {
        const err = error as AxiosError<ErrorResponse>
        console.log(err.response)
         return rejectWithValue(err.response?.data.message)
    }
})