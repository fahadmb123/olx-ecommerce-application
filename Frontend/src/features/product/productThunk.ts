import { createAsyncThunk } from "@reduxjs/toolkit"
import type { Product } from "../../types/product/productTypes"
import type { AxiosError } from "axios"
import type { ErrorResponse } from "../../types/auth/authTypes"
import { addProduct } from "./productApi"



export const addProductThunk = createAsyncThunk("/api/addProduct",async (data:Product,{rejectWithValue})=>{
    try {
        const response = await addProduct(data)
        return response.data
    } catch (error) {
        const err = error as AxiosError<ErrorResponse>
         return rejectWithValue(err.response?.data.message)
    }
})