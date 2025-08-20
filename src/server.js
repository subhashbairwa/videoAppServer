import express from "express";
import "dotenv/config";
import authRoutes from "./routes/auth.route.js";
import userRoutes from "./routes/user.route.js";
import chatRoutes from "./routes/chat.route.js"
import {connectDB} from "./lib/db.js"
import cookieParser from "cookie-parser"
import cors from "cors";


const app= express();
app.use(express.json());
app.use(cookieParser());

const PORT = process.env.PORT

app.use(cors({
    origin:"https://video-app-usercom.vercel.app",
    credentials:true
}));

app.use("/api/auth",authRoutes);

app.use("/api/users",userRoutes);
app.use("/api/chat",chatRoutes);

app.listen(PORT,()=>{
    console.log(`Server is running on http://localhost:${PORT}`);
    connectDB();
});
