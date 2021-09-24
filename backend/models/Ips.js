const { Schema, model } = require('mongoose');

const ipsSchema = new Schema(
    {
        identificacion: { type: String, required: true },
        razonSocial: { type: String, required: true },
    },
    {
        timestamps: true,
        versionKey: false,
    }
);
module.exports = model('ips', ipsSchema);
