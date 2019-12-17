var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
let request = new XMLHttpRequest();

request.open('GET', 'https://dev62099.service-now.com/api/now/table/problem?sysparm_limit=1', true, 'admin', 'kk67HuDifOMC');
request.send();

request.onload = function() {
    let response = JSON.parse(request.responseText);
    console.log("sys_id: ", response.result[0].sys_id);
    console.log("cmdb_ci: ", response.result[0].cmdb_ci.value)
}