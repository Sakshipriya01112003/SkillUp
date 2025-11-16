const {Router}  = require("express");
const adminRouter = Router();

adminRouter.post("/signup", function(req,res){
  res.json({
    "message" : "Sign up endpoint"
  })
});

adminRouter.post("/login", function(req,res){
  res.json({
    "message" : "Login up endpoint"
  })
})

adminRouter.post("/courses", function(req,res){
  res.json({
    "message" : "Admin can post a new course"
  })
})

adminRouter.put("/courses", function(req,res){
  res.json({
    "message" : "Admin can make a new course"
  })
})

adminRouter.put("/courses/bulk", function(req,res){
  res.json({
    "message" : "Admin can access all the courses at once at bulk"
  })
})

module.exports = {adminRouter};