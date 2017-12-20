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


router.route('/accion').get(function(req, res){
	Accion.find({}, function(err, Accion){
		if(err) return console.error(err);
		res.json(Accion);
		console.log(Accion);
	})
})


module.exports = router; 