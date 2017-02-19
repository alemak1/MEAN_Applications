
'use strict';

var Todo = require('./models/todo.js');

var todos = [
	'Exchange RMBs for US Dollars',
	'Exchange HK dollars for US Dollars',
	'Exchange NT Dollars for HK Dollars',
	'Exchange RMBs for HK Dollars'

]

todos.forEach(function(todo,index){
	Todo.find({'name':todo},function(err,todos){
		if(!err && !todos.length){
			Todo.create({completed:false,name:todo});
		}
	})
});