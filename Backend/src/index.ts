import "reflect-metadata"
import AppDataSource from "./config/database.config.ts"
import express from "express";

const app = express();


AppDataSource.initialize()
.then(()=>{
    console.log("database is initilized");
    app.listen(800,()=>{
        console.log("server is running ")
    })
})
.catch((err)=>{
    console.log(err);
})