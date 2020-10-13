const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
	title: {
		type: String,
		required: true
	},
	imageUrl: {
		type: String,
		required: true
	},
	content: {
		type: String,
		required: true
	},
	creator: {
		type: Object,
		require: true
	}
}, 
{
	timestamps: true
})

module.exports = mongoose.model('User', userSchema);