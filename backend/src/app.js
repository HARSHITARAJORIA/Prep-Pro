import express from "express";
import {createServer} from "node:http";

import {Server} from "socket.io";
import {connectToSocket} from "./controllers/socketManager.js";
import mongoose from "mongoose";

import cors from "cors";
import userRoutes from "./routes/usersroutes.js"

const app=express();
const server=createServer(app);
const io=connectToSocket(server);

app.set("port",(process.env.PORT || 8000));
app.use(cors());
app.use(express.json({limit:"40kb"}));
app.use(express.urlencoded({limit:"40kb",extended:true}));
app.use("/api/v1/users",userRoutes);
const start=async()=>{
    const connectionDb=await mongoose.connect("mongodb+srv://rajoriaharshita27:harshitarajoria@cluster0.ugafi3p.mongodb.net/")
    console.log(`Database connected :${connectionDb.connection.host}`)

    server.listen(app.get("port"),()=>{
    console.log("Listen On Port 8000");
})
}
start();
