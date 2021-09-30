const express = require('express');
const router = express.Router()

//Importando controllers
const appointmentControllers = require('../controllers/appointment.controller')

router.post('/create', appointmentControllers.create);
router.get('/getAll', appointmentControllers.getAll);
router.get('/getById/:idAppo', appointmentControllers.getById);
router.put('/update/:idAppo', appointmentControllers.update);
router.delete('/delete/:idAppo', appointmentControllers.delete)

module.exports = router