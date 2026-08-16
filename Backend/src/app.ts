import express,{Request,Response} from "express";
import authRouter from "./routes/auth"
import cors from "cors"
import errorMiddleware from "./middleware/errorMiddleware";
import cookieParser from "cookie-parser";


const app = express()



const dns = require("dns")
console.log(dns.getServers());
dns.setServers(["8.8.8.8", "8.8.4.4"]);


const allowedOrigins = [
    "http://localhost:5173",
    "https://olx-ecommerce-application-78mc.vercel.app"
]

app.use(cors({
    origin:allowedOrigins,
    credentials:true
}))
app.use(express.json())
app.use(cookieParser())
app.use("/auth", authRouter);


app.use(errorMiddleware)


export {app}