var rp = require('request-promise');

function tableApiRequestBuilder() {
    this.method = 'GET';
    this.host = 'https://dev62099.service-now.com/api/now/table/';
    this.table;
    this.filters = {};
    this.fields = [];
    this.auth = { 'user': 'admin', 'pass': 'kk67HuDifOMC' };
    this.header = {};
    this.data = [];

    this.setHost = function(host) {
        this.host = host;
    };

    this.setMethod = function(method) {
        this.method = method;
    };

    this.setTable = function(table) {
        this.table = table;
    };

    this.setAuth = function(user, pass) {
        this.auth['user'] = user;
        this.auth['pass'] = pass
    };

    this.setData = function(userInitialData) {
        this.data = userInitialData;
    }

    this.addMethod = function(method) {
        this.method = method;
    };

    this.addFilter = function(key, value) {
        this.filters.key = key;
        this.filters.value = value;
    };

    this.addField = function(fieldName) {
        this.fields.push(fieldName);
    };

    this.createRequest = function() {
        var sysparmQuery = '';
        var sysparmFields = '';
        
        if (this.filters.length > 0) {
            sysparmQuery = '?sysparm_query=' + this.filters.key + "=" + this.filters.value;
        }
        
        if (this.fields.length > 0) {
            sysparmFields = '&sysparm_fields=' + this.fields.join(',');
        }

        this.header['Accept'] = 'application/json';
        if (this.method !== 'GET') {
            this.header['Content-Type'] = 'application/json';
        }

        var options = {
            method: this.method,
            uri: this.host + this.table + sysparmQuery + sysparmFields,
            auth: this.auth,
            header: this.header,
            data: this.data
        }
        var result = rp(options);
        console.log(result);
        return result;
    };
};

module.exports = tableApiRequestBuilder;