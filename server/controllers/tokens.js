require('../config/mongoose.js');
User = require('../models/token.js').User;
Post = require('../models/token.js').Post;
module.exports = {
	loginUser: function(request, response){
		let info = request.body;
		console.log(info);
		User.findOne({email: info.email}, function(err, user) {
			if (err) {
				console.log('something went wrong with finding user by email')
			}
			else {
				if (info.password === user.password) {
					request.session.id = user._id;
					response.json({'status': 200});
					console.log(request.session.id)
				}
				else {
					response.json({'status':500, 'errors': 'incorrect password'});
				}
			}
		});
	},
	createUser: function(request, response){
		var user = new User({email: request.body.email, name: request.body.name, password: request.body.password});
		user.save(function(err, data){
			if (err) {
				console.log('something went wrong creating User')
			}
			else {
				request.session.id = data._id;
				response.send(data);
			}
		});
	},
	getUsers: function(request, response){
		User.find({}, function(err, data){
			if (err) {
				console.log('something went wrong getting Users')
			}
			else {
				response.send(data)
			}
		});
	},
	getUserById: function(request, response){
		User.findById(request.params.id, function(err, data){
			if (err) {
				console.log('something went wrong finding User by id')
			}
			else {
				response.send(data)
			}
		});
	},
	getUserByEmail: function(request, response){
		User.findOne({email: request.params.email}, function(err, user) {
			if (err) {
				console.log('something went wrong with finding user by email')
			}
			else {
				response.send(user)
			}
		});
	},
	deleteUser: function(request, response){
		User.findByIdAndDelete(request.params.id, function(err){
			if (err) {
				console.log('something went wrong with deleting user')
			}
		});
	},
	updateUser: function(request, response){
		User.update({_id: request.params.id}, request.body, function(err, users){
			if (err) {
				response.json({'status':500, 'errors': errs});
			}
			else {
				response.json({'status': 200, 'users': users});
			}
		});
	},
	getPosts: function(request, response){
		Post.find({}, function(err, data){
			if (err) {
				console.log('something went wrong getting Posts')
			}
			else {
				response.send(data)
			}
		});
	},
	createPost: function(request, response){
		var post = new Post(request.body);
		post.save(function(err, data){
			if (err) {
				console.log('something went wrong creating Post')
			}
			else {
				response.send(data)
			}
		});
	},
	getPostById: function(request, response){
		Post.findById(request.params.id, function(err, data){
			if (err) {
				console.log('something went wrong find Post by Id')
			}
			else {
				response.send(data)
			}
		})
	},
	getPostedById: function(request, response){
		Post.find({posted_by: request.params.id}, function(err, data){
			if (err) {
				console.log('something went wrong find Post by Id')
			}
			else {
				response.send(data)
			}
		})
	},
	updatePost: function(request, response){
		Post.update({_id: request.params.id}, request.body, function(err, users){
			if (err) {
				console.log('something went wrong updating Post')
			}
			else {
				response.send(data)
			}
		})
	},
	deletePost: function(request, response){
		Post.findByIdAndDelete(request.params.id, function(err){
			if (err) {
				console.log('something went wrong deleting post')
			}
		})
	}
}
