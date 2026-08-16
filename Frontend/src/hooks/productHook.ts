import axios from "axios"
import { useCallback } from "react"
const API_URL = import.meta.env.VITE_API_URL;

export const useAddProduct = ()=>{
    return async (data:FormData)=>{
        const response = await axios.post(`${API_URL}/auth/addProduct`,data,{withCredentials: true})
        return response.data
    }
}
export const useEditProduct = ()=>{
    return async (data:FormData,id:string)=>{
        const response = await axios.post(`${API_URL}/auth/editProduct/${id}`,data,{withCredentials: true})
        return response.data
    }
}
export const useDeleteProduct = ()=>{
    return async (id:string)=>{
        const response = await axios.get(`${API_URL}/auth/deleteProduct/${id}`,{withCredentials: true})
        return response.data
    }
}




export const useGetAllUserProducts = ()=>{
    return useCallback(async (page:number,limit:number)=>{
        const response = await axios.get(`${API_URL}/auth/getUserProducts?limit=${limit}&page=${page}`,{withCredentials:true})
        return response.data
    },[])
}



export const useGetProducts = ()=>{
    return useCallback(async (page:number,limit:number,filter:string)=>{
        const response = await axios.get(`${API_URL}/auth/getProducts?limit=${limit}&page=${page}&filter=${filter}`)
        return response.data
    },[])
}

export const useGetProduct = ()=>{
    return useCallback(async (id:string)=>{
        const response = await axios.get(`${API_URL}/auth/getProduct/${id}`,{withCredentials: true})
        return response.data
    },[])
}

export const useGetProductDetails = ()=>{
    return useCallback(async (id:string)=>{
        const response = await axios.get(`${API_URL}/auth/getProductDetails/${id}`)
        return response.data
    },[])
}



export const useAddToCart = ()=>{
    return useCallback(async (id:string)=>{
        const response = await axios.get(`${API_URL}/auth/addToCart/${id}`,{withCredentials:true})
        return response.data
    },[])
}



export const useGetCartProducts = ()=>{
    return useCallback(async ()=>{
        const response = await axios.get(`${API_URL}/auth/getCartProducts`,{withCredentials:true})
        return response.data
    },[])
}



export const useRemCart = ()=>{
    return useCallback(async (id:string)=>{
        const response = await axios.delete(`${API_URL}/auth/remCart/${id}`,{withCredentials:true})
        return response.data
    },[])
}




export const useGetCheckoutCartProducts = ()=>{
    return useCallback(async ()=>{
        const response = await axios.get(`${API_URL}/auth/getCheckoutCartProducts`,{withCredentials:true})
        return response.data
    },[])
}


export const usePlaceCartProducts = ()=>{
    return useCallback(async ()=>{
        const response = await axios.get(`${API_URL}/auth/placeCartProducts`,{withCredentials:true})
        return response.data
    },[])
}


