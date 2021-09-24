const { Schema, model } = require('mongoose');

const userSchema = new Schema(
    {
        identificacion: { type: String, require: true },
        nombre: { type: String, require: true },
        apellidos: { type: String, require: true },
        fechaNacimiento: { type: String, require: true },
        ciudad: { type: String, require: true },
        direccion: { type: String, require: true },
        celular: { type: String, require: true },
        email: { type: String, require: true },
        password: { type: String, require: true },
        role: { type: String, require: true },
    },
    {
        timestamps: true,
        versionKey: false,
    }
);
module.exports = model('users', userSchema);
