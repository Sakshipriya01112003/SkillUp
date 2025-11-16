const express = require("express");
const app = express();
 const dotenv = require('dotenv');
dotenv.config();
const moongoose = require("mongoose");
const {userRouter} = require("./routes/user");
const {courseRouter} = require("./routes/course")
const {adminRouter} = require("./routes/admin");
const { default: mongoose } = require("mongoose");

const jwtSecret = process.env.JWT_SECRET;

mongoose.connect(process.env.MONGO_URI)
.then(() => {
  console.log("Database connected")
})

app.use("/admin",adminRouter);
app.use("/user",userRouter);
app.use("/course", courseRouter);


app.listen(3000);