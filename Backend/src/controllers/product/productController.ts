import { Request ,Response,NextFunction} from "express";
import { addProductService, deleteProductService, editProductService } from "../../services/productService";
import productModel from "../../models/productSchema";
import verifyToken from "../../utils/verifyToken";



export const addToCart = async (req:Request,res:Response,next:NextFunction) => {
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


export const editProduct = async (req:Request,res:Response,next:NextFunction) => {
    try {
        const message = await editProductService(req)
        
        res.status(201).json({
            success : true,
            message
        })
    } catch (err) {
        next(err)
    }
}


export const deleteProduct = async (req:Request,res:Response,next:NextFunction) => {
    try {
       await deleteProductService(req)
        
        res.status(201).json({
            success : true,
            message : "Product Deleted"
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
        const filter = req.query.filter?.toString() || "allCategories"
        const page = Number(req.query.page)
        const limit = Number(req.query.limit)
        const skip = (page - 1) * limit
        let query;

        if (filter === "allCategories"){
            query = {solled:false}
        }else{
            query = {
                solled:false,
                category:filter
            }
        }

        
        const products = await productModel
            .find(query)
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



export const getProduct = async (req:Request,res:Response,next:NextFunction) => {
    try {
        const {id} = req.params
        const token = req.cookies.token
        const decoded = verifyToken(token)
    
        const product = await productModel.findOne({ userId: decoded.userId ,_id:id})
        
        return res.status(200).json({
            product
        })
    } catch (err) {
        next(err)
    }
}