import axios from "axios";
import type { Product } from "../../types/product/productTypes";


const addProduct = async (data:Product) => {
    return axios.post("http://localhost:5000/auth/addProduct",data)
}



export {
    addProduct
}