var config = require('../util/config');
var endpoint = require('../util/endpoint')

function getAllCategories(callback) {
    var query = config.infoCode.categories;
    endpoint.getEndPointResponse(query, (data)=>{
        callback(data);
    });
}

var getCityInfoByLatLon = (lat, lon, callback) => {
    var query = config.infoCode.cities;
    var param1 = lat;
    var param2 = lon;
    var finalQuery = query.concat("?", "lat=", param1,"&lon=", param2);
    endpoint.getEndPointResponse(finalQuery, (data)=>{
        callback(data);
    });
}

var getCityInfoByCityIds = (array, callback) => {
    var query = config.infoCode.cities;
    var cities = encodeURIComponent(array.toString());
    var finalQuery = query.concat("?", "city_ids=", cities);
    endpoint.getEndPointResponse(finalQuery, (data)=>{
        callback(data);
    });
}

var getCityInfoByCityName = (city, callback) => {
    var query = config.infoCode.cities;
    city = encodeURIComponent(city);
    var finalQuery = query.concat("?", "q=", city);
    endpoint.getEndPointResponse(finalQuery, (data)=>{
        callback(data);
    });
}

var getCollectionsById = (city_id, callback) => {
    var query = config.infoCode.collections;
    var finalQuery = query.concat("?", "city_id=", city_id);
    endpoint.getEndPointResponse(finalQuery, (data)=>{
        callback(data);
    });
}

var getCollectionsByLatLon = (lat, lon, callback) => {
    var query = config.infoCode.collections;
    var param1 = lat;
    var param2 = lon;
    var finalQuery = query.concat("?", "lat=", param1,"&lon=", param2);
    endpoint.getEndPointResponse(finalQuery, (data)=>{
        callback(data);
    });
}


exports.getAllCategories = getAllCategories;

exports.getCityInfoByCityIds = getCityInfoByCityIds;
exports.getCityInfoByCityName = getCityInfoByCityName;
exports.getCityInfoByLatLon = getCityInfoByLatLon;

exports.getCollectionsById = getCollectionsById;
exports.getCollectionsByLatLon = getCollectionsByLatLon;