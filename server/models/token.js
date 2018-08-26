let mongoose = require('mongoose');
let Schema = mongoose.Schema;
let CommentSchema = new Schema({
	content: {type: String, required: true},
}, {timestamps: true});
let TagSchema = new Schema({
	name: {type: String}
});
let PostSchema = new Schema({
	title: {type: String, required: true},
	content: {type: String, required: true},
	tags: [TagSchema],
	comments: [CommentSchema],
	posted_by: [Schema.Types.ObjectId]
}, {timestamps: true});
let UserSchema = new Schema({
	email: {type: String, unique: true, required: true},
	name: {type: String, unique: true, required: true, minlength: 1},
	password: {type: String, required: true},
	tokens: {type: Number, default: 0},
}, {timestamps: true});
let User = mongoose.model('User', UserSchema);
let Post = mongoose.model('Post', PostSchema);
let Comment = mongoose.model('Comment', CommentSchema);
module.exports = {
	User: User,
	Post: Post,
	Comment: Comment,
}
