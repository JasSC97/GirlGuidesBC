const routes = require('express').Router();
const express = require('express');
const app = express();
const path = require('path');
const static = require('./static');


app.use('', static);
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../index.html'));
});


module.exports = app;
