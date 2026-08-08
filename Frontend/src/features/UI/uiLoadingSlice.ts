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

const setGlobalLoadingStateAction = uiLoadingSlice.actions.setGlobalLoading
export {setGlobalLoadingStateAction}
export default uiLoadingSlice.reducer