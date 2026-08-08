import { Request } from "express";
import productModel from "../models/productSchema";
import uploadImage from "./cloudinaryService";
import verifyToken from "../utils/verifyToken";

export const addProductService = async (req:Request) => {
    
    const { title, description, price, category } = req.body
    const image = req.file
    const token = req.cookies.token
    const decoded = verifyToken(token)
    const isDuplicate = await productModel.findOne({title})

    if (isDuplicate) {
        throw new Error("Product title already exist")
    }
    if (!image) {
        throw new Error ("Image requierd")
    }

    const imageUrl = await uploadImage(image)
    

    const newProduct = new productModel({
        title,
        description,
        price,
        category,
        image:imageUrl,
        userId:decoded.userId
    })
    
    await newProduct.save()
    return
}


