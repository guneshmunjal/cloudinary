// import the mongoose
const mongoose  = require("mongoose");

require("dotenv").config();

const dbconnect = ()=>{
    mongoose.connect(process.env.DATABASE_URL,{
        useNewUrlParser:true,
        useUnifiedTopology:true,
    
    })
    .then(() => console.log("DB is connected successfully"))
    .catch((err) => {
        console.log(err);
         console.log("issue in db connection");
        
       return process.exit(1);
    });
}
 
module.exports=dbconnect;