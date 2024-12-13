
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
        res.render(path.join(__dirname,'..','..','views','authentication','register'),{local, auth});

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
        res.render(path.join(__dirname,'..','..','views','client','home'),{local,auth});
        
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
        res.render(path.join(__dirname,'..','..','views','authentication','login'),{local, auth});

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
            res.redirect('/userD')
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
        res.render(path.join(__dirname,'..','..','views','client','home'),{local, auth});

        
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
    
    const auth='home';
        const local={
            title:'home page',
            description:'This is the crud-user management system'
        };
        res.render(path.join(__dirname,'..','..','views','client','userDashboard'),{local,auth});
        
    } catch (error) {
        res.status(505).send('Error Registering User')
    }
}