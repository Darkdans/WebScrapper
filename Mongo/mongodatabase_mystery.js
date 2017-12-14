var fs = require('fs');
var MongoClient = require('mongodb').MongoClient, assert = require('assert');

// Conexion URL
var url = 'mongodb://darkdans:3212333222d@ds245755.mlab.com:45755/moviesapi';

//Metodo de conexion para conectar al server
MongoClient.connect(url, function (err, db) {
    assert.equal(null, err);
    console.log("Conexion exitosa al servidor");

    var obj = JSON.parse(fs.readFileSync('../archivos_json/mystery.json', 'utf8'));
        insertDocuments(db, obj, function () {
        db.close();
    });
});

var insertDocuments = function (db, obj, callback) {
    // Obtener los documentos de la coleccion
    var collection = db.collection('mystery');
    // Inserccion de documentos
    collection.insertMany(obj, function (err, result) {
        console.log(collection);
        callback(result);
    });
}



