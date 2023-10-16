const projectModel = require("../db/projectSchema")
class projectController{
    static getProjectController = async (req,res)=>{
        const data = await projectModel.find();
        res.send({result:data})
    }

    static postProjectController = async (req,res)=>{
        // console.log(req.file)
        // console.log(req.body)

        if(req.body){
        const doc = await new projectModel({
            tid:req.body.tid,
            location:req.body.location,
            amount:req.body.amount,
            heading:req.body.heading,
            disc:req.body.disc,
            lDate:req.body.lDate,
            projectPdf:req.file.filename
        })
        await doc.save()
        res.send({indicator:"Project data is successfully submitted."})
        }else{
            res.send({indicator:"Mandatory all fields."})
        }
        


    }



}


module.exports = projectController