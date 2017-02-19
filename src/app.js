'use strict';

var express = require('express');

var app = express();
var port = 3000;

app.listen(port,function(){
	console.log("The server is listening on port " + port + "!");
});