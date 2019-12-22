var rp = require('request-promise');
var Bluebird = require('bluebird');
var fs = require('fs');
var tableApiRequestBuilder = require('./tableApiRequestBuilder');

function createUserRequest () {
    var userRequestBuilder = new tableApiRequestBuilder();
    userRequestBuilder.setHost('https://dev62099.service-now.com//api/now/table/');
    userRequestBuilder.setMethod('GET');
    userRequestBuilder.setTable('sys_user');
    userRequestBuilder.addField('');
    userRequestBuilder.addField('');
    userRequestBuilder.addField('');
    return userRequest;
}

function createIncidentsRequest () {
    var userRequestBuilder = new tableApiRequestBuilder();
    userRequestBuilder.setHost('https://dev62099.service-now.com//api/now/table/');
    userRequestBuilder.setMethod('GET');
    userRequestBuilder.setTable('incident');
    userRequestBuilder.addField('');
    userRequestBuilder.addField('');
    userRequestBuilder.addField('');
    return userRequest;
}

function createChangeRequestsRequest () {
    var userRequestBuilder = new tableApiRequestBuilder();
    userRequestBuilder.setHost('https://dev62099.service-now.com//api/now/table/');
    userRequestBuilder.setMethod('GET');
    userRequestBuilder.setTable('change_request');
    userRequestBuilder.addField('');
    userRequestBuilder.addField('');
    userRequestBuilder.addField('');
    return userRequest;
}

// Predefined request data
function createRequestOptions(requestParams) {
    return {
        method: 'GET',
        uri: 'https://dev62099.service-now.com//api/now/table/' + requestParams,
        auth: {
            'user': 'admin',
            'pass': 'kk67HuDifOMC'
          }
    };
};

var userRequest = new userRequestBuilder.createRequest();
var incidentsRequest = new userRequestBuilder.createRequest();
var changeRequestsRequest = new userRequestBuilder.createRequest();

// Output JSON object
function printJsonObject(jsonObject, dataName) {
    console.log(dataName + ":");
    jsonObject.forEach(element => {
        console.log(JSON.stringify(element, null, '\t'));
    });
};
 
// function printJsonObject({userData, incidentData, changeRequestData}) {
//     //TODO to File
// function printJsonObject(userData, incidentData, changeRequestsData) {
//     fs.writeFile('resultData.json', 'Hello content!', function (err) {
//     if (err) throw err;
//     console.log('Saved!');
//     });
// };

// Leave any sample below uncommented to find data by this particular Email
//const userEmail = "don.goodliffe@example.com"; //9ee1b13dc6112271007f9d0efdb69cd0
const userEmail = "guest@example.com"; //5136503cc611227c0183e96598c4f706
//const userEmail = "itil@example.com"; //681b365ec0a80164000fb0b05854a0cd
//const userEmail = "admin@example.com"; //6816f79cc0a8016401c5a33be04be4
 
// Defining fields to get on response
var userFields = "name,user_name,email,sys_id";
 
// Request for sys_id by email
// Prepare request data
var sysparmQuery = "sysparm_query=email=" + userEmail;
var sysparmFields = "sysparm_fields=" + userFields;
// Request
var getUserByEmail = rp(createRequestOptions('sys_user?' + sysparmQuery + '&' + sysparmFields));
 
// Making the First Request - find user data by email
getUserByEmail
    .then(function (userData) {
        // Getting sys_id for further processing
        var user = JSON.parse(userData).result;
        var sysId = user[0].sys_id;
        printJsonObject(user, "User");
        
        // Defining fields to get on response
        var incidentFields = "number,short_description,sys_created_on,opened_by";
        var changeRequestFields = "number,short_description,sys_created_on,opened_by";
        // Defining "opened_by" sys_id
        var sysparmQueryInfo = "sysparm_query=opened_by=" + sysId;
 
        var sysparmIncidentFields = "sysparm_fields=" + incidentFields;
        // Request
        var getIncidentByUserSysId = rp(createRequestOptions('incident?' + sysparmQueryInfo + '&' + sysparmIncidentFields));
 
        var sysparmChangeRequestFields = "sysparm_fields=" + changeRequestFields;
        // Request
        var getChangeRequestByUserSysId = rp(createRequestOptions('change_request?' + sysparmQueryInfo + '&' + sysparmChangeRequestFields));
 
        // Starting 2 requests in syncronous mode
        Bluebird.all([getIncidentByUserSysId, getChangeRequestByUserSysId])
            .spread(function(incidentData, changeRequestData) {
                
                var incidents = JSON.parse(incidentData).result;
                printJsonObject(incidents, "Incidents");
                
                var changeRequests = JSON.parse(changeRequestData).result
                printJsonObject(changeRequests, "ChangeRequests");
 
                //writeJsonFile('allData.json', {userData, incidentData, changeRequestData});
            })
            .catch(function(err) {
                console.error(err);
            })
        })
    .catch(function (err) {
        console.error(err);
    });

/*     var result = {
        "email": "some@email",
        ... ,
        "incidents:" [
            {},
            {},
            {},
        ]
        "changeRequests:" [
            {},
            {},
            {},
        ]
    } */