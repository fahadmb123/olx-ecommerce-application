import userModel from "../models/userSchema"
import type { UserType } from "../models/userSchema"
import type { loginUserType, User } from "../types/auth"
import bcrypt from "bcrypt"
import { generateToken } from "../utils/generateTokens"
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
    return isExist
}


export {
    signupService,
    loginService
}