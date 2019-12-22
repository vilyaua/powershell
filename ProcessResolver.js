function ProcessResolver(profile) {
    var locator = this;
    var services = {};

    /**
     * Instantiate service by name, if service not exist return null
     * @param {string} serviceName
     * @returns service instance or null if service not found
     */
    this.getService = function (serviceName) {
        var service = services[serviceName];

        if (!service) {
            service = profile[serviceName];

            if (service && service.prototype && service.prototype.constructor) {
                var instantiatedService = services[serviceName] = this.resolveArgs(service);

                return instantiatedService;
            } else if (service) {
                services[serviceName] = service;

                return service;
            } else {

            }
        }

        return service;
    };

    /**
     * Instantiate required service by name, if service not exist throws ArchAuto_NotFoundException
     * @param {string} serviceName
     * @throws ArchAuto_NotFoundException if service not found
     * @returns service instance
     */
    this.getRequiredService = function (serviceName) {
        var service = this.getService(serviceName);

        if (service) {
            return service;
        }

        throw new Error('Service ' + serviceName + ' not found.');
    };


    this.resolveArgs = function (func) {
        var args = [];
        var params = getParamNames(func);

        for (var key in params) {
            var param = params[key];

            if (param == 'locator') {
                args.push(locator);
            } else {
                args.push(locator.getService(param));
            }
        }

        return args;
    };

    // eslint-disable-next-line no-useless-escape
    var STRIP_COMMENTS = /(\/\/.*$)|(\/\*[\s\S]*?\*\/)|(\s*=[^,\)]*(('(?:\\'|[^'\r\n])*')|("(?:\\"|[^"\r\n])*"))|(\s*=[^,\)]*))/mg;
    var ARGUMENT_NAMES = /([^\s,]+)/g;

    var resolveFunctions = function () {
        for (var key in profile) {
            if (key.startsWith('func:')) {
                services[key.substring(5)] = profile[key];
            }
        }
    };

    function getParamNames(func) {
        var fnStr = func.toString().replace(STRIP_COMMENTS, '');
        var result = fnStr.slice(fnStr.indexOf('(') + 1, fnStr.indexOf(')')).match(ARGUMENT_NAMES);

        if (result === null)
            result = [];

        return result;
    }

    resolveFunctions();
}

module.exports = ProcessResolver;