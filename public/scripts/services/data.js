'use strict';

angular.module('todoListApp')
.service('dataService', function($http, $q) {
  this.getTodos = function(cb) {
    $http.get('/mock/todos.json').then(cb);
  };
  
  this.deleteTodo = function(todo) {
    console.log("I deleted the " + todo.name + " todo!");
  };
  
  this.saveTodos = function(todos) {
    console.log("I saved " + todos.length + " todos!");
    var queue = [];
    todos.forEach(function(todo){
    	var request;
    	if(!todo._id){
    		request = $http.post('/api/todos',todo);
    	}
    	queue.push(request);
    });
    $q.all(queue).then(function(results){
    	console.log("I saved " + todos.length + " todos!");
    });
  };
  
});
