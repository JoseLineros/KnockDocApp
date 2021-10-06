const express = require('express');
const router = express.Router()

//Importando controllers
const appointmentControllers = require('../controllers/appointment.controller')

// Verify Token
const Validator = require('../middlewares/verifyToken');


router.post('/create', appointmentControllers.create);
router.get('/getAll', appointmentControllers.getAll);
router.get('/getById/:idAppo', appointmentControllers.getById);
router.put('/update/:idAppo', appointmentControllers.update);
router.delete('/delete/:idAppo', appointmentControllers.delete)
router.get('/getAppointmentByUser', Validator.verifyToken,appointmentControllers.getAppointmentByUser)

module.exports = router