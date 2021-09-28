//Models
const Doctor = require('../models/Doctor');
const jwt = require('jsonwebtoken');

const doctorsControllers = {};

doctorsControllers.message = (req, res) => {
    console.log(req.decoded);
    res.status(200).json({ message: 'Esto es un mensaje', doctor: req.decoded });
};



doctorsControllers.signin = async (req, res) => {
    const { email, password } = req.body;
    const doctor = await Doctor.findOne({ email });
    if (!doctor) {
        res.status(401).json({ message: 'El email no existe' }); // No encuentra el email
    }
    if (doctor.password !== password) {
        return res.status(401).json({ message: 'Clave incorrecta' }); // No es la contraseña
    }
    //! JSON WEB TOKEN
    const token = await jwt.sign({ _id: doctor._id, email: doctor.email, role: doctor.role }, 'pato');
    //! Fin
    res.status(200).json({ message: 'Estas logeado', token });
};


doctorsControllers.createDoctor = async (req, res) => {
    try {
        const { identificacion, nombre, apellidos, fechaNacimiento, ciudad, direccion, celular, ipsAsociado, tp, email, password, role } = req.body;
        //! Validadcion de email
        const doctorExists = await Doctor.findOne({ email });
        if (doctorExists) {
            res.status(400).json({ message: 'email ya existe' });
            return;
        }
        const DoctorDNI = await Doctor.findOne({ identificacion });
        if (DoctorDNI) {
            res.status(400).json({ message: 'identificacion ya existe' });
            return;
        }

        const newDoctor = new Doctor({ identificacion, nombre, apellidos, fechaNacimiento, ciudad, direccion, celular, ipsAsociado, tp, email, password, role });
        const doctor = await newDoctor.save();
        if (doctor) {
            //! JSON WEB TOKEN
            const token = await jwt.sign({ _id: doctor._id, email: doctor.email, role: doctor.role }, 'pato');
            //! Fin
            res.status(201).json({ message: 'Doctor creado', doctor: newDoctor, token: token });
        } else {
            res.status(201).json({ message: 'error al crear doctor', newDoctor });
        }
    } catch (error) {
        res.status(201).json({ message: 'error', error });
        console.log(error);
    }
};

doctorsControllers.getAllDoctors = async (req, res) => {
    try {
        const doctors = await Doctor.find();
        if (doctors) res.status(201).json(doctors);
        else res.status(202).json({ message: 'Doctores no encontrados' });
    } catch (error) {
        res.status(400).json({ message: 'Error', error });
    }
};

doctorsControllers.getDoctorById = async (req, res) => {
    try {
        const id = req.params.id;
        const doctor = await Doctor.findById(id);
        console.log(doctor);
        if (doctor) {
            res.status(200).json({ message: 'Doctor encontrado', doctor });
        } else {
            res.status(202).json({ message: 'Doctor no encontrado' });
        }
    } catch (error) {
        res.status(400).json({ message: 'error', error });
        console.log(error);
    }
};

doctorsControllers.updateDoctor = async (req, res) => {
    try {
        const idDoctor = req.params.id;
        const doctorUpdated = await Doctor.findByIdAndUpdate(idDoctor, req.body, { new: true });
        if (doctorUpdated) {
            res.status(201).json({ message: 'Doctor actualizado', doctorUpdated });
        } else {
            res.status(202).json({ message: 'Doctor no actualizado' });
        }
    } catch (error) {
        res.status(400).json({ message: 'error', error });
        console.log(error);
    }
};

doctorsControllers.deleteDoctor = async (req, res) => {
    try {
        const id = req.params.id;
        const doctordeleted = await Doctor.findByIdAndDelete(id);
        if (doctordeleted) {
            res.status(200).json({ message: 'Doctor eliminado', doctordeleted });
        }
    } catch (error) {
        console.log(error);
        res.status(400).json({ message: 'Error', error });
    }
};

module.exports = doctorsControllers;
