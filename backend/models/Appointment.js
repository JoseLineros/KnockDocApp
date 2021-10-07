const { Schema, model } = require('mongoose')

const userSchema = new Schema({
    date: { type: String, required: true },
    doctorId: { type: String, required: true },
    doctorName: { type: String, required: false },
    userId: { type: String, required: true },
    userName: { type: String, required: false },
    ips: { type: String, required: false },
    specialty: { type: String, required: true },
    location: { type: String, required: false },
    status: { type: String, required: false }
},{
    timestamps: true,
    versionKey: false
})

module.exports = model('appointment', userSchema) //🔸