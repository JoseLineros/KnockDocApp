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

app.use('/users', require('./routes/user.routes'));
app.use('/ips', require('./routes/ips.routes'));
app.use('/auth', require('./routes/auth.routes'));

app.listen(port, () => {
    console.log(`App listening on port ${port}`);
});
