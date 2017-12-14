var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var reportSchema = new Schema({
	tittle: String, 
	description: String, 
	release: String
});

module.exports = mongoose.model('Report', reportSchema);