const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*'); // to enable calls from every domain 
    res.setHeader('Access-Control-Allow-Methods', 'OPTIONS, GET, POST, PUT, PATCH, DELETE'); // allowed actiosn
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');

    if (req.method === 'OPTIONS') {
        return res.sendStatus(200); // to deal with chrome sending an extra options request
    }

    next(); // call next middlewer in line
});

app.listen(3001);

mongoose.connect(`mongodb://localhost:27017/student-managment`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

app.use('/user', require('./modules/users/users.router').router);
app.use('/student', require('./modules/student/student.router').router);