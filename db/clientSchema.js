const mongoose = require("mongoose")

const clientInfoSchema = mongoose.Schema({
    name:String,
    email:String,
    contact:Number,
    address:String,
    password:String,
    clientID:String,
    clientNumber:String
})

const clientInfoModel = mongoose.model("clientInformation",clientInfoSchema)


module.exports = clientInfoModel