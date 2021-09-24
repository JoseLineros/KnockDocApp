const mongoose = require('mongoose');

// const URL = 'mongodb://localhost:27017/knockDoc';
const URL = 'mongodb+srv://admin:Admin123@cluster0.pyeql.mongodb.net/empresaDB?retryWrites=true&w=majority';

mongoose
    .connect(URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then((db) => console.log('Conectado Correctamente a la BD :)'))
    .catch((err) => console.log(err));

module.exports = mongoose;
