// api ko mount karna h
// activate the server

// app se connect karna h
const express = require("express");
const app = express();
const morgan = require('morgan')
app.use(morgan("dev"));

// load config from env file

require("dotenv").config();

// port find karna h
const PORT = process.env.PORT || 3000; // ya to port env se le ke uspe chalado ya phir port 3000 par chala dijiye

//middleware add karne h

app.use(express.json());
const fileUpload = require(`express-fileupload`);
app.use(fileUpload({
  useTempFiles : true,
  tempFileDir : '/tmp/'
  }));





// Note that this option available for versions 1.0.0 and newer. 



//start server
app.listen(PORT,()=>{
    console.log(`app successfully created at ${PORT}`);
})
//connect to database
 const dbconnect=require("./config/Database");
 dbconnect();

// connect to cloudinary
const Cloudinary = require("./config/cloudinary");
Cloudinary.cloudinaryconnect();

//import routes
const uploadFile = require("./routes/fileUpload");
app.use("/api/uploads",uploadFile);

 //default route


 app.get("/",(req,res)=>{
    res.send(`<h1>this is running successfully</h1> <h2>this is working and took hours to find the error 
    and now it is running on port 3000</h2>`);

 });

 