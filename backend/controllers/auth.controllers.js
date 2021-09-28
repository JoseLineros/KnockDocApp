const Auth = require('../models/Auth');

const authController = {};

// authController.signup = async (req, res) => {
//     const { email, passsword } = req.body;
//     const newUser = new User({ email, passsword });

//     const registered = await newUser.save();

//     if (registered) {
//         res.status(201).json({ message: 'User has been created ' });
//     } else {
//         res.status(202).json({ message: 'error' });
//     }
// };

authController.signin = async (req, res) => {
    const { email, password } = req.body;
    const auth = await Auth.findOne({ email });
    if (!auth) {
        res.status(401).json({ message: 'El email no existe' }); // No encuentra el email
    }
    if (auth.password !== password) {
        return res.status(401).json({ message: 'Clave incorrecta' }); // No es la contraseña
    }
    //! JSON WEB TOKEN
    const token = await jwt.sign({ _id: user._id, email: user.email, role: user.role }, 'pato');
    //! Fin
    res.status(200).json({ message: 'Estas logeado', token });
};

module.exports = authController;
