var mongoose = require('mongoose');

var ItemSchema = new mongoose.Schema({
	type: String,
	name: String,
	img: String,
	permalink: String,
	description: String
});

module.exports = mongoose.model('Item', ItemSchema);