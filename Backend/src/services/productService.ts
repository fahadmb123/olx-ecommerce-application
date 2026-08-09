import { Request } from "express";
import productModel from "../models/productSchema";
import uploadImage from "./cloudinaryService";
import verifyToken from "../utils/verifyToken";
import cartModel from "../models/cartSchema";



export const addProductService = async (req:Request) => {
    
    const { title, description, price, category ,quantity} = req.body
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
        userId:decoded.userId,
        quantity
    })
    
    await newProduct.save()
    return
}





export const editProductService = async (req:Request) => {
    const {id} = req.params
    const { title, description, price, category,quantity } = req.body
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
    let imageUrl;
    if (image){
        imageUrl = await uploadImage(image)
    }

    const same =
        oldProduct.title === title &&
        oldProduct.description === description &&
        oldProduct.price === price &&
        oldProduct.category === category &&
        oldProduct.quantity === quantity

    await productModel.updateOne({_id:id},{
        title,
        description,
        price,
        category,
        image:imageUrl,
        quantity,
        userId:decoded.userId
    })
   
 
    return !image && same? "Nothing Changed" : "Updated"
}


export const deleteProductService = async (req:Request) => {
    const {id} = req.params

    const isExist = await productModel.findById(id)

    if (!isExist) {
        throw new Error("Product doesn't exist")
    }

   await productModel.deleteOne({_id:id})
 
    return
}



export const addToCartService = async (req:Request) => {
    const {id} = req.params
    const token = req.cookies.token
    const decoded = verifyToken(token)


    const isExist = await productModel.findById(id)

    if (!isExist) {
        throw new Error("Product doesn't exist")
    }
    if (isExist.quantity <= 0) {
        throw new Error("Inefficient Quantity")
    }
    const cart = await cartModel.findOne({userId:decoded.userId,"items.productId":id as string})

    if (cart) {
        if (cart?.items[0]?.count as number > 6) {
            throw new Error ("Max limit reached")
        } 
        
        await cartModel.updateOne( { userId:decoded.userId,"items.productId": id as string},{$inc: {"items.$.count": 1}})
    }else {
        await cartModel.updateOne(
            { userId:decoded.userId },
            {
                $push: {
                    items: {
                        productId:id as string,
                        count: 1
                    }
                }
            }
        )
    }
    await productModel.updateOne({_id:id},{$inc:{quantity:-1}})
    
 
    return
}