import axios from "axios"


export const useAddProduct = ()=>{
    return async (data:FormData)=>{
        const response = await axios.post("http://localhost:5000/auth/addProduct",data)
        return response.data
    }
}