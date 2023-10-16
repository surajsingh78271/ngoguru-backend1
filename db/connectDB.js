// import mongoose from "mongoose";
// const mongoose = require("mongoose")
const mongoose = require('mongoose');

const connectDB = async (DB_URL)=>{
     return await mongoose.connect(DB_URL,{
        dbName:"ngoguru",
        // serverApi: {
        //     version: ServerApiVersion.v1,
        //     strict: true,
        //     deprecationErrors: true,
        //   }
     }).then(()=>{
        console.log("DB Sucessfully Connected.")
    }).catch((error)=>{
        console.log("Error", error)

    })
}

module.exports = connectDB