const mongoose=require('mongoose')

const adminSchema=new mongoose.Schema({
    fname:{
        type:String,
        required:true
    },
    lname:{type:String,required:true},
    email:{type:String,required:true},
    tel:{type:Number,required:true},
    password:{type:String,required:true},
    
    uname:{
        type:String,
        
    },
    createdAt:{
        type:Date,
        
      
    },
    updatedAt:{
        type: Date,
      
       
    }
});




module.exports=mongoose.model('Admin',adminSchema);
