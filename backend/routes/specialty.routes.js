const express = require('express');
const router = express.Router();

//importando controllers
const specialtyControllers = require('../controllers/specialty.controllers')

// Verify Token
//const Validator = require('../middlewares/verifyToken');

router.post('/createSpecialty', specialtyControllers.createSpecialty);

module.exports = router;