import { Request ,Response,NextFunction} from "express"
import { signupService } from "../../services/authService"


const signup = async (req:Request,res:Response,next:NextFunction)=>{
    try {
        await signupService(req.body)
        return res.status(201).json({
            success : true,
            message: "Acount Registered"
        })
    } catch (err){
        next(err)
    }
}



export {
    signup
}