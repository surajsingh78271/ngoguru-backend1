const mongoose = require("mongoose")

const querySchema = mongoose.Schema({
    name:String,
    email:String,
    organizationName:String,
    mobileNo:String,
    message:String
})

const queryModel = mongoose.model("userquerie",querySchema)

module.exports = queryModel