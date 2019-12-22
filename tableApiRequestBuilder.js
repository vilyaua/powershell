function tableApiRequestBuilder(host, table) {
    this.method;
    this.host;
    this.table;
    this.filters = {};
    this.fields = [];

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

    this. addFilter = function(key, value) {
        this.filters.key = value;
    };

    this.addField = function(fieldName) {
        this.fields.push(fieldName);
    };

    this.createRequest = function() {
        // TODO
        /*
        this.method;
        this.host;
        this.table;
        this.parameters = {};
        this.fields = [];
        */
       return rp(options);
    };
};

module.exports = tableApiRequestBuilder;