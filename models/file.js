const mongoose = require("mongoose");


const fileuploadSchema = new mongoose.Schema({
    naming:{
        type:String,
        required:true
    },
    imageUrl:{
        type:String,
        required:true,
       
    },
    tags:{
        type:String,
    },
    email:{
        type:String,
        required:true,
    }
})
fileuploadSchema.post('save',  async function(doc) {
    
    
    console.log('%s has been saved', doc._id);
    
  });

module.exports=mongoose.model("fileupload",fileuploadSchema);