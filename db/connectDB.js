// import mongoose from "mongoose";
// const mongoose = require("mongoose")
const mongoose = require('mongoose');

const connectDB = async (DB_URL)=>{
     try{
          return await mongoose.connect(DB_URL,{
        dbName:"ngoguru",
          useNewUrlParser: true,
        useUnifiedTopology: true,
     }).then(()=>{
        console.log("DB Sucessfully Connected.")
    })
 }
          catch(error){
               console.log("Error", error)    
          }
}

module.exports = connectDB
