var config = require('../util/config');
var endpoint = require('../util/endpoint')

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

exports.getCollectionsById = getCollectionsById;
exports.getCollectionsByLatLon = getCollectionsByLatLon;