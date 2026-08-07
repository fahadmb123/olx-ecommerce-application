import userModel from "../models/userSchema"
import type { UserType } from "../models/userSchema"
import type { loginUserType, User } from "../types/auth"
import bcrypt from "bcrypt"
import { generateToken } from "../utils/generateTokens"
import { Request } from "express"
import jwt from "jsonwebtoken"
const salt = 10


const signupService = async (data:User) => {
    const isExist:UserType | null = await userModel.findOne({email:data.email})

    if (isExist) {
        throw new Error ("The user already exist")
    }

    const hashPassword = await bcrypt.hash(data.password,salt)

    const newUser = new userModel ({
        name:data.name,
        email:data.email,
        password:hashPassword,
    })
    await newUser.save()
}


const loginService = async (data:loginUserType) => {
    const isExist = await userModel.findOne({email:data.email})

    if (!isExist) {
        throw new Error("User doesn't exist")
    }
    const isMatch = await bcrypt.compare(data.password,isExist.password as string)
    if (!isMatch) {
        throw new Error("Password not matching")
    }
    const token = generateToken(isExist.id.toString(),isExist.email)
    return {user:isExist,token}
}


const checkAuthService = async (req:Request) => {
    
    const token = req.cookies.token
    /*console.log("COOKIE:", req.cookies);
    console.log("TOKEN:", req.cookies?.token);*/
    if (!token) {
        
        throw new Error("Authentication required");
    }

    const decoded = jwt.verify(
        token,
        process.env.JWT_SECRET!
    ) as { userId: string };

    const user = await userModel.findById(decoded.userId)
        .select("-password");

    if (!user) {
        throw new Error("User not found");
    }

    return user;
}

export {
    signupService,
    loginService,
    checkAuthService
}