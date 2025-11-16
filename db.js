const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const objectId = mongoose.Types.ObjectId;

const userSchema = new Schema({
  email : String,
  password : String,
  firstname : String,
  lastname : String
})

const adminSchema = new Schema({
  email : String,
  password : String,
  firstname : String,
  lastname : String
})

const courseSchema = new Schema({
  title : String,
  description : String,
  price : Number,
  imageUrl : String,
  creatorId : objectId
})

const purchaseSchema = new Schema({
  courseID : objectId,
  userId : objectId
})


const userModel = mongoose.model("user",userSchema);
const adminModel = mongoose.model("admin",adminSchema);
const courseModel = mongoose.model("course",courseSchema);
const purchasesModel = mongoose.model("purchase",purchaseSchema);

module.exports = {
  userModel,
  adminModel,
  courseModel ,
  purchasesModel
}