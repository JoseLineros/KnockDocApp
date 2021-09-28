//Llamando models
const specialty = require('../models/Specialty')
const jwt = require('jsonwebtoken');

const specialtyControllers = {}

specialtyControllers.createSpecialty = async (req, res) => {
    try {
        const { specialtyName } = req.body;

        //! Validaciones
        //ID
        const specialtyExistsID = await Specialty.findOne({ identificacion });
        if (SpecialtyExistsID) {
            res.status(400).json({ message: 'Especialidad ya existe con ese ID' });
            return;
        }

        //Name
        const SpecialtyExistsName = await Specialty.findOne({ specialtyName });
        if (SpecialtyExistsName) {
            res.status(400).json({ message: 'Especialidad ya existe con ese nombre' });
            return;
        }

        //Creacion
        const newSpecialty = new Specialty({ identificacion, specialtyName });
        const specialty = await newSpecialty.save();
        if (specialty) {
            res.status(201).json({ message: 'Especialidad creada', specialty: newSpecialty });
        } else {
            res.status(201).json({ message: 'error al crear especialidad', newSpecialty });
        }
    } catch (error) {
        res.status(201).json({ message: 'error', error });
        console.log(error);
    }
}

module.exports = specialtyControllers;