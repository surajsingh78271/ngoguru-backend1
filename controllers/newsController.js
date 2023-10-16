const newsModel  = require("../db/newsSchema.js");
const notificationModel = require("../db/notificationSchema.js");

class newsController{


    static getNewsController = async (req,res)=>{
        const notificationData = await notificationModel.find();
        const newsData = await newsModel.find();
        res.send({result:{newsData:newsData,notificationData:notificationData}})

    }

    static postNewsController = async (req,res)=>{
        

        if(req.body){
            const doc = await new newsModel({
                listItem:req.body.listItem,
                filePath:req.file.path,
                fileName:req.file.filename
            })
        await doc.save()
        res.send({indicator:"News data is successfully submitted."})

        }else{
            res.send({indicator:"Mandatory all fields."})

        }
    
    }

    static postNotificationController = async (req,res)=>{

        if(req.body){
            const doc = await new notificationModel(req.body)
        await doc.save()
        res.send({indicator:"News data is successfully submitted."})

        }else{
            res.send({indicator:"Mandatory all fields."})

        }
        


    }



}


module.exports = newsController