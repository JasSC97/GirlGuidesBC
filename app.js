const express = require('express');
const routes = require('./routes');
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

//All routing is handled by the below code.
app.use('/', routes);

//All static css, js, and images
app.use('/css', express.static(path.join(__dirname, 'css')));
app.use('/js', express.static(path.join(__dirname, 'js')));
app.use('/image', express.static(path.join(__dirname, 'image')));



//Applying the express middleware to keystone's middleware
keystone.set('routes', app);

//Applying database models to keystone
keystone.import('models');

//hosting the app
keystone.start();
