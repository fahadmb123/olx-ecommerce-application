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





export const editProductService = async (req:Request) => {
    const {id} = req.params
    const { title, description, price, category } = req.body
    const image = req.file
    const token = req.cookies.token
    const decoded = verifyToken(token)
    const oldProduct = await productModel.findOne({_id:id})
    const idDuplicate = await productModel.findOne({title,_id:{$ne:id}})

    if (!oldProduct) {
        throw new Error("Product doesn't exist")
    }
    
    if (idDuplicate) {
        throw new Error("Product title already exist")
    }

    if (!image) {
        throw new Error ("Image requierd")
    }

    const imageUrl = await uploadImage(image)

    await productModel.updateOne({_id:id},{
        title,
        description,
        price,
        category,
        image:imageUrl,
        userId:decoded.userId
    })
    return
}