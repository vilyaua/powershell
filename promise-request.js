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
var task1 = function(userResponse) {
	return rp(getIncidentUrl + userResponse.id).then(function (incidentsResponse) {
		// Process html...
	});;
}

var task2 = function(userResponse) {
	return rp(getChangeRequestUrl  + userResponse.id).then(function (changeRequestResponse) {
		// Process html...
	});
}

function getMergedResultPromise(userResponse) {
    Promise.all([task1(userResponse), task2(userResponse)]).then(
		function (resultArray){
			return new Promise(function(resolve, reject) {
				var mergedResult = resultArray[0] + resultArray[1];
				if (mergedResult) {
				  resolve(mergedResult);
				} else {
				  reject(Error("Something went terribly wrong"));
				}
			});
		}
	);
}

function writeToJson(mergedResult){
	return new Promise(function(resolve, reject) {
		//Write json file
	}	
}

rp(getUserUrl)
	.then(getMergedResultPromise(userResponse))
	.then(writeToJson(mergedResult))
	.catch(function (err) {
		// Crawling failed...
	});

*/