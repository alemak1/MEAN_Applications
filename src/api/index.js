'use strict';


var express = require('express');
var todos = require('../../mock/todos.json');


var router = express.Router();

router.get("/todos",function(req,res){
	res.json({todos:todos});
});

//TODO: Add a POST route to create new entries

//TODO: Add a PUT route to update existing entries

//TODO: Add a DELETE route to delete existing entries


module.exports = router;