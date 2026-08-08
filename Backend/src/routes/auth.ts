import express from "express"
import { checkAuth, login, logout, signup } from "../controllers/auth/controller"
import { loginSchema, signupSchema } from "../validation/authSchema"
import validate from "../middleware/validate"
import {addProduct} from "../controllers/product/productController"
import { productSchema } from "../validation/productSchema"
import upload from "../middleware/upload"
const Router = express.Router()



Router.post("/signup",validate(signupSchema),signup)
Router.post("/login",validate(loginSchema),login)
Router.post("/addProduct",upload.single("image"),validate(productSchema),addProduct)



Router.get("/checkAuth",checkAuth)
Router.get("/logout",logout)



export default Router