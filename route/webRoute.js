const express = require("express")
const newsModel = require("../db/newsSchema.js")
const newsController = require("../controllers/newsController.js")
const clientInfo = require("../controllers/clientInfoController.js")
const projectController = require("../controllers/projectController.js")
const queryController = require("../controllers/queryController.js")
const multer  = require('multer')
const router = express.Router()
const path = require('path');
const loginSignupController = require("../controllers/loginSignupController.js")
const userModel = require("../db/userLoginSignupSchema.js")

const storageNews = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'uploads/newspdf')
    },
    filename: function (req, file, cb) {
      const uniqueSuffix = Date.now();
      cb(null, file.originalname + '-' + uniqueSuffix + ".pdf")
    }
  })
  const uploadNews = multer({ storage: storageNews })


  const storageProject = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'uploads/projectPdf')
    },
    filename: function (req, file, cb) {
      const uniqueSuffix = Date.now();
      cb(null, file.originalname + '-' + uniqueSuffix + ".pdf")
    }
  })
  const uploadProject = multer({ storage: storageProject })


  const authenMiddleware = async (req,res,next)=>{
    const data = await userModel.findOne({email:req.body.email})
    if(data){
      next();
    }else{
      res.send("Admin is not valid.")
    }

  }





router.get("/",(req,res)=>{
    res.send("<h1>backend run sucessfully.</h1>")

})
router.get("/abc",(req,res)=>{
  res.send("<h1>backend hello.</h1>")

})



router.get("/news",newsController.getNewsController)


router.post("/downloadnewspdf",(req,res)=>{
    res.download(path.join(__dirname +`/../uploads/newsPdf/${req.body.fileName}`))
})

router.post("/downloadprojectpdf",(req,res)=>{
  
    res.download(path.join(__dirname +`/../uploads/projectPdf/${req.body.fileName}`))
    // res.send()
})
 router.post("/login-signup",loginSignupController.postLoginSignupController)
 router.post("/login-signup-authen",loginSignupController.getLoginSignupAuthenController)


router.post("/news",uploadNews.single("newsImage"),newsController.postNewsController)

router.post("/notification",newsController.postNotificationController)

router.get("/clientinfo",clientInfo.getClientInfo)

router.get("/project",projectController.getProjectController)


router.post("/project",uploadProject.single("projectPdf"),projectController.postProjectController)
router.post("/queryform",queryController.postQuery)

module.exports = router;