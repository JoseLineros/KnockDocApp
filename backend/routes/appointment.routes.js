const express = require('express');
const router = express.Router()

//Importando controllers
const appointmentControllers = require('../controllers/appointment.controller')

// Verify Token
const Validator = require('../middlewares/verifyToken');


router.post('/create', Validator.verifyToken, appointmentControllers.create);
router.get('/getAll', Validator.verifyToken, appointmentControllers.getAll);
router.get('/getById/:idAppo', Validator.verifyToken, appointmentControllers.getById);
router.put('/update/:idAppo', Validator.verifyToken, appointmentControllers.update);
router.delete('/delete/:idAppo', Validator.verifyToken, appointmentControllers.delete)

router.get('/getAppointmentByUser', Validator.verifyToken, appointmentControllers.getAppointmentByUser)
router.get('/getAppointmentByDoctor', Validator.verifyToken, appointmentControllers.getAppointmentByDoctor);
router.get('/getAppointmentNameUserForDoctor', Validator.verifyToken, appointmentControllers.getAppointmentNameUserForDoctor);

module.exports = router