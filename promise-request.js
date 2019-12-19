var request = require('request-promise');

request({
	"method":"GET", 
	"uri": "https://api.github.com/",
	"json": true,
	"headers": {
	  "User-Agent": "My little demo app"
	}
  }).then(console.log, console.log);

  /*
var Bluebird = require('bluebird')
var rp = require('request-promise');
 
var requestOptions = {
    method: 'GET',
    uri: 'https://dev77118.service-now.com/',
    auth: {
        'user': 'admin',
        'pass': ''
      }
};
 
var request1 = rp(requestOptions);
var request2 = rp(requestOptions);
var request3 = rp(requestOptions);
 
Bluebird.all([request1, request2, request3])
    .spread(function (responseOfReq1, responseOfReq2, responseOfReq3) {
       console.info(responseOfReq1);
       console.info(responseOfReq2);
       console.info(responseOfReq3);
    })
    .catch(function (err) {
        // At least one request failed.
        // Do your error handling here.
    });

    var Bluebird = require('bluebird')
    var rp = require('request-promise');
     
    var requestOptions = {
        method: 'GET',
        uri: 'https://dev77118.service-now.com/',
        auth: {
            'user': 'admin',
            'pass': ''
          }
    };
     
    var request1 = rp(requestOptions);
    var request2 = rp(requestOptions);
    var request3 = rp(requestOptions);
     
    Bluebird.all([request1, request2, request3])
        .spread(function (...responses) { 
            for (const response of responses) {
                console.info(response);
            }
        })
        .catch(function (err) {
            // At least one request failed.
            // Do your error handling here.
        });
*/