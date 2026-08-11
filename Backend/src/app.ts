import express,{Request,Response} from "express";
import authRouter from "./routes/auth"
import cors from "cors"
import errorMiddleware from "./middleware/errorMiddleware";
import cookieParser from "cookie-parser";


const app = express()



const dns = require("dns")
console.log(dns.getServers());
dns.setServers(["8.8.8.8", "8.8.4.4"]);



app.use(cors({
    origin:"http://localhost:5173",
    credentials:true
}))
app.use(express.json())
app.use(cookieParser())
app.use("/auth", authRouter);


app.use(errorMiddleware)


export {app}