const cloudinary = require('cloudinary').v2;
/*const Cloud_Name =" dicsvoqpm"
 const Api_Key = "591677737954482"
const Api_SECRET = "miOox6D5uyuHt6zvXUTRPw2w-GU"*/
 
require("dotenv").config();

exports.cloudinaryconnect = () =>{
    try {
        cloudinary.config({
       api_key: process.env.API_KEY,
        cloud_name: process.env.CLOUD_NAME,
        api_secret: process.env.API_SECRET

        })

        console.log("cloudinary is running properly");
        
       // console.log(Cloud_Name,Api_SECRET,Api_Key);
    } catch (error) {
        console.log(error);
    }
}