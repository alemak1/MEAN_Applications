'use strict';

var express = require('express');

var app = express();
var port = 3000;

app.use("/",express.static('public'));

app.get("/api/todos",function(req,res){
	res.json({todos:[]});
});

app.listen(port,function(){
	console.log("The server is listening on port " + port + "!");
});