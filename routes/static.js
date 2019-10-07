const express = require('express');
const app = express();
const path = require('path');


app.use('/css', express.static(path.join(__dirname, '../css')));
app.use('/js', express.static(path.join(__dirname, '../js')));
app.use('/images', express.static(path.join(__dirname, '../images')));


module.exports = app;