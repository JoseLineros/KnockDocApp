const mongoose = require('mongoose');

const URL = 'mongodb://localhost:27017/knockDoc';

mongoose
    .connect(URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then((db) => console.log('Conectado Correctamente a la BD :)'))
    .catch((err) => console.log(err));

module.exports = mongoose;
