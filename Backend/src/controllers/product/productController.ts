import { Request ,Response,NextFunction} from "express";




export const addProduct = async (req:Request,res:Response,next:NextFunction) => {
    try {
        console.log("Hello")
    } catch (err) {
        next(err)
    }
}


