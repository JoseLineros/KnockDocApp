const express = require('express');
const router = express.Router();

//importando controllers
const statusControllers = require('../controllers/status.controller')

router.post('/createStatus', statusControllers.createStatus);
router.get('/getAllStatus', statusControllers.getAllStatus);
router.get('/getStatusById/:id', statusControllers.getStatusById) //Este Id viene del req.params.id del controller
router.put('/updateStatus/:id', statusControllers.updateStatus)
router.delete('/deleteStatus/:id', statusControllers.deleteStatus);

module.exports = router;
