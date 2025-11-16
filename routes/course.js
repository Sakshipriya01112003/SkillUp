const {Router} = require("express");
const courseRouter = Router();

courseRouter.get("/preview" , function(req, res){
   res.json({
    "message" : "All available courses are listed here"
   })
})

courseRouter.get("/purchases" , function(req, res){
       res.json({
          "message" : "All courses purchased by user are listed here"
       })
})

module.exports = {courseRouter}