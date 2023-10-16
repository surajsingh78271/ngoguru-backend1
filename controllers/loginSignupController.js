const clientPaymentModel = require("../db/clientPaymentSchema")
const userModel = require("../db/userLoginSignupSchema")

class loginSignupController{
    static postLoginSignupController = async (req,res)=>{
        const doc = await new userModel({
            name:req.body.name,
            email:req.body.email,
            phone:req.body.phone,
            password:req.body.password
        })
        await doc.save()
        res.send({indicator:"Your Registration is successfully completed, Now you can login."})

    }

    static getLoginSignupAuthenController = async (req,res)=>{




        const data = await userModel.findOne({email:req.body.email})
        if(data){ 
            if(data.password === req.body.password){
                if(data.email === "ngoguruadmin@test.com"){
                    res.send({result:{
                        statu:"203",
                        indicator:"Login Successfully.."
                        }})

                }else{

                    
                    const data = await clientPaymentModel.findOne({email:req.body.email})
                    
                    if(data){
                        res.send({result:{
                            statu:"204",
                            indicator:"Login Successfully.."
                            }})

                    }else{
                        res.send({result:{
                            statu:"200",
                            indicator:"Login Successfully.."
                            }})

                    }
                    

                }
                

            }else{
                res.send({result:{
                    statu:"202",
                    indicator:"PASSWORD IS WRONG."
    
                }})

            }
            
        }else{
            res.send({result:{
                statu:"201",
                indicator:"Email ID is not registered."
            }})
        }
    }





}

module.exports = loginSignupController