const Appointment = require('../models/Appointment');
const User = require('../models/User');
const Ips = require('../models/Ips');
const Specialty = require('../models/Specialty');

const jwt = require('jsonwebtoken');
const appointmentControllers = {};

//Crear cita
appointmentControllers.create = async (req, res) => {
    try {
        const { date, doctorId, doctorName, userId, userName, ips, specialty, location, status } = req.body;

        //! Validar horario
        const appointmentExistDate = await Appointment.findOne({ date });
        // const appointmentDoctorExist = await Appointment.findOne({ doctorID });
        if (appointmentExistDate) {
            res.status(400).json({ message: 'Horario no disponible' });
            return;
        }

        const newAppointment = new Appointment({ date, doctorId, doctorName, userId, userName, ips, specialty, location, status });
        const appointment = await newAppointment.save();

        if (appointment) {
            res.status(201).json({ message: 'Nueva cita creada', appointment });
        } else {
            res.status(201).json({ message: 'Error al crear cita' });
        }
    } catch (error) {
        res.status(400).json({ message: 'error', error });
        console.log(error);
    }
};

//Todas las citas
appointmentControllers.getAll = async (req, res) => {
    try {
        const appointmentAll = await Appointment.find(); //🔸 appointment Viene del export del modelo
        if (appointmentAll) res.status(201).json(appointmentAll);
        else res.status(202).json({ message: 'Citas no encontradas' });
    } catch (error) {
        res.status(400).json({ message: 'error', error });
    }
};

//Citas por usuario
appointmentControllers.getAppointmentByUser = async (req, res) => {
    try {
        // console.log(req.decoded)
        const userId = req.decoded.userId;
        let appointmentAll = await Appointment.find({ userId });
        let result;

        for (let i in appointmentAll) {
            console.log(`aqui`);
            const ipsInfo = await Ips.findOne({ ips: appointmentAll[i].ips });
            const especialidadInfo = await Specialty.findOne({ specialty: appointmentAll[i].specialty });
            appointmentAll[i].ips = ipsInfo.razonSocial;
            appointmentAll[i].specialty = especialidadInfo.specialtyName;
            console.log(ipsInfo);
        }

        if (appointmentAll) res.status(201).json(appointmentAll);
        else res.status(202).json({ message: 'Citas no encontradas' });
    } catch (error) {
        console.log(error);
        res.status(400).json({ message: 'error', error });
    }
};

//Citas por doctor
appointmentControllers.getAppointmentByDoctor = async (req, res) => {
    try {
        // console.log(req.decoded)
        const doctorId = req.decoded.userId;
        const appointmentAll = await Appointment.find({ doctorId });

        const dataDoctor = await User.findOne({ identificacion: doctorId });
        console.log(dataDoctor);
        const { identificacion, nombre, apellidos } = dataDoctor;
        console.log(identificacion, nombre, apellidos);

        let result;
        for (let i in appointmentAll) {
            // const ipsInfo = await Ips.findOne({ identificacion: appointmentAll[i].ips });
            // const especialidadInfo = await Specialty.findOne({ specialtyId: appointmentAll[i].specialty });
            // console.log(ipsInfo, especialidadInfo);
            // appointmentAll[i].ips = ipsInfo.razonSocial;
            // appointmentAll[i].specialty = especialidadInfo.specialtyName;
            const ipsInfo = await Ips.findOne({ ips: appointmentAll[i].ips });
            const especialidadInfo = await Specialty.findOne({ specialty: appointmentAll[i].specialty });
            appointmentAll[i].ips = ipsInfo.razonSocial;
            appointmentAll[i].specialty = especialidadInfo.specialtyName;
            console.log(ipsInfo);
        }

        if (appointmentAll) res.status(201).json(appointmentAll);
        else res.status(202).json({ message: 'Citas no encontradas' });
    } catch (error) {
        console.log(error);
        res.status(400).json({ message: 'error', error });
    }
};

//Cita por ID
appointmentControllers.getById = async (req, res) => {
    try {
        const appointment = await Appointment.findById(req.params.idAppo);

        if (appointment) res.status(200).json({ message: 'Cita encontrada', appointment });
        else res.status(202).json({ message: 'Cita no encontrada' });
    } catch (error) {
        res.status(400).json({ message: 'Error', error });
    }
};

//Actualizando por Id
appointmentControllers.update = async (req, res) => {
    try {
        const idAppo = req.params.idAppo;
        const appointmentUpdated = await Appointment.findByIdAndUpdate(idAppo, req.body, { new: true });

        if (appointmentUpdated) res.status(201).json({ message: 'Cita actualizada', appointmentUpdated });
        else res.status(202).json({ message: 'Cita no actualizada' });
    } catch (error) {
        res.status(400).json({ message: 'error', error });
    }
};

//Delete
appointmentControllers.delete = async (req, res) => {
    try {
        const appointmentDeleted = await Appointment.findByIdAndDelete(req.params.idAppo);

        if (appointmentDeleted) res.status(200).json({ message: 'Cita borrada', appointmentDeleted });
    } catch (error) {
        res.status(400).json({ message: 'error', error });
    }
};

//Exportando a routes
module.exports = appointmentControllers;
