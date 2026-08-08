import express from "express"
import { checkAuth, login, logout, signup } from "../controllers/auth/controller"
import { loginSchema, signupSchema } from "../validation/authSchema"
import validate from "../middleware/validate"
const Router = express.Router()



Router.post("/signup",validate(signupSchema),signup)
Router.post("/login",validate(loginSchema),login)
//Router.post("/addProduct",)



Router.get("/checkAuth",checkAuth)
Router.get("/logout",logout)



export default Router