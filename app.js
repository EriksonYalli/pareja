const mysql = require('mysql2');
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const port = 3000;
const fs = require('fs');
const ip = '34.238.75.113';

app.use(express.static(path.join(__dirname)));
app.use(cors({origin: 'http://&{ip}:${port}'}));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'PAREJA', 'index.html'));
});

app.listen(port, () => {
    console.log(`Servidor escuchando en http://${ip}:${port}`);
});