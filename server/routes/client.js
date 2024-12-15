const express = require('express');
const router = express.Router();
const clientController=require('../controllers/clientController')


/* 
//clent routes
 */

router.get('/userDashboard',clientController.userDashboard);
router.get('/userDashboard/notes',clientController.notesSearchPage);
router.post('/userDashboard/notes',clientController.notesFinder);
router.get('/register',clientController.clientRegisterPage);
router.post('/register',clientController.clientRegister)
router.get('/login',clientController.clientLoginPage)
router.post('/login',clientController.login)
router.get('/home',clientController.homePage);


module.exports=router;