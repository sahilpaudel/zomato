var config = require('../util/config');
var endpoint = require('../util/endpoint')

var getCuisinesByCityId = (city_id, callback) => {
    var query = config.infoCode.cuisines;
    var finalQuery = query.concat("?", "city_id=", city_id);
    endpoint.getEndPointResponse(finalQuery, (data)=>{
        callback(data);
    });
}

var getCuisinesByLatLon = (lat, lon, callback) => {
    var query = config.infoCode.cuisines;
    var param1 = lat;
    var param2 = lon;
    var finalQuery = query.concat("?", "lat=", param1,"&lon=", param2);
    endpoint.getEndPointResponse(finalQuery, (data)=>{
        callback(data);
    });
}

exports.getCuisinesByCityId = getCuisinesByCityId;
exports.getCuisinesByLatLon = getCuisinesByLatLon;