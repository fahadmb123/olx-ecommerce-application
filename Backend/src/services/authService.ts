import userModel from "../models/userSchema"
import type { UserType } from "../models/userSchema"
import type { User } from "../types/auth"
import bcrypt from "bcrypt"
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



export {
    signupService
}