
const path=require('path')
const User=require('../model/User')

const fs = require('fs');

const Notes=require('../model/Notes')
/* 

/get
//client page
*/

exports.clientRegisterPage=async (req,res,next)=>{
    try {
        const auth='register';
        const local={
            title:'client page',
            description:'This is the crud-user management system'
        };
        res.render(path.join(__dirname,'..','..','views','user','authentication','register'),{local, auth});

    } catch (error) {
        res.status(505).send('cannot find the page')
    }
}


/* 
//post
//register user
 */

exports.clientRegister=async (req,res,next)=>{

    const newUser={
        fname:req.body.fname,
        lname:req.body.lname,
        email:req.body.email,
        tel:req.body.tel,
        password:req.body.password,
        detail:req.body.detail,
     
        createdAt: Date.now()

    };

    try {

await User.create(newUser);
const auth='home';
        const local={
            title:'home page',
            description:'This is the crud-user management system'
        };
        res.render(path.join(__dirname,'..','..','views','user','client','home'),{local,auth});
        
    } catch (error) {
        res.status(505).send('Error Registering User')
    }
   

};

/* 
//Get
//login page
 */

exports.clientLoginPage=async (req,res,next)=>{
    try {
        const auth='login';
        const local={
            title:'login page',
            description:'This is the crud-user management system'
        };
        res.render(path.join(__dirname,'..','..','views','user','authentication','studentLogin'),{local, auth});

    } catch (error) {
        res.status(505).send('cannot find the page')
    }
};


/* 
//post
//login page
 */

exports.login=async (req,res,next)=>{
    try {
        const query={
            email:req.body.email,
            password:req.body.password
        }
        const user=await User.findOne(query);
        if(!user){
            res.status(404).send('User not found')
        }
        else{
            /* const token=await user.generateToken();
            res.status(200).send(token); */
            res.redirect('/userDashboard')
            }
            } catch (error) {
                res.status(505).send('Error logging in')
            }
        }

    


/* 
//get
//home page
*/

exports.homePage=async (req,res,next)=>{
    try {
        const auth='home'
        const local={
            title:'Home page',
            description:'This is the crud-user management system'
        };
        res.render(path.join(__dirname,'..','..','views','user','client','home'),{local, auth});

        
    } catch (error) {
        res.status(505).send('cannot loade the page')
    }
}

/* 
/get
//user Dashboard
 */

exports.userDashboard=async(req,res,next)=>{
   
   try{
    
    const auth='user';
    const allNotes= await Notes.find()
        const local={
            title:'home page',
            description:'This is the crud-user management system'
        };
        res.render(path.join(__dirname,'..','..','views','user','client','userDashboard'),{local,auth,allNotes});
        
    } catch (error) {
        res.status(505).send('Error Registering User')
    }
}


/* 
//GET
// to get notes search page
 */

exports.notesSearchPage=async(req,res,next)=>{
    try{
    
        const auth='user';
    const section='search';
            const local={
                title:'home page',
                description:'This is the crud-user management system'
            };
            res.render(path.join(__dirname,'..','..','views','user','client','notes'),{local,auth,section});
            
        } catch (error) {
            res.status(505).send('Error finding page')
        }
}

/* 
//post
// notes searcher
//  */

exports.notesFinder=async(req,res,next)=>{
    try {
        const auth='user';
        const section='result'
        const notes={
            studyear:req.body.studyear,
            department:req.body.department,
            semester:req.body.semester
        }
        const findNotes=await Notes.find(notes)
        
        const local={
            title:'home page',
            description:'This is the crud-user management system'
        };
        res.render(path.join(__dirname,'..','..','views','user','client','notes'),{local,auth,findNotes,section});
    } catch (error) {
        res.status(505).send('Error finding notes')
        
    }
}