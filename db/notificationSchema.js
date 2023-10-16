const mongoose = require("mongoose")

const notificationSchema = mongoose.Schema({
    notificationItem:String,
})

const notificationModel = mongoose.model("notificationUpdate",notificationSchema)

module.exports = notificationModel