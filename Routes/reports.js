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
	title: String
});
 
var Accion = mongoose.model('accion', AccionSchema, 'accion');

router.route('/accion').get(function(req, res){
	Accion.find({}, , function(err, Accion){
		if(err) return console.error(err);
		res.json(Accion);
		console.log(Accion);
	})
})

//Seccion de comedia//
var ComediaSchema = mongoose.Schema({
	title: String
});
 
var Comedia = mongoose.model('comedia', ComediaSchema, 'comedia');

router.route('/comedia').get(function(req, res){
	Comedia.find({}, 'title', function(err, Comedia){
		if(err) return console.error(err);
		res.json(Comedia);
		console.log(Comedia);
	})
})

module.exports = router; 