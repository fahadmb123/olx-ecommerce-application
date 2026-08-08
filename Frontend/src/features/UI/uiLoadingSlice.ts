import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    globalLoading : false
}
const uiLoadingSlice = createSlice({
    name:"ui",
    initialState,
    reducers : {
        setGlobalLoading : (state,action)=>{
            state.globalLoading = action.payload
        }
    }
})

const setGlobalStateAction = uiLoadingSlice.actions.setGlobalLoading
export {setGlobalStateAction}
export default uiLoadingSlice.reducer