const express = require('express');
const router = express.Router();
const path=require('path')

const customerController=require('../controllers/customerController')
const multer = require('multer');


const storeFile=multer.diskStorage({
    destination:function(req,file,cb){
        cb(null,'public/uploads')
    },
    filename:function(req,file,cb){
        cb(null,req.body.subcode+ path.extname(file.originalname ))
    }

    })
const upload = multer({storage:storeFile})

/* 
Customer Routes
 */

//admin Dashboard
router.get('/adminDashboard',customerController.adminDashboard)

//user details list
router.get('/adminDashboard/usersDetails',customerController.usersDetails)

//for add new user
router.get('/adminDahboard/addUser', customerController.addUser);
router.get('/reg',customerController.registerUser);
router.post('/adminDahboard/addUser', customerController.postUser);

//user full details as profile
router.get('/adminDashboard/user/profile/:id',customerController.profileUserPage);

//edit |update user details
router.get('/adminDashboard/user/edit/:id',customerController.editUserPage);
router.post('/adminDashboard/user/edit/:id',customerController.editUser);

//delete users for both admin and students
router.post('/adminDashboard/user/delete/:id',customerController.deleteUser);

//upload study materials
router.get('/adminDashboard/materials/file',customerController.fileUpload);
router.post('/adminDashboard/materials/fileUploader',upload.single('noteFile'),customerController.fileUploader);

//notes details as teble list
router.get('/adminDashboard/materials/notesList',customerController.notesDetails);

//For delete notes 
router.post('/adminDashboard/materials/delete/:id',customerController.deletenotes)

//create admin
router.get('/adminDahboard/createAdmin',customerController.createAdminPage)

module.exports = router;
