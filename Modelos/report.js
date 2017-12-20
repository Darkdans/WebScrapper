var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var reportSchema = new Schema({
	tittle: String, 
	image: String,
	release: String,
	description: String
});

module.exports = mongoose.model('Report', reportSchema);