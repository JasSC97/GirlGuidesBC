const express = require('express');
const routes = require('./routes/.');
const path = require('path');
const bodyParser = require('body-parser');
const url = require('url');
var keystone = require('keystone');


const app = express();

const PORT = process.env.PORT || 8000;

keystone.init({
    'cookie secret': 'secure string goes here',
    'name': 'WCA Girl Guides',
    port: PORT,
    'user model': 'User',
    'auto update': true,
    'auth': true,
});


app.use('/', routes);
app.use('/css', express.static(path.join(__dirname, 'css')));
app.use('/js', express.static(path.join(__dirname, 'js')));




keystone.set('routes', app);
keystone.import('models');
keystone.start();
