'use strict';

var express = require('express');

var app = express();
var port = 3000;

app.use("/",express.static('public'));

app.get("/todos",function(req,res){
	res.send('These are the todos!');
});

app.listen(port,function(){
	console.log("The server is listening on port " + port + "!");
});