'use strict';

var express = require('express');

var app = express();

var port = process.env.PORT || 3000;

app.use('/', function (req, res, next) {
    console.log(`Request URL: ${req.url}`);
    next();
});

app.use('/assets', express.static(__dirname + '/public'));

app.set('view engine', 'ejs');

app.listen(port);
