import { Request } from "express"
import verifyToken from "../utils/verifyToken"
import cartModel from "../models/cartSchema";
import productModel from "../models/productSchema";



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




export const getCartProductsService = async (req:Request) => {
    const token = req.cookies.token
    const decoded = verifyToken(token)
    const cart = await cartModel.findOne({userId:decoded.userId}).populate("items.productId")
    return cart?.items
}