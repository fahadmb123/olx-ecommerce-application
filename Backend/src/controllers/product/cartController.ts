import { NextFunction, Request, Response } from "express"
import { addToCartService, getCartProductsService, getCheckoutCartProductsService, remCartService } from "../../services/cartService"


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


export const remCart = async (req:Request,res:Response,next:NextFunction) => {
    try {
        
        await remCartService(req)
        res.status(201).json({
            success:true,
            message:"Product Removed"
        })
    } catch (err) {
        next(err)
    }
}




export const getCheckoutCartProducts = async (req:Request,res:Response,next:NextFunction) => {
    try {
        
        const data = await getCheckoutCartProductsService(req)
        res.status(201).json({
            data
        })
    } catch (err) {
        next(err)
    }
}
