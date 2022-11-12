const express = require('express')
const userController =require('../controllers/userController')


const router = express.Router()
const userController1= new userController();

router.post('/signup',userController1.addUser);
router.post("/login",userController1.loginUser);
router.get('/',userController1.getAllUsers);
router.get('/:id',userController1.getSingleUser);
router.put('/:id',userController1.updateUser);
router.delete('/:id',userController1.deleteUser);

// router.post('/login',user.login);

module.exports = router;