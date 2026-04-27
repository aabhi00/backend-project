// require('dotenv').config({path:'./env'})
import dotenv from "dotenv";
import connectDB from "./db/index.js";
import { app } from "./app.js";

dotenv.config({
    path: './env'
});

connectDB()
.then(() => {
    app.listen(process.env.PORT || 8000, () => {
        //logs server start
        console.log(`Server is running at port : ${process.env.PORT}`);
        //handles run time errors
        app.on("error", (error) => { 
            console.log("ERROR: ", error); /// logs error 
        throw error; // crash app
            
        })
    })
})
//if mongodb fails server will not start - > catch errors and log them 
.catch((err) => {
    console.log("MONGO db connection FAILED!!!! ", err);
    
})























/*
// this can also be used but not a professional approach
import mongoose from "mongoose";
import { DB_NAME } from "./constants";
import express from "express";
const app = express()
(async () => {
    try {
        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`) 
        app.on("error ", (error) => {
            console.log("Error: ", error);
            throw error
        })

        app.listen(process.env.PORT, () => {
            console.log(`App is listening on port ${process.env.PORT}`);
            
        })
    } catch (error) {
        console.error("ERROR : ", error);
        throw error
    }
})()

*/

// function connectDB(){}
// connectDB()