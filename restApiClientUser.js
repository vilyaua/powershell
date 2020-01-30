var tableApiRequestBuilder = require('./TableApiRequestBuilder');

function restApiClientUser() {
    this.host = 'https://dev62099.service-now.com/api/now/table/';
    this.table = 'sys_user';
    this.user = 'admin';
    this.pass = '!Qaz2wsx';

    this.setHost = function(host) {
        this.host = host;
    }

    this.setUser = function(user) {
        this.user = user;
    }

    this.setPass = function(pass) {
        this.pass = pass;
    }

    this.createUser = function(userInitData) {
        var userBuilder = new tableApiRequestBuilder();
        userBuilder.setMethod('POST');
        userBuilder.setHost(this.host);
        userBuilder.setTable(this.table);
        userBuilder.setAuth(this.user, this.pass);
        userBuilder.setBody(userInitData);
        return userBuilder.createRequest();
    }

    this.updateUser = function(sysId) {
        //TODO
    }

    this.getUserById = function(sysId) {
        //TODO
    }

    this.deleteUserById = function(sysId) {
        //TODO
    }
}

module.exports = restApiClientUser;