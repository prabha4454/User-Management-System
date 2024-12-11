const User=require('../model/User')
const path=require('path')
/* 
/GET
/Home Page
 */

exports.homePage=async (req,res)=>{
    
      
    


        try {

            const users= await User.find().limit(20)
      
              const local={
                  title:'Add User',
                  description:'This is the crud-user management system'
              };
              res.render(path.join(__dirname,'..','..','views','layouts','index'),{local, users});
              
          } catch (error) {
              res.status(505).send('Error Fetching User')
          }
    
};

/* 
/GET
/Add User
 */
exports.addUser=async (req,res)=>{

    
    
    const local={
        title:'Add User',
        description:'This is the crud-user management system'
    };
    res.render(path.join(__dirname,'..','..','views','customer','addUser'),{local});

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

        const local={
            title:'Add User',
            description:'This is the crud-user management system'
        };
        res.render(path.join(__dirname,'..','..','views','customer','addUser'),{local});
        
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
 
        const local={
            title:' User profile',
            description:'This is the crud-user management system'
        };
         res.render(path.join(__dirname,'..','..','views','customer','profile'),{local,view});
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
 
        const local={
            title:'Edit User',
            description:'This is the crud-user management system'
        };
         res.render(path.join(__dirname,'..','..','views','customer','editUser'),{local,edit});
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
    res.render(path.join(__dirname,'..','..','views','authentication','register'),{local,auth});

};
