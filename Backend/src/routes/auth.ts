import express from "express"
import { signup } from "../controllers/auth/controller"
const Router = express.Router()



Router.post("/signup",signup)


export default Router