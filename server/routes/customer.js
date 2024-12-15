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
router.get('/adminDashboard',customerController.adminDashboard)
router.get('/adminDashboard/usersDetails',customerController.usersDetails)

router.get('/adminDahboard/addUser', customerController.addUser);
router.get('/reg',customerController.registerUser)
router.post('/adminDahboard/addUser', customerController.postUser);

router.get('/adminDashboard/user/profile/:id',customerController.profileUserPage)
router.get('/adminDashboard/user/edit/:id',customerController.editUserPage)
router.post('/adminDashboard/user/edit/:id',customerController.editUser)


router.post('/adminDashboard/user/delete/:id',customerController.deleteUser)

router.get('/adminDashboard/materials/file',customerController.fileUpload);
router.post('/adminDashboard/materials/fileUploader',upload.single('noteFile'),customerController.fileUploader);
router.get('/adminDashboard/materials/notesList',customerController.notesDetails);
module.exports = router;
