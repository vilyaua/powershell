const _INSTANCE = "https://dev62099.service-now.com/api/now/table/";
const _USER_ID = "admin";
const _PASSWORD = "kk67HuDifOMC";

const email2Find = "don.goodliffe@example.com"; //9ee1b13dc6112271007f9d0efdb69cd0
//const email2Find = "guest@example.com"; //5136503cc611227c0183e96598c4f706
//const email2Find = "itil@example.com"; //681b365ec0a80164000fb0b05854a0cd
//const email2Find = "admin@example.com"; //6816f79cc0a8016401c5a33be04be441

let fields2Return = "name,user_name,email,sys_id";

const sysId2FindIncident = "9ee1b13dc6112271007f9d0efdb69cd0";
let fields2ReturnIncident = "number,short_description,sys_created_on,opened_by";

const sysId2FindChangeRequest = "9ee1b13dc6112271007f9d0efdb69cd0";
let fields2ReturnChangeRequest = "number,short_description,sys_created_on,opened_by";

var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

let getUserByEmail = new XMLHttpRequest();
let getIncidentByUser = new XMLHttpRequest();
let getChangeRequestByUser = new XMLHttpRequest();

//let userData = "";
let response = "";
// As Andrii said, replaced above the request itself
getUserByEmail.onload = function() {
    //usedData = JSON.parse(getUserByEmail.responseText);
    //userData.result.forEach(element => {
    response = JSON.parse(getUserByEmail.responseText);
    response.result.forEach(element => {
        console.log(JSON.stringify(element, null, '\t'));
    });
    console.log("Output Finished");
}

// getIncidentByUser.onload = function() {
//     let incidentData = "";
//     incidentData = JSON.parse(getIncidentByUser.responseText);
//     incidentData.result.forEach(element => {
//         console.log(JSON.stringify(element, null, '\t'));
//     });
//     console.log("Output Finished");
// }

// Request for sys_id by email
// Prepare request data
let sysparmQuery = "sysparm_query=email=" + email2Find;
let sysparmFields = "sysparm_fields=" + fields2Return;
// Request
getUserByEmail.open('GET', _INSTANCE + 'sys_user' + '?' + sysparmQuery + '&' + sysparmFields, false, _USER_ID, _PASSWORD);
getUserByEmail.send();
