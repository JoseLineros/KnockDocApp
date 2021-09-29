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

//Todas las especialidades
specialtyControllers.getAllSpecialtys = async (req, res) => {
    try {
        const specialtysAll = await Specialty.find();
        if (specialtysAll) res.status(201).json(specialtysAll);
        else res.status(202).json({ message: 'Especialidades no encontradas' });
    } catch (error) {
        res.status(400).json({ message: 'Error', error });
    }
}

//Especialidad por ID
specialtyControllers.getSpecialtyById = async (req, res) => {
    try {
        const id = req.params.id;
        const specialty = await Specialty.findById(id);
        console.log(specialty);
        if (specialty) {
            res.status(200).json({ message: 'Especialidad encontrada', specialty });
        } else {
            res.status(202).json({ message: 'Especialidad no encontrada' });
        }
    } catch (error) {
        res.status(400).json({ message: 'error', error });
        console.log(error);
    }
}

//Actualizar esp
specialtyControllers.updateSpecialty = async (req, res) => {
    try {
        const idSpecialty = req.params.id;
        const updateSpecialty = await Specialty.findByIdAndUpdate(idSpecialty, req.body, {new: true})

        if(updateSpecialty) res.status(201).json({message: "especialidad actualizada", updateSpecialty})
        else res.status(202).json({message: "La especialidad no existe"})
    } catch (error) {
    console.log(error);
        res.status(400).json({message: "Error al actualizar la especialidad"})
    }
}

specialtyControllers.deleteSpecialty = async (req, res) => {
    try {
        const id = req.params.id;
        const specialtydeleted = await Specialty.findByIdAndDelete(id);
        if (specialtydeleted) {
            res.status(200).json({ message: 'Especialidad eliminada', specialtydeleted });
        }
    } catch (error) {
        console.log(error);
        res.status(400).json({ message: 'Error', error });
    }
};

//Exportando a routes
module.exports = specialtyControllers;