import "dotenv/config";
import connectDB from "../src/config/db";
import { app } from "../src/app";

connectDB();

export default app;