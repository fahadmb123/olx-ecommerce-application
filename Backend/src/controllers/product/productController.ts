import { Request ,Response,NextFunction} from "express";
import { addProductService } from "../../services/productService";


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


