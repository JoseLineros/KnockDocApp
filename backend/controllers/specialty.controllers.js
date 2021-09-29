//Llamando models
const Specialty = require('../models/Specialty')
const jwt = require('jsonwebtoken');

const specialtyControllers = {}

specialtyControllers.createSpecialty = async (req, res) => {
    try {
        const { specialtyName, specialtyId } = req.body;

        //! Validaciones
        //ID
        const specialtyExistsID = await Specialty.findOne({ specialtyId });
        if (specialtyExistsID) {
            res.status(400).json({ message: 'Especialidad ya existe con ese ID' });
            return;
        }

        //Name
        const specialtyExistsName = await Specialty.findOne({ specialtyName });
        if (specialtyExistsName) {
            res.status(400).json({ message: 'Especialidad ya existe con ese nombre' });
            return;
        }

        //Creacion
        const newSpecialty = new Specialty({ specialtyId, specialtyName });
        const specialty = await newSpecialty.save();
        if (specialty) {
            res.status(201).json({ message: 'Especialidad creada', specialty: newSpecialty });
        } else {
            res.status(202).json({ message: 'error al crear especialidad', newSpecialty });
        }
    } catch (error) {
        res.status(400).json({ message: 'error', error });
        console.log(error);
    }
}

module.exports = specialtyControllers;