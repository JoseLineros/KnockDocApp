const express = require('express');
const router = express.Router();

// Import
const usersControllers = require('../controllers/user.controllers');

// Verify Token
const Validator = require('../middlewares/verifyToken');

// ROUTES
router.get('/message', Validator.verifyToken, usersControllers.message);

// router.post('/signup', usersControllers.signup);
router.post('/signin', usersControllers.signin);

router.post('/createUser', usersControllers.createUser);
router.get('/getAllUsers', Validator.verifyToken, usersControllers.getAllUsers);
router.get('/getUserById/:id', Validator.verifyToken, usersControllers.getUserById);
router.put('/updateUser/:id', Validator.verifyToken, usersControllers.updateUser);
router.delete('/deleteUser/:id', Validator.verifyToken, usersControllers.deleteUser);

module.exports = router;
