const queryModel = require("../db/querySchema.js")
class queryController{
    static postQuery = async (req,res)=>{
        const {name,email,organizationName,mobileNo,message} = req.body

        if(name && email && organizationName && mobileNo){
            const doc = await new queryModel(req.body)
        await doc.save()
        res.send({indicator:"Thank you for your message. It has been sent."})
        }
        else{
            res.send({indicator:"All field are mandatory except message field."})

        }
        
    }
}

module.exports = queryController