const express = require('express');
const router = express.Router();

const customerController=require('../controllers/customerController')

/* 
Customer Routes
 */

router.get('/', customerController.homePage)

router.get('/add', customerController.addUser);

router.post('/add', customerController.postUser);

router.get('/profile/:id',customerController.profileUserPage)
router.get('/edit/:id',customerController.editUserPage)
router.post('/edit/:id',customerController.editUser)


router.post('/delete/:id',customerController.deleteUser)
module.exports = router;
