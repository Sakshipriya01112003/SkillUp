const {Router} = require("express");

const userRouter = Router();

userRouter.post("/signup" , function(req, res){
  res.json({
    "message": "Sign in endpoint"
  })
})

userRouter.post("/login" , function(req, res){
    res.json({
    "message": "login in endpoint"
  })
})

userRouter.get("/purchases" , function(req, res){
     res.json({
    "message": "Users purchases"
  })
})

module.exports = {userRouter};