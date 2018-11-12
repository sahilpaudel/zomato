var config = require('../util/config');
var endpoint = require('../util/endpoint')

var getGeocode = (lat, lon, callback) => {
    var query = config.infoCode.geocode;
    var param1 = lat;
    var param2 = lon;
    var finalQuery = query.concat("?", "lat=", param1,"&lon=", param2);
    endpoint.getEndPointResponse(finalQuery, (data)=>{
        callback(data);
    });
}

exports.getGeocode = getGeocode;