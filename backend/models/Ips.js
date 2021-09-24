const { Schema, model } = require('mongoose');

const ipsSchema = new Schema(
    {
        identificacion: { type: String, require: true },
        razonSocial: { type: String, require: true },
    },
    {
        timestamps: true,
        versionKey: false,
    }
);
module.exports = model('ips', ipsSchema);
