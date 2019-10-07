const routes = require('express').Router();
const express = require('express');
const app = express();
const path = require('path');


//All routes.
const static = require('./static');
const aboutPage = require('./about');
app.use(static);
app.use(aboutPage);

//Hosting the index page.
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../index.html'));
});


module.exports = app;
