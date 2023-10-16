const express = require("express")
const route = require("./route/webRoute")
const cors = require("cors")
const connectDB = require("./db/connectDB.js")

const newsModel = require("./db/newsSchema.js")
const notificationModel = require("./db/notificationSchema.js")
const userModel = require("./db/userLoginSignupSchema.js")
const clientInfoModel = require("./db/clientSchema.js")
const projectModel = require("./db/projectSchema.js")
const queryModel = require("./db/querySchema.js")
const dotenv = require("dotenv")
const path = require('path');
const clientPaymentModel = require("./db/clientPaymentSchema")
dotenv.config()

const app = express()
app.use(express.json())
app.use(express.urlencoded({extended:false}))

// app.use(express.static(path.join(__dirname, "./uploads/")));
app.use(express.static("uploads"));
app.use(cors())
connectDB(process.env.DB_Host_URL);
app.use("/",route)


app.listen(8080,()=>{
    console.log("backend succesfully running.")
})