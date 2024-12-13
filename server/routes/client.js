const express = require('express');
const router = express.Router();
const clientController=require('../controllers/clientController')


/* 
//clent routes
 */

router.get('/userD',clientController.userDashboard)
router.get('/register',clientController.clientRegisterPage);
router.post('/register',clientController.clientRegister)
router.get('/login',clientController.clientLoginPage)
router.post('/login',clientController.login)
router.get('/home',clientController.homePage);


module.exports=router;