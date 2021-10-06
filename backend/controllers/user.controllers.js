//Models
const User = require('../models/User');
const jwt = require('jsonwebtoken');
const { use } = require('../routes/auth.routes');

const usersControllers = {};

usersControllers.message = (req, res) => {
    console.log(req.decoded);
    res.status(200).json({ message: 'Esto es un mensaje', user: req.decoded });
};

// usersControllers.signup = async (req, res) => {
// 	const { email, passsword } = req.body;
// 	const newUser = new User({ email, passsword });
// 	const registered = await newUser.save();
// 	if (registered) {
// 		//! JSON WEB TOKEN
// 		const token = await jwt.sign({_id: user._id,email: user.email, role: user.role},'pato');
// 		//! Fin
// 		res.status(201).json({message: 'User has been created',token: token});
// 	} else {
// 		res.status(202).json({ message: 'error' });
// 	}
// };

usersControllers.signin = async (req, res) => {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) {
        res.status(401).json({ message: 'El email no existe' }); // No encuentra el email
    }
    if (user.password !== password) {
        return res.status(401).json({ message: 'Clave incorrecta' }); // No es la contraseña
    }
    //! JSON WEB TOKEN
    const token = await jwt.sign({ _id: user._id, email: user.email, role: user.role, userId:user.identificacion }, 'pato');
    //! Fin
    res.status(200).json({ message: 'Estas logeado', token });
};

usersControllers.createUser = async (req, res) => {
    try {
        const { identificacion, nombre, apellidos, fechaNacimiento, ciudad, direccion, celular, email, password, role, tp, especialidad, ipsAsociado } = req.body;
        //! Validadcion de email
        const userExists = await User.findOne({ email });
        if (userExists) {
            res.status(400).json({ message: 'email ya existe' });
            return;
        }
        const userDNI = await User.findOne({ identificacion });
        if (userDNI) {
            res.status(400).json({ message: 'identificacion ya existe' });
            return;
        }

        const newUser = new User({ identificacion, nombre, apellidos, fechaNacimiento, ciudad, direccion, celular, email, password, role, tp, especialidad, ipsAsociado });
        const user = await newUser.save();
        if (user) {
            //! JSON WEB TOKEN
            const token = await jwt.sign({ _id: user._id, email: user.email, role: user.role, tp:user.tp, especialidad:user.especialidad, ipsAsociado:user.ipsAsociado }, 'pato');
            //! Fin
            res.status(201).json({ message: 'Usuario creado', user: newUser, token: token });
        } else {
            res.status(201).json({ message: 'error al crear usuario', newUser });
        }
    } catch (error) {
        res.status(201).json({ message: 'error', error });
        console.log(error);
    }
};

usersControllers.getAllUsers = async (req, res) => {
    try {
        const users = await User.find({role: 2});
        if (users) res.status(201).json(users);
        else res.status(202).json({ message: 'Usuarios no encontrados' });
    } catch (error) {
        res.status(400).json({ message: 'Error', error });
    }
};

usersControllers.getAllDoctors = async (req, res) => {
    try {
        const users = await User.find({role: 1});
        if (users) res.status(201).json(users);
        else res.status(202).json({ message: 'Doctores no encontrados' });
    } catch (error) {
        res.status(400).json({ message: 'Error', error });
    }
};

usersControllers.getAllDoctorsNoRole = async (req, res) => {
    try {
        const users = await User.find({role: 1});
        if (users) res.status(201).json(users);
        else res.status(202).json({ message: 'Doctores no encontrados' });
    } catch (error) {
        res.status(400).json({ message: 'Error', error });
    }
};

usersControllers.getAllAdmins = async (req, res) => {
    try {
        const users = await User.find({role: 0});
        if (users) res.status(201).json(users);
        else res.status(202).json({ message: 'Users no encontrados' });
    } catch (error) {
        res.status(400).json({ message: 'Error', error });
    }
};

usersControllers.getUserById = async (req, res) => {
    try {
        const id = req.params.id;
        const user = await User.findById(id);
        console.log(user);
        if (user) {
            res.status(200).json({ message: 'Usuario encontrado', user });
        } else {
            res.status(202).json({ message: 'Usuario no encontrado' });
        }
    } catch (error) {
        res.status(400).json({ message: 'error', error });
        console.log(error);
    }
};

usersControllers.updateUser = async (req, res) => {
    try {
        const idUser = req.params.id;
        const userUpdated = await User.findByIdAndUpdate(idUser, req.body, { new: true });
        if (userUpdated) {
            res.status(201).json({ message: 'usuario actualizado', userUpdated });
        } else {
            res.status(202).json({ message: 'Usuario no actualizado' });
        }
    } catch (error) {
        res.status(400).json({ message: 'error', error });
        console.log(error);
    }
};

usersControllers.deleteUser = async (req, res) => {
    try {
        const id = req.params.id;
        const userdeleted = await User.findByIdAndDelete(id);
        if (userdeleted) {
            res.status(200).json({ message: 'usuario eliminado', userdeleted });
        }
    } catch (error) {
        console.log(error);
        res.status(400).json({ message: 'Error', error });
    }
};

module.exports = usersControllers;
