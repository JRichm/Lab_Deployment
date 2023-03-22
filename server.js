const express = require('express');

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
    res.sendFile(__dirname +'/public/index.html');
});

app.get('/css', (req, res) => {
    res.sendFile(__dirname + '/public/style.css');
});

app.get('/js', (req, res) => {
    res.sendFile(__dirname + '/public/index.js');
});

app.listen(5150, () => console.log(`app is up on 5150`));