const _INSTANCE = "https://dev62099.service-now.com/api/now/table/";
const _USER_ID = "admin";
const _PASSWORD = "kk67HuDifOMC";

//const email2Find = "charlie.whitherspoon@example.com";
const email2Find = "sabrina.deppert@example.com";
//const email2Find = "zane.sulikowski@example.com";
let sysparmQuery = "?sysparm_query=email=" + email2Find;
let sysparmQueryIncident = "?sysparm_query=email=" + email2Find;

// Request data
let fields2Return = "name,user_name,email,sys_id,active";
let sysparmFields = "&sysparm_fields=" + fields2Return;

let fields2ReturnIncident = "name,user_name,email,sys_id,active";
let sysparmFieldsIncident = "&sysparm_fields=" + fields2Return;


let response = "";

var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
let request = new XMLHttpRequest();

// As Andrii said, replaced above the request itself
request.onload = function() {
    response = JSON.parse(request.responseText);
    console.log(JSON.stringify(response.result[0], null, '\t'));
}

// Request
request.open('GET', _INSTANCE + 'sys_user' + sysparmQuery + sysparmFields, true, _USER_ID, _PASSWORD);

request.send();

console.log(request.responseText)

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
