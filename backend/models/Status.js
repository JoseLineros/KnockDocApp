const { Schema, model } = require('mongoose')

const statusSchema = new Schema({
    statusId: { type: String, required: true },
    statusName: { type: String, required: true },
},{
    timestamps: true,
    versionKey: false
})

module.exports = model('status', statusSchema, 'status') 