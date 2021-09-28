const { Schema, model } = require('mongoose');

const specialtySchema = new Schema(
    {
        identificacion: { type: String, required: true },
        specialtyName: { type: String, required: true },
    },
    {
        timestamps: true,
        versionKey: false,
    }
);
module.exports = model('specialty', specialtySchema);
