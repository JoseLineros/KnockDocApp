const express = require('express');
const router = express.Router();

// Import
const ipsControllers = require('../controllers/ips.controllers');

// Verify Token
const Validator = require('../middlewares/verifyToken');

// ROUTES
router.post('/createIps', Validator.verifyToken, ipsControllers.createIps);
router.get('/getAllIps', Validator.verifyToken, ipsControllers.getAllIps);
router.get('/getIpsById/:id', Validator.verifyToken, ipsControllers.getIpsById);
router.put('/updateIps/:id', Validator.verifyToken, ipsControllers.updateIps);
router.delete('/deleteIps/:id', Validator.verifyToken, ipsControllers.deleteIps);

module.exports = router;