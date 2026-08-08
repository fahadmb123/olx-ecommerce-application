import express from "express"
import { checkAuth, login, logout, signup } from "../controllers/auth/controller"
import { loginSchema, signupSchema } from "../validation/authSchema"
import validate from "../middleware/validate"
import {addProduct, getProducts, getUserProducts} from "../controllers/product/productController"
import { productSchema } from "../validation/productSchema"
import upload from "../middleware/upload"
import authenticate from "../middleware/authenticate"
const Router = express.Router()



Router.post("/signup",validate(signupSchema),signup)
Router.post("/login",validate(loginSchema),login)
Router.post("/addProduct",authenticate,upload.single("image"),validate(productSchema),addProduct)



Router.get("/checkAuth",checkAuth)
Router.get("/logout",logout)
Router.get("/getUserProducts",authenticate,getUserProducts)
Router.get("/getProducts",authenticate,getProducts)



export default Router