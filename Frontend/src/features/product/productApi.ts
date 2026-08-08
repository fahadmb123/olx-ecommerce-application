import axios from "axios";



const addProduct = async (data:FormData) => {
    return axios.post("http://localhost:5000/auth/addProduct",data,{withCredentials: true})
}



export {
    addProduct
}