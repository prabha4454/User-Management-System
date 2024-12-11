const mongoose=require('mongoose');
mongoose.set('strictQuery',false);


const mongoosDb=async()=>{
   try{
    const conn=await mongoose.connect('mongodb+srv://hprabha72:traCeI1r26yKWPqY@cluster0.bafds.mongodb.net/test');
    console.log(`Database is connected: ${conn.connection.host}`);
   }
   catch(err){
    console.log(err)
   }
};

module.exports=mongoosDb;