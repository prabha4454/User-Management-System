const User=require('../model/User')
const path=require('path')
const fs = require('fs/promises');
const Notes=require('../model/Notes')
const Admin=require('../model/admin')


/* 
//multer file uploade config
 */
const multer = require('multer');
const { title } = require('process');

const storeFile=multer.diskStorage({
    destination:function(req,file,cb){
        cd(null,'uploads/')
    },
    filename:function(req,file,cb){
        cb(null,Date.now() + path.extname(file.originalname ))
    }

    })
const upload = multer({storage:storeFile})



/* 
//Get
// admin login page
 */

exports.adminLoginPage=async (req,res,next)=>{

   
}

/* 
//GET
// ADMIN dashboard */
exports.adminDashboard=async(req,res,next)=>{
    try {
        const auth='admin';
       
          const local={
              title:'Admin Dashboard',
              description:'This is the crud-user management system'
          };
          res.render(path.join(__dirname,'..','..','views','layouts','adminDashboard'),{local,auth});
          
      } catch (error) {
          res.status(505).send('Error loading the page')
      }
}

/* 
/GET
/Home Page
 */

exports.usersDetails=async (req,res)=>{
    
      
    


        try {
            const auth='admin';
            const users= await User.find().limit(20)
      
              const local={
                  title:'Add User',
                  description:'This is the crud-user management system'
              };
              res.render(path.join(__dirname,'..','..','views','admin','customer','usersDetails'),{local, users,auth});
              
          } catch (error) {
              res.status(505).send('Error Fetching User')
          }
    
};

/* 
/GET
/Add User
 */
exports.addUser=async (req,res)=>{

    
    const auth='admin';
    const local={
        title:'Add User',
        description:'This is the crud-user management system'
    };
    res.render(path.join(__dirname,'..','..','views','admin','customer','addUser'),{local,auth});

};

/* 
/post
/create new user
 */
exports.postUser=async (req,res)=>{
    
    const newUser={
        fname:req.body.fname,
        lname:req.body.lname,
        email:req.body.email,
        tel:req.body.tel,
        detail:req.body.detail,
        createdAt: Date.now()

    };

    try {

await User.create(newUser);
/* const auth='admin';
        const local={
            title:'Add User',
            description:'This is the crud-user management system'
        }; */
    res.redirect('/adminDahboard/addUser')
        
    } catch (error) {
        res.status(505).send('Error Creting User')
    }
   

};
/* 
//get
// user profile page
 */
exports.profileUserPage=async(req,res,next)=>{

    try{
             const view= await User.findOne({ _id:req.params.id});
             const auth='admin';
        const local={
            title:' User profile',
            description:'This is the crud-user management system'
        };
         res.render(path.join(__dirname,'..','..','views','admin','customer','profile'),{local,view,auth});
    }
    catch(err){
        res.status(500).send('Error finging the Details'+err);
    }
 };

/* 
//get
//edit user page
 */
exports.editUserPage=async(req,res,next)=>{

    try{
             const edit= await User.findOne({ _id:req.params.id});
             const auth='admin';
        const local={
            title:'Edit User',
            description:'This is the crud-user management system'
        };
         res.render(path.join(__dirname,'..','..','views','admin','customer','editUser'),{local,edit,auth});
    }
    catch(err){
        res.status(500).send('Error finging the Details'+err);
    }
 };




 /* 
 //post
 //Edit user Details

  */

 exports.editUser=async(req,res,next)=>{

    try{
        await User.findByIdAndUpdate(req.params.id,{
            fname:req.body.fname,
            lname:req.body.lname,
            email:req.body.email,
            tel:req.body.tel,
            detail:req.body.detail,
            updatedAt:Date.now()
        
    
        });
        res.redirect('/')
    }
    catch(err){
        res.status(500).send('Error Updating the Details'+err);
    }
 };

/* 
//post
//Detle user
 */

 exports.deleteUser=async (req,res,next)=>{
    try {
        const edit= await User.deleteOne({ _id:req.params.id});
        
        res.redirect('/');
    } catch (err) {
        res.status(500).send('Error deleting item');
    }
}

/* 
//GET
//register user page
 */

exports.registerUser=async (req,res,next)=>{

    
    const auth=1;
    const local={
        title:'register User',
        description:'This is the crud-user management system'
    };
    res.render(path.join(__dirname,'..','..','views','admin','authentication','register'),{local,auth});

};

/* 
//GET 
// file uploade page
 */

exports.fileUpload=async (req,res,next)=>{
    try {
        const auth='admin';
    const local={
        title:'file uploader ',
        description:'This is the crud-user management system'
    };
    res.render(path.join(__dirname,'..','..','views','admin','studyMaterials','fileUpload'),{local,auth});

    } catch (error) {
        res.status(500).send('Error error loading page');
    }
};


/* 
//Post
//notes upload
 */

exports.fileUploader=  async ( req,res,next)=>{
   const newNotes={
    subname:req.body.subname,
    subcode:req.body.subcode,
    department:req.body.department,
    studyear:req.body.studyear,
    semester:req.body.semester,
    path:req.file.path,
    filename:req.file.filename,
    createdAt: Date.now()
   }
   if(!req.file){
    console.log('not file recived')
   }
 
    try {
       
        console.log(req.file)
        await Notes.create(newNotes);
       /*  const auth='admin';
        const local={
            title:'Add User',
            description:'This is the crud-user management system'
        }; */
        res.redirect('/adminDashboard/materials/file')
        console.log('file added')
    } catch (error) {
        res.status(505).send('cannot upload the file'+error)
        
    }
}


/* 
//Get 
// find all notes
//  */

exports.notesDetails=async (req,res)=>{
    
      
    


    try {
        const auth='admin';
        const allNotes= await Notes.find().limit(20)
  
          const local={
              title:'Notes Details',
              description:'This is the crud-user management system'
          };
          res.render(path.join(__dirname,'..','..','views','admin','studyMaterials','notesList'),{local, allNotes,auth});
          
      } catch (error) {
          res.status(505).send('Error Fetching Details')
      }

};


/* 
//GET
// create new admin users page
//  */

exports.createAdminPage=async(req,res,next)=>{
    try {
        const auth='admin';
       
          const local={
              title:'Admin Dashboard',
              description:'This is the crud-user management system'
          };
          res.render(path.join(__dirname,'..','..','views','admin','authentication','createAdmin'),{local,auth});
          
      } catch (error) {
          res.status(505).send('Error loading the page')
      }

}

/* 
//POST
// create admin post funtion
//  */

exports.createAdmin=async (req,res)=>{
    
    const newAdmin={
        fname:req.body.fname,
        lname:req.body.lname,
        email:req.body.email,
        tel:req.body.tel,
        uname:req.body.uname,
         password:req.body.password,
        createdAt: Date.now()

    };

    try {

await Admin.create(newAdmin);
/* const auth='admin';
        const local={
            title:'Add User',
            description:'This is the crud-user management system'
        }; */
    res.redirect('/adminDahboard/createAdmin')
        
    } catch (error) {
        res.status(505).send('Error Creting Admin user')
    }
   

};

/* 
//POST
// delete notes file
//  */

exports.deletenotes=async(req,res,next)=>{

    try {
        const deleteNotes=await Notes.findOne({ _id:req.params.id});
        if(deleteNotes){
            const filePath=deleteNotes.path
            await fs.unlink(filePath)
        }
        else{
            console.log('cannot find file or file path')
        }


        await Notes.findByIdAndDelete(req.params.id);

        res.redirect('/adminDashboard/materials/notesList')
    } catch (err) {
        res.status(500).send('cannot delete file'+err)
    }

}


/* 
//GET 
// admin list page
//  */

exports.adminListPage=async(req,res,next)=>{
    try {
        const admins=await Admin.find()
        const auth='admin';
        const local={
            title:' Admin Dashboard',
            description:'This is the crud-user management system'}

            res.render(path.join(__dirname,'..','..','views','admin','customer','adminList'),{local,auth,admins});
        
    } catch (error) {
        res.status(505).send('cannot find Admin details')
        
    }
}

/* 
//POST
// to delete admin account */

exports.deleteAdmin=async(req,res,next)=>{

    try {
       

        await Admin.findByIdAndDelete(req.params.id);

        res.redirect('/adminDashboard/adminList')
    } catch (err) {
        res.status(500).send('cannot delete file'+err)
    }

}