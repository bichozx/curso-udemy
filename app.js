'use strict'

var express = require('express');
var bodyParser = require('body-parser');

var app = express();


// Cargar Rutas


app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

// configurar CORS

// RUTAS
app.get('/pruebas' , (req, res) => {
    res.status(200).send({
        message: "bienvenido al curso"

    })
});

module.exports = app; 



