// import mongoose from 'mongoose'
const mongoose = require("mongoose")

const projectSchema = mongoose.Schema({
    tid:String,
    location:String,
    amount:String,
    heading:String,
    disc:String,
    lDate:String,
    projectPdf:String
})

const projectModel = mongoose.model("projectupdate",projectSchema)


module.exports = projectModel