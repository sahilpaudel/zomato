var config = require('../util/config');
var endpoint = require('../util/endpoint')

// type of restaurants in a city or area

var getEstablishmentsByCityId = (city_id, callback) => {
    var query = config.infoCode.establishments;
    var finalQuery = query.concat("?", "city_id=", city_id);
    endpoint.getEndPointResponse(finalQuery, (data)=>{
        callback(data);
    });
}

var getEstablishmentsByLatLon = (lat, lon, callback) => {
    var query = config.infoCode.establishments;
    var param1 = lat;
    var param2 = lon;
    var finalQuery = query.concat("?", "lat=", param1,"&lon=", param2);
    endpoint.getEndPointResponse(finalQuery, (data)=>{
        callback(data);
    });
}

exports.getEstablishmentsByCityId = getEstablishmentsByCityId;
exports.getEstablishmentsByLatLon = getEstablishmentsByLatLon;