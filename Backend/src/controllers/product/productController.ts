import { Request ,Response,NextFunction} from "express";
import { addProductService } from "../../services/productService";
import productModel from "../../models/productSchema";
import verifyToken from "../../utils/verifyToken";
export const addProduct = async (req:Request,res:Response,next:NextFunction) => {
    try {
        await addProductService(req)
        res.status(201).json({
            success : true,
            message : "Product added"
        })
    } catch (err) {
        next(err)
    }
}



export const getUserProducts = async (req:Request,res:Response,next:NextFunction) => {
    try {
        const page = Number(req.query.page)
        const limit = Number(req.query.limit)
        const token = req.cookies.token
        const decoded = verifyToken(token)
        const skip = (page - 1) * limit

        const products = await productModel
            .find({ userId: decoded.userId })
            .skip(skip)
            .limit(limit)
            .sort({ updatedAt: -1 })
        const notMore = products.length < limit
        return res.status(200).json({
            products,
            hasMore : notMore? false : true
        })
    } catch (err) {
        next(err)
    }
}

export const getProducts = async (req:Request,res:Response,next:NextFunction) => {
    try {
        const page = Number(req.query.page)
        const limit = Number(req.query.limit)
        const skip = (page - 1) * limit

        const products = await productModel
            .find({ solled: false })
            .skip(skip)
            .limit(limit)
            .sort({ updatedAt: -1 })
        const notMore = products.length < limit
        return res.status(200).json({
            products,
            hasMore : notMore? false : true
        })
    } catch (err) {
        next(err)
    }
}
