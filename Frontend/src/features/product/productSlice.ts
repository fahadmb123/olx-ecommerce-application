import { createSlice } from "@reduxjs/toolkit"
import type { ProductSliceInitialType } from "../../types/product/productTypes"
import { addProductThunk } from "./productThunk"


const initialState:ProductSliceInitialType = {
    products:[],
    loading : false
}

const productSlice = createSlice({
    name : "product",
    initialState,
    reducers : {},
    extraReducers : (builder)=>{
        builder
            .addCase(addProductThunk.pending,(state)=>{
                state.loading = true
            })
            .addCase(addProductThunk.fulfilled,(state,action)=>{
                state.loading = false
                state.products = action.payload.products
            })
            .addCase(addProductThunk.rejected,(state)=>{
                state.loading = true
            })
    }
})


export default productSlice.reducer