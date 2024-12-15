const mongoose=require('mongoose')

const userSchema=new mongoose.Schema({
    fname:{
        type:String,
        required:true
    },
    lname:{type:String,required:true},
    email:{type:String,required:true},
    tel:{type:Number,required:true},
    password:{type:String,required:true},
    
    detail:{
        type:String,
        
    },
    createdAt:{
        type:Date,
        
      
    },
    updatedAt:{
        type: Date,
      
       
    }
});




module.exports=mongoose.model('User',userSchema);
