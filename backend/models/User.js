const { Schema, model } = require('mongoose');

const userSchema = new Schema(
    {
        //!Users
        identificacion: { type: String, required: true },
        nombre: { type: String, required: true },
        apellidos: { type: String, required: true },
        fechaNacimiento: { type: String, required: true },
        ciudad: { type: String, required: true },
        direccion: { type: String, required: true },
        celular: { type: String, required: true },
        email: { type: String, required: true },
        password: { type: String, required: true },
        role: { type: Number, required: true },
        //!Doctor 
        ipsAsociado: {type: String, required: false},
        especialidad: {type: String, required: false},
        tp: {type: String, required: false},
    },
    {
        timestamps: true,
        versionKey: false,
    }
);
module.exports = model('users', userSchema);
