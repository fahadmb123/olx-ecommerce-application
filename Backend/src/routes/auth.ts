import express from "express"
import { signup } from "../controllers/auth/controller"
import { signupSchema } from "../validation/authSchema"
import validate from "../middleware/validate"
const Router = express.Router()



Router.post("/signup",validate(signupSchema),signup)
//Router.post("/login",validate())




export default Router