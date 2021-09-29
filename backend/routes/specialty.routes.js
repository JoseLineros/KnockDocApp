const express = require('express');
const router = express.Router();

//importando controllers
const specialtyControllers = require('../controllers/specialty.controllers')

// Verify Token
//const Validator = require('../middlewares/verifyToken');

router.post('/createSpecialty', specialtyControllers.createSpecialty);
router.get('/getAllSpecialtys', specialtyControllers.getAllSpecialtys);
router.get('/getSpecialtyById/:id', specialtyControllers.getSpecialtyById)
router.put('/updateSpecialty/:id', specialtyControllers.updateSpecialty)
router.delete('/deleteSpecialty/:id', specialtyControllers.deleteSpecialty);

module.exports = router;