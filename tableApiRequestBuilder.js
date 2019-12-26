var rp = require('request-promise');

function tableApiRequestBuilder() {
    this.method = 'GET';
    this.host = 'https://dev62099.service-now.com/api/now/table/';
    this.table;
    this.filters = {};
    this.fields = [];
    this.auth = { 'user': 'admin', 'pass': 'kk67HuDifOMC' };

    this.setHost = function(host) {
        this.host = host;
    };

    this.setMethod = function(method) {
        this.method = method;
    };

    this.setTable = function(table) {
        this.table = table;
    };

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
        var options = {
            method: this.method,
            uri: this.host + this.table + '?sysparm_query=' + this.filters.key + "=" + this.filters.value + '&sysparm_fields=' + this.fields.join(','),
            auth: this.auth
        }
        return rp(options);
    };
};

module.exports = tableApiRequestBuilder;