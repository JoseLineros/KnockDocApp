const { model, Schema } = require('mongoose');

const AuthSchema = new Schema(
    {
        email: { type: String, required: true },
        password: { type: String, required: true },
        role: { type: Number, required: true },
    },
    {
        timestamps: true,
        versionKey: false,
    }
);

module.exports = model('Auth', AuthSchema);
