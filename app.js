var categories = require('./common/categories');
var collections = require('./common/collections');
var cities = require('./common/cities');
var cuisines = require('./common/cuisines');
var est = require('./common/establishments');
var geocode = require('./common/geocode');

var express = require('express');
var app = express();

app.get('/', (req,res)=>{
    res.redirect('/getAllCategories');
});

app.get('/getAllCategories', (req, res) => {
    categories.getAllCategories((data)=>{
        res.send(data);
    });
});

app.get('/getCityInfoByLatLon/:lat/:lon', (req, res) => {
    //let lat = 12.956370;
    //let lon = 77.695061;
    let lat = req.params.lat;
    let lon = req.params.lon;
    
    cities.getCityInfoByLatLon(lat, lon, (data)=>{
        res.send(data);
    });
});

app.get('/getCityInfoByCityIds/:city_id', (req, res) => {
    let city_id = encodeURIComponent(req.params.city_id);
    cities.getCityInfoByCityIds(city_id, (data)=>{
        res.send(data);
    });
});

app.get('/getCityInfoByCityName/:city_name', (req, res) => {
    let city_name = encodeURIComponent(req.params.city_name);
    cities.getCityInfoByCityName(city_name, (data)=>{
        res.send(data);
    });
});

app.get('/getCollectionsByCityId/:city_id', (req, res) => {
    let city_id = encodeURIComponent(req.params.city_id);
    collections.getCollectionsById(city_id, (data)=>{
        res.send(data);
    });
});

app.get('/getCollectionsByLatLon/:lat/:lon', (req, res) => {
    let lat = req.params.lat;
    let lon = req.params.lon;
    collections.getCollectionsByLatLon(lat, lon, (data)=>{
        res.send(data);
    });
});

app.listen(process.env.PORT || 1337, () => {
    console.log("Server running on port");
});