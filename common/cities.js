var config = require('../util/config');
var endpoint = require('../util/endpoint')

var getCityInfoByLatLon = (lat, lon, callback) => {
    var query = config.infoCode.cities;
    var param1 = lat;
    var param2 = lon;
    var finalQuery = query.concat("?", "lat=", param1,"&lon=", param2);
    endpoint.getEndPointResponse(finalQuery, (data)=>{
        callback(data);
    });
}

var getCityInfoByCityIds = (city_ids, callback) => {
    var query = config.infoCode.cities;
    var finalQuery = query.concat("?", "city_ids=", city_ids);
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

exports.getCityInfoByCityIds = getCityInfoByCityIds;
exports.getCityInfoByCityName = getCityInfoByCityName;
exports.getCityInfoByLatLon = getCityInfoByLatLon;