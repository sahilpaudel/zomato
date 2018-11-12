var config = require('../util/config');
var endpoint = require('../util/endpoint')

function getAllCategories(callback) {
    var query = config.infoCode.categories;
    endpoint.getEndPointResponse(query, (data)=>{
        callback(data);
    });
}

exports.getAllCategories = getAllCategories;