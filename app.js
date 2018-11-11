var common = require('./common/common');

// common.getAllCategories();

// common.getCityInfoByCityIds(Array(3,4,5,6));
// common.getCityInfoByCityName("Canberra");
// common.getCityInfoByLatLon(12.956370, 77.695061);

// common.getCollectionsById(4);
// common.getCollectionsByLatLon(12.956370, 77.695061);

var express = require('express');
var app = express();

app.get('/', (req,res)=>{
    res.redirect('/getAllCategories');
});

app.get('/getAllCategories', (req, res) => {
    common.getAllCategories((data)=>{
        res.send(data);
    });
});

app.get('/getCityInfoByLatLon/:lat/:lon', (req, res) => {
    //let lat = 12.956370;
    //let lon = 77.695061;
    let lat = req.params.lat;
    let lon = req.params.lon;
    
    common.getCityInfoByLatLon(lat, lon, (data)=>{
        res.send(data);
    })
});

app.get('/getCityInfoByCityIds/:city_id', (req, res) => {
    let city_id = req.params.city_id;
    common.getCityInfoByCityIds(city_id, (data)=>{
        res.send(data);
    })
});

app.get('/getCityInfoByCityName/:city_name', (req, res) => {
    let city_name = encodeURIComponent(req.params.city_name);
    common.getCityInfoByCityName(city_name, (data)=>{
        res.send(data);
    })
});


app.listen(process.env.PORT || 1337, () => {
    console.log("Server running on port 3000");
});