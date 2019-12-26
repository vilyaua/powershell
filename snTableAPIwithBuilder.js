var Bluebird = require('bluebird')
var fs = require('fs');
var tableApiRequestBuilder = require('./TableApiRequestBuilder');

// Leave any sample below uncommented to find data by this particular Email
const userEmail = "don.goodliffe@example.com"; //9ee1b13dc6112271007f9d0efdb69cd0
//const userEmail = "guest@example.com"; //5136503cc611227c0183e96598c4f706
//const userEmail = "itil@example.com"; //681b365ec0a80164000fb0b05854a0cd
//const userEmail = "admin@example.com"; //6816f79cc0a8016401c5a33be04be4

function createUserRequest(email) {
    var userBuilder = new tableApiRequestBuilder();
    userBuilder.setTable('sys_user');
    userBuilder.addFilter('email', email);
    userBuilder.addField('name');
    userBuilder.addField('user_name');
    userBuilder.addField('email');
    userBuilder.addField('sys_id');
    return userBuilder.createRequest();
}

function createIncidentsRequest(sysId) {
    var incdentBuilder = new tableApiRequestBuilder();
    incdentBuilder.setTable('incident');
    incdentBuilder.addFilter('opened_by', sysId);
    incdentBuilder.addField('number');
    incdentBuilder.addField('short_description');
    incdentBuilder.addField('sys_created_on');
    return incdentBuilder.createRequest();
}

function createChangeRequestsRequest(sysId) {
    var changeRequestBuilder = new tableApiRequestBuilder();
    changeRequestBuilder.setTable('change_request');
    changeRequestBuilder.addFilter('opened_by', sysId);
    changeRequestBuilder.addField('number');
    changeRequestBuilder.addField('short_description');
    changeRequestBuilder.addField('sys_created_on');
    return changeRequestBuilder.createRequest();
}

var userRequest = createUserRequest(userEmail);
userRequest
    .then(function (userData) {
        var user = (JSON.parse(userData)).result[0];
        var sysId = user.sys_id;
        
        var incidentsRequest = createIncidentsRequest(sysId);
        var changeRequestsRequest = createChangeRequestsRequest(sysId);

        Bluebird.all([incidentsRequest, changeRequestsRequest])
            .spread(function (incidentsData, changeRequestsData) {
                user.incidents = JSON.parse(incidentsData).result;
                user.changeRequests = JSON.parse(changeRequestsData).result;

                //console.log(JSON.stringify(user, null, '    '));
                fs.writeFileSync('user.json', JSON.stringify(user))
            })
            .catch(function(err) {
                console.error(err);
            })
    })
    .catch(function (err) {
        console.error(err);    
    })