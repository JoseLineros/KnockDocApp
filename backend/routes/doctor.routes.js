const express = require('express');
const router = express.Router();

// Import
const doctorsControllers = require('../controllers/doctor.controllers');

// Verify Token
const Validator = require('../middlewares/verifyToken');

// ROUTES
router.get('/message', Validator.verifyToken, doctorsControllers.message);

router.post('/signin', doctorsControllers.signin);

router.post('/createDoctor',  doctorsControllers.createDoctor);
router.get('/getAllDoctors', Validator.verifyToken, doctorsControllers.getAllDoctors);
router.get('/getDoctorById/:id', Validator.verifyToken, doctorsControllers.getDoctorById);
router.put('/updateDoctor/:id', Validator.verifyToken, doctorsControllers.updateDoctor);
router.delete('/deleteDoctor/:id', Validator.verifyToken, doctorsControllers.deleteDoctor);

module.exports = router;