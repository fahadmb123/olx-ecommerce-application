import axios from "axios"
import { useCallback } from "react"


export const useAddProduct = ()=>{
    return async (data:FormData)=>{
        const response = await axios.post("http://localhost:5000/auth/addProduct",data,{withCredentials: true})
        return response.data
    }
}
export const useEditProduct = ()=>{
    return async (data:FormData,id:string)=>{
        const response = await axios.post(`http://localhost:5000/auth/editProduct/${id}`,data,{withCredentials: true})
        return response.data
    }
}
export const useDeleteProduct = ()=>{
    return async (id:string)=>{
        const response = await axios.get(`http://localhost:5000/auth/deleteProduct/${id}`,{withCredentials: true})
        return response.data
    }
}


export const useGetAllUserProducts = ()=>{
    return useCallback(async (page:number,limit:number)=>{
        const response = await axios.get(`http://localhost:5000/auth/getUserProducts?limit=${limit}&page=${page}`,{withCredentials:true})
        return response.data
    },[])
}



export const useGetProducts = ()=>{
    return useCallback(async (page:number,limit:number,filter:string)=>{
        const response = await axios.get(`http://localhost:5000/auth/getProducts?limit=${limit}&page=${page}&filter=${filter}`,{withCredentials:true})
        return response.data
    },[])
}

export const useGetProduct = ()=>{
    return useCallback(async (id:string)=>{
        const response = await axios.get(`http://localhost:5000/auth/getProduct/${id}`,{withCredentials: true})
        return response.data
    },[])
}



export const useAddToCart = ()=>{
    return useCallback(async (id:string)=>{
        const response = await axios.get(`http://localhost:5000/auth/addToCart/${id}`,{withCredentials:true})
        return response.data
    },[])
}



export const useGetCartProducts = ()=>{
    return useCallback(async ()=>{
        const response = await axios.get(`http://localhost:5000/auth/getCartProducts`,{withCredentials:true})
        return response.data
    },[])
}



export const useRemCart = ()=>{
    return useCallback(async (id:string)=>{
        const response = await axios.delete(`http://localhost:5000/auth/remCart/${id}`,{withCredentials:true})
        return response.data
    },[])
}




export const useGetCheckoutCartProducts = ()=>{
    return useCallback(async ()=>{
        const response = await axios.get(`http://localhost:5000/auth/getCheckoutCartProducts`,{withCredentials:true})
        return response.data
    },[])
}


export const usePlaceCartProducts = ()=>{
    return useCallback(async ()=>{
        const response = await axios.get(`http://localhost:5000/auth/placeCartProducts`,{withCredentials:true})
        return response.data
    },[])
}
