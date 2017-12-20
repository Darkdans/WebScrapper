//Declaración de librerias//
var Report = require('./../Modelos/report');
var express = require('express');
var mongoose = require('mongoose');
var fs = require('fs');
mongoose.connect('mongodb://darkdans:3212333222d@ds245755.mlab.com:45755/moviesapi', {useMongoClient: true });

var router = express.Router();
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error;'));
db.once('open', function(){
});

//Seccion de Accion//
var AccionSchema = mongoose.Schema({
	tittle: String,
	image: String,
	release: String,
	description: String,
	genre: String
});
 
var Accion = mongoose.model('accion', AccionSchema, 'accion');
var Comedia  = mongoose.model('comedia',  ComediaSchema, 'comedia');
var Drama  = mongoose.model('drama',  DramaSchema, 'drama');
var Horror  = mongoose.model('horror ',  HorrorSchema, 'horror');
var Mystery  = mongoose.model('mystery ', MysterySchema, 'mystery');
var Thriller  = mongoose.model('thriller ',  ThrillerSchema, 'thriller');

router.route('/accion').get(function(req, res){
	Accion.find({}, function(err, Accion){
		if(err) return console.error(err);
		res.json(Accion);
		console.log(Accion);
	})
})

router.route('/comedia').get(function(req, res){
	Comedia.find({}, function(err, Comedia){
		if(err) return console.error(err);
		res.json(Comedia);
		console.log(Comedia);
	})
})

router.route('/drama').get(function(req, res){
	Drama.find({}, function(err, Drama){
		if(err) return console.error(err);
		res.json(Drama);
		console.log(Drama);
	})
})
router.route('/horror').get(function(req, res){
	Horror.find({}, function(err, Horror){
		if(err) return console.error(err);
		res.json(Horror);
		console.log(Horror);
	})
})
router.route('/mystery').get(function(req, res){
	Mystery.find({}, function(err, Mystery){
		if(err) return console.error(err);
		res.json(Mystery);
		console.log(Mystery);
	})
})
router.route('/thriller').get(function(req, res){
	Thriller.find({}, function(err, Thriller){
		if(err) return console.error(err);
		res.json(Thriller);
		console.log(Thriller);
	})
})
 
module.exports = router; 