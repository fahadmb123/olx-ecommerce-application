import express,{Request,Response} from "express";
import authRouter from "./routes/auth"
import cors from "cors"
import errorMiddleware from "./middleware/errorMiddleware";



const app = express()


app.use(cors())
app.use(express.json())
app.use("/auth", authRouter);


app.use(errorMiddleware)


export {app}