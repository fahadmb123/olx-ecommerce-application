import { Request ,Response,NextFunction} from "express"
import { loginService, signupService } from "../../services/authService"
import { success } from "zod"


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


const login = async (req:Request,res:Response,next:NextFunction) => {
    try {
        const result = await loginService(req.body)
        return res.status(200).json({
            success:true,
            message:"Login Successfully",
            data:result
        })
    } catch (err) {
        next(err)
    }
}

export {
    signup,
    login
}