import { Request,Response,NextFunction } from "express";
import verifyToken from "../utils/verifyToken";


const authenticate = (req:Request, res:Response, next:NextFunction) => {
    try {
        
        const token = req.cookies.token;
        
        if (!token) {
            
            return res.status(401).json({
                success: false,
                message: "Authentication required"
            });
        }

        const decoded =  verifyToken(token)
        
        next();

    } catch (error) {
        return res.status(401).json({
            success: false,
            message: "Invalid or expired token"
        });
    }
};


export default authenticate
