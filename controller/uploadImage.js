const File = require("../models/file");
const cloudinary = require("cloudinary").v2;
const api_SECRET = "miOox6D5uyuHt6zvXUTRPw2w-GU";
const  cloud_Name = "dicsvoqpm"
const api_Key = "59167773795448"


 // imageUpload

    // now to upload the image we need to the following tasks
    
    // we need to fetch the data 

    // we need to perform some validation regarding file support

    // upload to cloudinary

    // save in db

    // successfull response

    function isFileTypeSupported(fileType,supportedfileType){
        return supportedfileType.includes(fileType);

    }


    //async function uploadFileToCloudinary(file,folder){

       // const options = {folder};
    //return await cloudinary.uploader.upload(file.tempFilePath,{folder});
    //}
    async function uploadFileToCloudinary(file, folder, quality) {
        const options = {folder};
        console.log("temp file path", file.tempFilePath);
    
        if(quality) {
            options.quality = quality;
        }
    
        options.resource_type = "auto";
        return await cloudinary.uploader.upload(file.tempFilePath, options);
    }
    
   


    exports.imageUpload = async (req,res) =>{
        try {
            
    
    // we need to fetch the data 

           const {email,naming,tags} = req.body;
         
           //console.log(api_Key,api_SECRET,cloud_Name);

           const  file = req.files.file;
            // we need to perform some validation regarding file support 
            console.log(file);
            
            const supportedfileType =["jpeg","jpg","png"];
             const  fileType = file.name.split('.')[1].toLowerCase();
         console.log(fileType);
        // if file not supported then return this

             if(!isFileTypeSupported(fileType,supportedfileType)){
              
                return res.json({
                      message : "file is not supported",
                    success:false
                })
             }
          //if file is supported then upload to cloudinary
           
          
          const response = await uploadFileToCloudinary(file,"codehelp");
          console.log("wenfiwnfij",response);
          const imageUrl = response.secure_url;
       
          // now save in db

          const saveDb = await File.create({
            naming,imageUrl,email,tags
          })

          res.status(200).json({
            success:true,
            message:"created successfully"
          })

        } catch (error) {
            res.status(404).json({
               
            message:error // Return a meaningful error message
            })
            
        }
    }