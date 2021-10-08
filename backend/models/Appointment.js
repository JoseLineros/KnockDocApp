const { Schema, model } = require('mongoose')

const userSchema = new Schema({
    date: { type: String, required: true },
    doctorId: { type: String, required: true },
    doctorName: { type: String, required: true },
    userId: { type: String, required: true },
    userName: { type: String, required: true },
    ips: { type: String, required: true },
    specialty: { type: String, required: true },
    location: { type: String, required: true },
    status: { type: String, required: true }
},{
    timestamps: true,
    versionKey: false
})

module.exports = model('appointment', userSchema) //🔸