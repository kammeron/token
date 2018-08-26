const mongoose = require('mongoose'),
	tokens = require('../controllers/tokens.js');
var path = require('path');
module.exports = function(app){
	app.get('/', function(request, response){
		response.render('index');
	});
	// users
	app.get('/users', (request, response) => {
		tokens.getUsers(request, response);
	});
	app.post('/users', (request, response) => {
		tokens.createUser(request, response);
	});
	app.post('/users/login', (request, response) => {
		tokens.loginUser(request, response);
	})
	app.get('/users/:id', (request, response) => {
		tokens.getUserById(request, response);
	});
	//
	app.get('/email/:email', (request, response) => {
		tokens.getUserByEmail(request, response);
	});
	app.put('/users/:id', (request, response) => {
		tokens.updateUser(request, response);
	});
	app.delete('/users/:id', (request, response) => {
		tokens.deleteUser(request, response);
	});
	// posts
	app.get('/posts', (request, response) => {
		tokens.getPosts(request, response);
	});
	app.post('/posts', (request, response) => {
		tokens.createPost(request, response);
	});
	app.get('/posts/:id', (request, response) => {
		tokens.getPostById(request, response);
	});
	app.get('/postedby/:id', (request, response) => {
		tokens.getPostedById(request, response);
	});
	app.put('/posts/:id', (request, response) => {
		tokens.updatePost(request, response);
	});
	app.delete('/posts/:id', (request, response) => {
		tokens.deletePost(request, response);
	});
	app.all("*", (request,response,next) => {
		response.sendFile(path.resolve("./public/dist/public/index.html"))
	});
}
