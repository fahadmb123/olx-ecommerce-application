import { Request ,Response,NextFunction} from "express"
import { checkAuthService, loginService, signupService } from "../../services/authService"
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
        const {user,token} = await loginService(req.body)
        console.log(token)
        res.cookie("token", token, {
            httpOnly: true,
            secure: false,
            sameSite: "lax",
            maxAge: 24 * 60 * 60 * 1000
        })

        return res.status(200).json({
            success:true,
            message:"Login Successfully",
            user
        })
    } catch (err) {
        next(err)
    }
}


const checkAuth = async (req:Request,res:Response,next:NextFunction) => {
    try {
        const result = await checkAuthService(req)

        return res.status(200).json({
            success:true,
            message:"Authentication Success",
            user:result
        })
    } catch (err) {
        next(err)
    }
}

const logout = async (req:Request,res:Response,next:NextFunction) => {
    try {
        res.clearCookie("token")
        
        return res.status(200).json({
            success:true,
            message:"Logged Out"
        })
    } catch (err) {
        next(err)
    }
}



export {
    signup,
    login,
    checkAuth,
    logout
}