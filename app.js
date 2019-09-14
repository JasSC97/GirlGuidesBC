const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const url = require('url');


const app = express();



app.use('/css', express.static(path.join(__dirname, 'css')));
app.use('/js', express.static(path.join(__dirname, 'js')));



app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

const PORT = process.env.PORT || 8000;


app.listen(PORT, () => console.log(`Engines running on port ${PORT}`));