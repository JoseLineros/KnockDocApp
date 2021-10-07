//Llamando models
const Status = require('../models/Status')
const jwt = require('jsonwebtoken');

const statusControllers = {}

statusControllers.createStatus = async (req, res) => {
    try {
        const { statusId, statusName } = req.body; //deconstruyendo
        // id validation
        const statusExistsID = await Status.findOne({ statusId });
        if (statusExistsID) {
            res.status(400).json({ message: 'Estado ya existe con ese ID' });
            return;
        }

        //Name validation
        const statusExistsName = await Status.findOne({ statusName });
        if (statusExistsName) {
            res.status(400).json({ message: 'Estado ya existe con ese nombre' });
            return;
        }

        //New Status
        const newStatus = new Status({ statusId, statusName })
        const status = await newStatus.save()
        if(status){ //Si status se pudo guardar...
            res.status(201).json({message: 'Estado creado', status: newStatus})
        } else { //Si no se creó
            res.status(202).json({message: 'Error en la creación del estado'}, newStatus)
        }
    } catch (error) {
        res.status(400).json({message: 'Error', error})
        console.log(error);
    }
}

//all Status
statusControllers.getAllStatus = async (req, res) => {
    try {
        const statusAll = await Status.find()
        if (statusAll) res.status(201).json(statusAll)
        else res.status(202).json({ message: 'Estados no encontrados' });
    } catch (error) {
    res.status(400).json({ message: 'Error', error });
    }
}

statusControllers.getStatusById = async (req, res) => {
    try {
        const id = req.params.id;
        const status = await Status.findById(id);
        console.log(status);

        if (status) {
            res.status(200).json({ message: 'Estado encontrado', status });
        } else {
            res.status(202).json({ message: 'Estado no encontrado' });
        }
    } catch (error) {
        res.status(400).json({ message: 'error', error });
        console.log(error);
    }
}

statusControllers.updateStatus = async (req, res) => {
    try {
        const idStatus = req.params.id
        const updateStatus = await Status.findByIdAndUpdate(idStatus, req.body, {new: true})

        if (updateStatus) res.status(201).json({message: 'Estado actualizado', updateStatus})
        else res.status(202).json({ message: 'Estados no existe' });
    } catch (error) {   
        console.log(error);
        res.status(400).json({message: "Error al actualizar el estado"})
    }
}

statusControllers.deleteStatus = async (req, res) => {
    try {
        const id = req.params.id
        const statusDeleted = await Status.findByIdAndDelete(id);
        if(statusDeleted) res.status(201).json({message: 'Estado borrado', statusDeleted})
    } catch (error) {
        console.log(error);
        res.status(400).json({message: 'error', error})
    }
}

//Exportando a routes
module.exports = statusControllers;