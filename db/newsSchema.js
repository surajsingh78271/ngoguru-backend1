const mongoose = require("mongoose")

const newsSchema = mongoose.Schema({
    listItem:String,
    filePath:String,
    fileName:String

})

const newsModel = mongoose.model("newsupdate",newsSchema)

module.exports = newsModel