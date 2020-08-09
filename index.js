'use strict'

var mongoose = require('mongoose');
var app = require('./app');
var port = 3977;



mongoose.connect ('mongodb://localhost:27017/curso_udemy', (err, res) => {
    mongoose.promise=global.promise;
    if (err) {
        throw err;

    } else {

        console.log('la base datos esta bien...');

        app.listen(port, () => {
            console.log('el servidor es bueno.... http://localhost:'+port);
        })


    }

} );
