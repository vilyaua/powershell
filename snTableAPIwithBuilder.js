var Bluebird = require('bluebird')
var fs = require('fs');
var TableApiRequestBuilder = require('./TableApiRequestBuilder');

function RequestManager(builder) {
    this.createRequest =  function () {
        builder.createRequest();
        builder.addHost();
        builder.setTable();
        builder.setFilter();
    };

    this.getRequest = function () {
       var result =  builder.getRequest();

       return result;
    };
}

function UserRequestBuilder(adsfadsf,asdfadsf) {
    var request;
    this.setTable = function (email, email,email) {
       require.table = email;
     };
     this.setTable = function(){
        require.table = 'sys_user';
     };
     this.setFilter = function () {
        require.filter = 'email';
      };
}

var a = new UserRequestBuilder('adsfdsafa', 'adsfadsf', 'afdsdsaf');
var b = new RequestManager(a);
b.createRequest();
b.getRequest();




function createUserRequest () {
    var userBuilder = new tableApiRequestBuilder();
    userBuilder.setHost('https://dev62099.service-now.com//api/now/table/');
    userBuilder.setMethod('GET');
    userBuilder.setTable('sys_user');
    userBuilder.addFilter('email', userEmail);
    userBuilder.addField('name');
    userBuilder.addField('user_name');
    userBuilder.addField('email');
    userBuilder.addField('sys_id');
    return userBuilder.createRequest;
}

function createIncidentsRequest () {
    var incdentBuilder = new tableApiRequestBuilder();
    incdentBuilder.setHost('https://dev62099.service-now.com//api/now/table/');
    incdentBuilder.setMethod('GET');
    incdentBuilder.setTable('incident');
    incdentBuilder.addFilter('opened_by', sysId);
    incdentBuilder.addField('number');
    incdentBuilder.addField('short_description');
    incdentBuilder.addField('sys_created_on');
    incdentBuilder.addField('opened_by');
    return incdentBuilder.createRequest;
}

function createChangeRequestsRequest () {
    var changeRequestBuilder = new tableApiRequestBuilder();
    changeRequestBuilder.setHost('https://dev62099.service-now.com//api/now/table/');
    changeRequestBuilder.setMethod('GET');
    changeRequestBuilder.setTable('change_request');
    changeRequestBuilder.addFilter('opened_by', sysId);
    changeRequestBuilder.addField('number');
    changeRequestBuilder.addField('short_description');
    changeRequestBuilder.addField('sys_created_on');
    changeRequestBuilder.addField('opened_by');
    return changeRequestBuilder.createRequest();
}

var userRequest = new userRequestBuilder.createRequest();
var incidentsRequest = new userRequestBuilder.createRequest();
var changeRequestsRequest = new userRequestBuilder.createRequest();

