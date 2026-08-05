import express,{Response,Request} from "express"
const Router = express.Router()



Router.get("/all",(req:Request,res:Response)=>{
    res.send("Backend maaaaaaaaaaaan")
})


export default Router