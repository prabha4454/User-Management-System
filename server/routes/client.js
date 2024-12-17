const express = require('express');
const router = express.Router();
const clientController=require('../controllers/clientController')





/* 
//clent routes
 */
//for home page
router.get('^/$|home',clientController.homePage);

//to register user
router.get('/register',clientController.clientRegisterPage);
router.post('/register',clientController.clientRegister);

//for student login
router.get('/studentLogin',clientController.clientLoginPage);
router.post('/studentLogin',clientController.userLogin);

//for admin login

router.get('/adminLogin',clientController.adminLoginPage);
router.post('/adminLogin',clientController.adminLogin);

//for user | student dashboard
router.get('/userDashboard',clientController.userDashboard);

//to search and find required notes
router.get('/userDashboard/notes',clientController.notesSearchPage);
router.post('/userDashboard/notes',clientController.notesFinder);



module.exports=router;