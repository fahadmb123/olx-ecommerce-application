import { Request } from "express";
import productModel from "../models/productSchema";


export const addProductService = async (req:Request) => {
    const { title, description, price, category } = req.body
    const image = req.file
    if (!image) {
        throw new Error ("Image requierd")
    }

    
    const newProduct = new productModel({
        title,
        description,
        price,
        category
    })


}