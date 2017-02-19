'use strict';

var express = require('express');

var app = express();
var port = 3000;

app.use("/",express.static('public'));

var router = express.Router();

router.get("/todos",function(req,res){
	res.json({todos:[]});
});

app.use('/api',router);


app.listen(port,function(){
	console.log("The server is listening on port " + port + "!");
});