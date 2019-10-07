const express = require('express');
const app = express();

app.get('/about', (req, res) => {
    console.log("hello");
});


module.exports = app;