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

//opened_by.value=77ad8176731313005754660c4cf6a7de
//number,short_description

//let fields2ReturnIncident = "name,short_description";
//let sysparmFieldsIncident = "&sysparm_fields=" + fields2Return;

var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
let request = new XMLHttpRequest();

let response = "";
// As Andrii said, replaced above the request itself
request.onload = function() {
    response = JSON.parse(request.responseText);
    //console.log(JSON.stringify(response.result[0], null, '\t'));
    response.result.forEach(element => {
        console.log(JSON.stringify(element, null, '\t'));
    });
    console.log("Output Finished")
}

/*
// Request for sys_id by email
// Prepare request data
let sysparmQuery = "sysparm_query=email=" + email2Find;
let sysparmFields = "sysparm_fields=" + fields2Return;
// Request
request.open('GET', _INSTANCE + 'sys_user' + '?' + sysparmQuery + '&' + sysparmFields, false, _USER_ID, _PASSWORD);
request.send();
*/

/*
// Request for Incidents by creator's sys_id
// Prepare request data
let sysparmQueryIncident = "sysparm_query=opened_by=" + sysId2FindIncident;
let sysparmFieldsIncident = "sysparm_fields=" + fields2ReturnIncident;
request.open('GET', _INSTANCE + 'incident' + '?' + sysparmQueryIncident + '&' + sysparmFieldsIncident, true, _USER_ID, _PASSWORD);
request.send();
*/


// Request for ChangeRequests by creator's sys_id
// Prepare request data
let sysparmQueryChangeRequest = "sysparm_query=opened_by=" + sysId2FindChangeRequest;
let sysparmFieldsChangeRequest = "sysparm_fields=" + fields2ReturnChangeRequest;
request.open('GET', _INSTANCE + 'change_request' + '?' + sysparmQueryChangeRequest + '&' + sysparmFieldsChangeRequest, true, _USER_ID, _PASSWORD);
request.send();


// ?Doesn't work - WHY?
// const sn=require("servicenow-rest-api");
// const ServiceNow=new sn('https://dev62099.service-now.com','admin','kk67HuDifOMC');
// ServiceNow.Authenticate();
// ServiceNow.getSampleData('change_request',(res)=>{    // 
//     console.log(res);
// })

// One way to loop
// response.result.forEach(element => {
//     console.log(element.email);
// })

// Second way to loop
// for (let elem in response.result) {
//     //console.log(response.result[elem].email);
//     if (response.result[elem].email === email2Find) {
//         sys_Id2Find = response.result[elem].sys_id;
//         userId2Find = response.result[elem].userid;
//     }
// }
