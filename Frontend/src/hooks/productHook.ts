import axios from "axios"


export const useAddProduct = ()=>{
    return async (data:FormData)=>{
        const response = await axios.post("http://localhost:5000/auth/addProduct",data,{withCredentials: true})
        return response.data
    }
}


export const useGetAllUserProducts = ()=>{
    return async (limit:number,page:number)=>{
        const response = await axios.get(`http://localhost:5000/auth/getAllProducts?limit=${limit}&page=${page}`,{withCredentials:true})
        return response.data
    }
}