import express from "express";
import cors from "cors";
import 'dotenv/config';
import cookieParser from "cookie-parser";

import connectDB from "./config/mongodb.js";
import authRouter from "./routes/authRoutes.js";
    
const app= express();
const port = process.env.PORT || 4000
connectDB(); ///now we connected our express with mongodb database

app.use(express.json());
app.use(cookieParser());
app.use(cors({credentials: true}))

///API Endpoints
app.get('/', (req,res) =>{
    res.send("API working ")
});
app.use('/api/auth', authRouter)
app.listen(port, ()=>{
   console.log(`server started on port:${port}`) 
});