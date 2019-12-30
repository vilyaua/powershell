var restApiClientUser = require('./restApiClientUser');

var userInitData = {
    user_name: "Vilya 8", // This field needs to be unique
    email: "atLast@email.com",
    mobile_phone: "+380676360948",
    country: "Ukraine"
}

var client = new restApiClientUser();
client.createUser(userInitData)
    .then (function(userData) {
        var user = userData.result;
        var sysId = user.sys_id;
        console.log('User created: ' + JSON.stringify(user, null, '    '));
    })
    .catch(function(err) {
        console.error(err);
    })