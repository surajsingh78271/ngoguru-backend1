const clientInfoModel = require("../db/clientSchema")


class clientInfo{

    static getClientInfo = async (req,res)=>{
      const clientData = await  clientInfoModel.findOne({email:"ngoclient@test.com"})
      // console.log(clientData)
      res.send({result:clientData})

    }

}

module.exports =  clientInfo