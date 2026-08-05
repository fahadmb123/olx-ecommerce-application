import connectDB from "./config/db";
import * as dotenv from "dotenv";
import {app} from "./app"

const PORT = process.env.PORT || 5000



dotenv.config()
connectDB()


app.listen(PORT,()=>{
    console.log(`Server running on PORT ${PORT} localhost:${PORT}`)
})