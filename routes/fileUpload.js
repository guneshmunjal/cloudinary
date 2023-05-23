const express = require("express");
const router=express.Router();

const {uploadFile } = require("../controller/FileUpload");


const{imageUpload} = require("../controller/uploadImage");

// mapping the controller
router.post("/Fileupload",
uploadFile 
);

router.post("/imageUpload",
imageUpload
);


module.exports=router;