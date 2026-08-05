import { Request } from "express"

const signup = async (req:Request)=>{
    console.log(req.body)
}



export {
    signup
}