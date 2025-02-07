import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import { connectDB } from "./config/db.js";
import authRoutes from "./routes/authRoutes.js";

dotenv.config();
const app = express();

connectDB();
app.use(cors());
app.use(express.json());



app.get("/", (req, res)=>{
   
    res.send("andre server is running");
})

app.use("/api/auth", authRoutes);

app.listen(5000, ()=> {
    console.log('server running at port 5000');
});