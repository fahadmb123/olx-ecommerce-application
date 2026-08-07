import express from "express"
import { checkAuth, login, signup } from "../controllers/auth/controller"
import { loginSchema, signupSchema } from "../validation/authSchema"
import validate from "../middleware/validate"
const Router = express.Router()



Router.post("/signup",validate(signupSchema),signup)
Router.post("/login",validate(loginSchema),login)


Router.get("/checkAuth",checkAuth)


export default Router