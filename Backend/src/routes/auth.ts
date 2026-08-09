import express from "express"
import { checkAuth, login, logout, signup } from "../controllers/auth/controller"
import { loginSchema, signupSchema } from "../validation/authSchema"
import validate from "../middleware/validate"
import {addProduct, deleteProduct, editProduct, getProduct, getProducts, getUserProducts} from "../controllers/product/productController"
import { productSchema } from "../validation/productSchema"
import upload from "../middleware/upload"
import authenticate from "../middleware/authenticate"
import { addToCart, getCartProducts, incCart } from "../controllers/product/cartController"
const Router = express.Router()



Router.post("/signup",validate(signupSchema),signup)
Router.post("/login",validate(loginSchema),login)
Router.post("/addProduct",authenticate,upload.single("image"),validate(productSchema),addProduct)
Router.post("/editProduct/:id",authenticate,upload.single("image"),validate(productSchema),editProduct)


Router.get("/checkAuth",checkAuth)
Router.get("/logout",logout)
Router.get("/getUserProducts",authenticate,getUserProducts)
Router.get("/getProducts",authenticate,getProducts)
Router.get("/getProduct/:id",authenticate,getProduct)
Router.get("/deleteProduct/:id",authenticate,deleteProduct)
Router.get("/addToCart/:id",authenticate,addToCart)
Router.get("/getCartProducts",authenticate,getCartProducts)

Router.patch("/incCart/:id",authenticate,incCart)


export default Router