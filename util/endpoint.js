var config = require('./config');
var https = require('https');

function getEndPointResponse(query, callback) {
    let options = {
        host: config.base,
        path: config.path + query,
        method: config.GET,
        headers: {
            "Content-Type": "application/json",
            "user-key": config.key
        }
    };
    getResponse(options, (res)=>{
        callback(res);
    });
    
}


function getResponse(endpoint, callback) {

    var res = "";
    https.request(endpoint, function(res){
        var response = "";
        res.on('data', function(data){
            response += data;
        });

        res.on('end', function(){
            console.log("end");
            callback(response);
        });

        res.on('error', function(err){
            console.log("Error Ocurred" + err);
        });
    }).end();
}

exports.getEndPointResponse = getEndPointResponse;


