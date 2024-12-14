const express = require('express');
const router = express.Router();
const path=require('path')

const customerController=require('../controllers/customerController')
const multer = require('multer');


const storeFile=multer.diskStorage({
    destination:function(req,file,cb){
        cb(null,'uploads/')
    },
    filename:function(req,file,cb){
        cb(null,req.body.subcode+ path.extname(file.originalname ))
    }

    })
const upload = multer({storage:storeFile})

/* 
Customer Routes
 */

router.get('/', customerController.homePage)

router.get('/add', customerController.addUser);
router.get('/reg',customerController.registerUser)
router.post('/add', customerController.postUser);

router.get('/profile/:id',customerController.profileUserPage)
router.get('/edit/:id',customerController.editUserPage)
router.post('/edit/:id',customerController.editUser)


router.post('/delete/:id',customerController.deleteUser)

router.get('/file',customerController.fileUpload);
router.post('/fileUploader',upload.single('noteFile'),customerController.fileUploader);
module.exports = router;
