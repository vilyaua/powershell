var rp = require('request-promise');
var Bluebird = require('bluebird');

function createRequestOptions(requestParams) {
	return {
		method: 'GET',
		uri: 'https://dev61355.service-now.com/api/now/table/' + requestParams,
		auth: {
			'user': 'admin',
			'pass': 'Id0U9SXjptgI'
		  }
	};
};
 
var userEmail = "don.goodliffe@example.com"; //9ee1b13dc6112271007f9d0efdb69cd0
var userFields = "name,user_name,email,sys_id";
 
var sysIdToReturnInfo= "9ee1b13dc6112271007f9d0efdb69cd0";
var fieldsToReturnIncident = "number,short_description,sys_created_on,opened_by";
var fieldsToReturnChangeRequest = "number,short_description,sys_created_on,opened_by";

// Request for sys_id by email
// Prepare request data
var sysparmQuery = "sysparm_query=email=" + userEmail;
var sysparmFields = "sysparm_fields=" + userFields;
// Request
var userFieldsRequest = rp(createRequestOptions('sys_user?' + sysparmQuery + '&' + sysparmFields));

var sysparmQueryInfo = "sysparm_query=opened_by=" + sysIdToReturnInfo;

var sysparmFieldsIncident = "sysparm_fields=" + fieldsToReturnIncident;
// Request
var userIncidentRequest = rp(createRequestOptions('incident?' + sysparmQueryInfo + '&' + sysparmFieldsIncident));

var sysparmFieldsChangeRequest = "sysparm_fields=" + fieldsToReturnChangeRequest;
// Request
var userChangeRequestRequest = rp(createRequestOptions('change_request?' + sysparmQueryInfo + '&' + sysparmFieldsChangeRequest));

Bluebird.all([userFieldsRequest, userIncidentRequest, userChangeRequestRequest])
    .spread(function (responseOfReq1, responseOfReq2, responseOfReq3) {
       console.info(responseOfReq1 + '\n');
       console.info(responseOfReq2  + '\n');
       console.info(responseOfReq3);
    })
    .catch(function (err) {
        // At least one request failed.
        // Do your error handling here.g
    });