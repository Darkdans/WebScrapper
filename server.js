//Declaración de librerias//
var express = require('express');
var bodyParser = require('body-parser');
var mogoose = require('mongoose');
var reports = require('./Routes/reports');
var app = express();


app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use('/api', reports);


var port  = process.env.PORT || 3000;

app.use(function (req, res, next) {
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Headers", "Authorization,Origin, X-Requested-With, Content-Type, Accept");
	next();
});
 

app.listen(port);
console.log('Server listening in the port: ' +port);