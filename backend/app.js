const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const bodyParser = require('body-parser');

// DB
const db = require('./dbConnection');

// const port = 5000;
const port = process.env.PORT || 5000;
const app = express();

//middleware
app.use(express.json());
app.use(morgan('dev'));
app.use(cors());

app.use('/ips', require('./routes/ips.routes'));
app.use('/specialtys', require('./routes/specialty.routes'));
app.use('/doctors', require('./routes/doctor.routes'));
app.use('/users', require('./routes/user.routes'));
app.use('/auth', require('./routes/auth.routes'));

app.listen(port, () => {
    console.log(`App listening on port ${port}`);
});
