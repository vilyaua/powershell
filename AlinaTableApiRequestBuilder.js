var rp = require('request-promise');

function TableApiRequestBuilder() {
	this.login;
	this.pass;
    this.method;
	this.host;
    this.table;
    this.parameters = {};
    this.fields = [];

	 this.setCredentials = function(login, pass) {
			this.login = login;
			this.pass = pass;
	};
	
    this.setMethod = function(method) {
        this.method = method;
    };
	
	this.setHost = function(host) {
        this.host = host;
    };

    this.setTable = function(table) {
        this.table = table;
    }

    this.addParameter = function(key, value) {
        this.parameters[key] = value;
    }

    this.addField = function(fieldName) {
        this.fields.push(fieldName);
    }
	
	this.createParamString = function() {
        var result = '';
		var keysArray = Object.keys(this.parameters);
		for (var i = 0; i < keysArray.length ; i++){
			if (i > 0){
				result = result + '&'
			}
			result = result + keysArray[0] + '=' + this.parameters[keysArray[0]]
        }
		return result;
    }

    this.request = function() {
		var options = {
			method: 'GET',
			uri: this.host + this.table + '?sysparm_query=' + this.createParamString() + '&sysparm_fields=' + this.fields.join(','),
			auth: {
				'user': this.login,
				'pass': this.pass
			}
		}
        return rp(options);
    }
}

module.exports = TableApiRequestBuilder;