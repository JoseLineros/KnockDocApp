const mongoose = require('mongoose');

// const URL = 'mongodb://localhost:27017/knockDoc';
const URL = 'mongodb+srv://admin:knockdoc123@cluster0.hiq8w.mongodb.net/knockDoc?retryWrites=true&w=majority';

mongoose
    .connect(URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then((db) => console.log('Conectado Correctamente a la BD :)'))
    .catch((err) => console.log(err));

module.exports = mongoose;
