import { NextFunction, Request, Response } from "express"
import { addToCartService, getCartProductsService } from "../../services/cartService"


export const addToCart = async (req:Request,res:Response,next:NextFunction) => {
    try {
        
        await addToCartService(req)
        res.status(201).json({
            success : true,
            message : "Cart Updated"
        })
    } catch (err) {
        next(err)
    }
}



export const getCartProducts = async (req:Request,res:Response,next:NextFunction) => {
    try {
        
        const data = await getCartProductsService(req)
        res.status(201).json({
            data
        })
    } catch (err) {
        next(err)
    }
}
