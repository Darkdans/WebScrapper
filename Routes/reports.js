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
	Accion.find({}, 'title', function(err, Accion){
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


















/*

var PeliculasSchema = mongoose.Schema({
	pelicula: String
});

var Pelicula = mongoose.model('Pelicula', PeliculasSchema);

router.route('/peliculas').get(function(req, res){
	Cine.find({}, 'titulo', function(err, cines){
		if(err) return console.error(err);
		res.json(cines);
		console.log(cines);
	})
})

router.route('/peliculas/:peliculaID').get(function(req, res){
	console.log(req.params.peliculaID)
	Cine.findById(req.params.peliculaID, function(err, cines){
		if(err) return console.error(err);
		res.json(cines);
		console.log(cines);
	})
})

var PerroSchema = mongoose.Schema({
	name: String,
	raza: String,
	edad: String
});
var Perro = mongoose.model('Perro', PerroSchema);
router.route('/perros').get(function(req, res){
	console.log('si se metio');
	Perro.find(function(err, perros){
	if(err) return console.error(err);
	res.json(perros);
	console.log(perros);
})
})
router.route('/reports').get(function(req, res){
	var content;
			fs.readFile('./Routes/output.json', 'utf-8', function(err, data){
				content = data;
		 	console.log('File successfuly read!');
			res.json(content);
		});
});
router.route('/reports/:id').get(function(req, res){
	res.json({id: 0});
})*/



module.exports = router; 