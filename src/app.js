'use strict';

var express = require('express');
var router = require('./api');

var app = express();
var port = 3000;

app.use("/",express.static('public'));



app.use('/api',router);


app.listen(port,function(){
	console.log("The server is listening on port " + port + "!");
});