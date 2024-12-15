
const mongoose=require('mongoose')

const notesSchema=new mongoose.Schema({
    subname:{
        type:String,
     
    },
    subcode:{type:String,},
    department:{type:String,},
    studyear:{type:String,},
    semester:{
        type:String,
        
    },
    path:{
        type:String,
    },
    filename:{
        type:String,
    },
    createdBy:{
        type:String,
    },
    createdAt:{
        type:Date,
        
      
    },
    updatedBy:{
        type:String,
    },
    updatedAt:{
        type: Date,
      
       
    }
})

module.exports=mongoose.model('Notes',notesSchema);