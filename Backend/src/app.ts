import express,{Request,Response} from "express";
import authRouter from "./routes/auth"
import cors from "cors"



const app = express()
app.use(cors())
app.use(express.json())

app.use("/api/auth", authRouter);





export {app}