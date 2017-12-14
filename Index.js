//Declarando las librerias//
var express = require('express');
var fs = require('fs');
var request = require('request');
var cheerio = require('cheerio');
var app     = express();

 
//mongoose.connect('mongodb://darkdans:3212333222d@ds245755.mlab.com:45755/moviesapi');


//Donde se piden las variables de cada url, titulo, imagen,descripcion//
//app.get('/', function(req, res){
var getMovieDetall = function(url) {
    return new Promise((resolve, reject) => {
        request(url, function(error, response, html){
            if(!error){
                var $ = cheerio.load(html);
                const arr = []
            
                //Aqui toma la ubicacion donde estan los datos de la URL y tomara los campos del titulo, imagen, descripcion, etc.//
                $('.detailed').filter(function(){
                    const json = { title : "", image : "", release : "", description : "", genre : ""};
                    var data = $(this);       
                    title = data.title = data.children().eq(2).children().eq(1).text().trim();
                    image = data.image = data.children().eq(1).children().first().find('img').attr('src');
                    release = data.release = data.children().eq(2).children().eq(2).text().trim();   
                    description = data.description = data.children().eq(2).children().eq(5).text().trim();               
                    genre = data.genre = data.children().eq(2).children().eq(7).text().trim();
                
                    json.title = title;
                    json.image = image;
                    json.release = release;
                    json.description = description;
                    json.genre = genre;
                    //console.log(json);
                    arr.push(json)
                })
                resolve(arr)
            }
        })
    });
}

//Inserto las URL del scrapper//
const url_comedy = 'http://www.imdb.com/genre/comedy?ref_=rlm_gnr';
/*
const url_drama = 'http://www.imdb.com/genre/drama?ref_=rlm_gnr';
const url_horror = 'http://www.imdb.com/genre/horror?ref_=rlm_gnr';
const url_action = 'http://www.imdb.com/genre/action?ref_=rlm_gnr';
const url_thriller = 'http://www.imdb.com/genre/thriller?ref_=rlm_gnr';
const url_mystery = 'http://www.imdb.com/genre/mystery?ref_=rlm_gnr';
*/



/*
getMovieDetall(url_comedy).then(result =>{
    //Lineas de codigo para guardar el contenido JSON en archivo.json//
    const content = JSON.stringify(result);  
    fs.writeFile("comedia.json", content, 'utf8', function (err) {
        if (err) {
            return console.log(err);
        }
        console.log("El archivo comedia ha sido salvado");
    });
});
*/


getMovieDetall(url_comedy).then(result =>{
    const content = JSON.stringify(result);  
    
     
});








//    res.json(json);
//Lineas de codigo para producirlo en el servidor de manera local//
//app.listen('8081')
//console.log('Magic happens on port 8081');
//exports = module.exports = app;

