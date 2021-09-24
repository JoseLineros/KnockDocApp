//Models
const Ips = require('../models/Ips');
const jwt = require('jsonwebtoken');

const ipsControllers = {};

ipsControllers.createIps = async (req, res) => {
    try {
        const { identificacion, razonSocial } = req.body;

        //! Validaciones
        const IpsExistsID = await Ips.findOne({ identificacion });
        if (IpsExistsID) {
            res.status(400).json({ message: 'IPS ya existe con ese ID' });
            return;
        }

        const IpsExistsName = await Ips.findOne({ razonSocial });
        if (IpsExistsName) {
            res.status(400).json({ message: 'IPS ya existe con ese nombre' });
            return;
        }

        const newIps = new Ips({ identificacion, razonSocial });
        const ips = await newIps.save();
        if (ips) {
            res.status(201).json({ message: 'IPS creado', ips: newIps });
        } else {
            res.status(201).json({ message: 'error al crear ips', newIps });
        }
    } catch (error) {
        res.status(201).json({ message: 'error', error });
        console.log(error);
    }
};

ipsControllers.getAllIps = async (req, res) => {
    try {
        const ipsAll = await Ips.find();
        if (ipsAll) res.status(201).json(ipsAll);
        else res.status(202).json({ message: 'IPSs no encontradas' });
    } catch (error) {
        res.status(400).json({ message: 'Error', error });
    }
};

ipsControllers.getIpsById = async (req, res) => {
    try {
        const id = req.params.id;
        const ips = await Ips.findById(id);
        console.log(ips);
        if (ips) {
            res.status(200).json({ message: 'Ips encontrado', ips });
        } else {
            res.status(202).json({ message: 'Ips no encontrado' });
        }
    } catch (error) {
        res.status(400).json({ message: 'error', error });
        console.log(error);
    }
};

ipsControllers.updateIps = async (req, res) => {
    try {
        const idIps = req.params.id;
        const ipsUpdated = await Ips.findByIdAndUpdate(idIps, req.body, { new: true });
        if (ipsUpdated) {
            res.status(201).json({ message: 'Ips actualizada', ipsUpdated });
        } else {
            res.status(202).json({ message: 'Ips no actualizada' });
        }
    } catch (error) {
        res.status(400).json({ message: 'error', error });
        console.log(error);
    }
};

ipsControllers.deleteIps = async (req, res) => {
    try {
        const id = req.params.id;
        const ipsdeleted = await Ips.findByIdAndDelete(id);
        if (ipsdeleted) {
            res.status(200).json({ message: 'Ips eliminada', ipsdeleted });
        }
    } catch (error) {
        console.log(error);
        res.status(400).json({ message: 'Error', error });
    }
};

module.exports = ipsControllers;
