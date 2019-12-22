var ProcessResolver = require('./ProcessResolver');
function ArchAuto_ScriptedFlowEngine(context, exceptionHandler) {
    var resolver = new ProcessResolver(context);
    var errors = [];
    this.run = function (processes) {
        var result;
        for (var key in processes) {
            var func = processes[key];

            try {
                var args = resolver.resolveArgs(func);
                result = func.apply(context, args);
                context[key] = result;
            } catch (error) {
                errors.push(error);
                var stopFlowExecution = exceptionHandler(error, context);
                if (stopFlowExecution) {
                    break;
                }
            }
        }
        return {
            result: result,
            errors: errors
        };
    };
}

module.exports = ArchAuto_ScriptedFlowEngine;