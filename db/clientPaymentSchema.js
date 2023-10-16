const mongoose = require("mongoose")

const clientPaymentSchema = mongoose.Schema({
    name:String,
    email:String,
    contact:Number,
    address:String,
    clientID:String,
    clientNumber:String,
    clientPayment:Boolean
})

const clientPaymentModel = mongoose.model("clientPaymentDetail",clientPaymentSchema)


module.exports = clientPaymentModel