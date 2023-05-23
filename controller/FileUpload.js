  const File = require("../models/file");
  const cloudinary = require("cloudinary").v2;
  const api_SECRET = "miOox6D5uyuHt6zvXUTRPw2w-GU";
  const  cloud_Name = "dicsvoqpm"
  const api_Key = "59167773795448"


    exports.uploadFile = async (req, res) => {
        try {
    
            //fetch filefrom request
            const file = req.files.filee;// ye filees fetch hoga mere system se aur fir server vaale path pe save hoga
            console.log("FILE AAGYI JEE -> ",filee);
           
           

            console.log(api_SECRET ,api_Key,cloud_Name)
    
            //create path where file need to be stored on server
            let path = __dirname + "/files/" + Date.now() +`.${file.name.split('.')[1]}`;
            console.log("PATH-> ", path)
         
           console.log(file);
           console.log(req.files);

            //add path to the move fucntion
            file.mv(path , (err) => {
                console.log(err);
            });
    
            //create a successful response
            res.json({
                success:true,
                message:'Local File Uploaded Successfully',
            });

           
           
            res.json({
                message:"the data has been entered in the db successfully"
            })
            res.status(400).json({
                message:"there is an error"
            })
        }
        catch(error) {
            console.log("Not able to upload the file on server")
            console.log(error);
        }
    }

   /* // imageUpload

    // now to upload the image we need to the following tasks
    
    // we need to fetch the data 

    // we need to perform some validation regarding file support

    // upload to cloudinary

    // save in db

    // successfull response

    function isFileTypeSupported(fileType,supportedfileType){
        return supportedfileType.includes(fileType);

    }


    function uploadFileToCloudinary(file,folder){

        const options = {folder};
        cloudinary.uploader.upload(file.Tempfilepath);
    }

    exports.imageUpload = async (req,res) =>{
        try {
            
    
    // we need to fetch the data 

           const {email,naming,tags,imageUrl} = req.body;
           console.log(email,naming,tags,imageUrl);

           const  file = req.files.imageUploadfile;
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
console.log("ekvenva;");
          const response = await uploadFileToCloudinary(file,"codehelp");
          console.log(response);

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
                message:`there is ${error}`,
                success:false
            })
            
        }
    }
    */