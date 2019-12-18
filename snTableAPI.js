const _INSTANCE = "https://dev62099.service-now.com/api/now/table/";
const _USER_ID = "admin";
const _PASSWORD = "kk67HuDifOMC";

//const email2Find = "charlie.whitherspoon@example.com";
//const email2Find = "sabrina.deppert@example.com";
//const email2Find = "zane.sulikowski@example.com";

const email2Find = "david.miller@example.com";
let fields2Return = "name,user_name,email,sys_id,active";

const sysId2FindIncident = "77ad8176731313005754660c4cf6a7de";
let fields2ReturnIncident = "number,short_description,sys_created_on";

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
}

/*
// Request for sys_id by email
// Prepare request data
let sysparmQuery = "?sysparm_query=email=" + email2Find;
let sysparmFields = "&sysparm_fields=" + fields2Return;
// Request
request.open('GET', _INSTANCE + 'sys_user' + sysparmQuery + sysparmFields, false, _USER_ID, _PASSWORD);
request.send();
*/

// Request for incidents by creator's sys_id
// Prepare request data
let sysparmQueryIncident = "?sysparm_query=opened_by.value=" + sysId2FindIncident;
let sysparmFieldsIncident = "&sysparm_fields=" + fields2ReturnIncident;
request.open('GET', _INSTANCE + 'incident' + sysparmQueryIncident + sysparmFieldsIncident, true, _USER_ID, _PASSWORD);
request.send();

//request.open('GET', _INSTANCE + 'incident' + sysparmQueryIncident + sysparmFieldsIncident, true, _USER_ID, _PASSWORD);

// One way to loop
// response.result.forEach(element => {
//     console.log(element.email);
// });

//console.log(JSON.stringify(response.result[0]));

// Second way to loop
// for (let elem in response.result) {
//     //console.log(response.result[elem].email);
//     if (response.result[elem].email === email2Find) {
//         sys_Id2Find = response.result[elem].sys_id;
//         userId2Find = response.result[elem].userid;
//     }
// }
// console.log("\nsys_id: ", sys_Id2Find);
// console.log("\nuserid: ", userId2Find)

// ?Doesn't work - WHY?
// const sn=require("servicenow-rest-api");
// const ServiceNow=new sn('https://dev62099.service-now.com','admin','kk67HuDifOMC');
// ServiceNow.Authenticate();
// ServiceNow.getSampleData('change_request',(res)=>{    // 
//     console.log(res);
// });
