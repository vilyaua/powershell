
var ArchAuto_ScriptedFlowEngine = require('./ArchAuto_ScriptedFlowEngine');

var input = {
    request: {
        params: "context params"
    },
    response: {}
};

var processes = {
    inputOne: function (request) {
        console.info('Process one, input is: ' + request.params);
        request.params = "now modified";
        return 'Result of input one';
    },
    someInputWithError: function () {
        console.info('Process with error' + nonExistingParam);
        return 'Error result';
    },
    inputTwo: function (inputOne) {
        console.info('Process two, input is: ' + inputOne);
        return 'Result of input two';
    },
    inputThree: function (request, response, inputOne, inputTwo, someInputWithError) {
        console.info('Process three, input is: ' + inputTwo);
        response.inputOne = inputOne;
        response.inputTwo = inputTwo;
        response.someInputWithError = someInputWithError;
        response.params = request.params;
        return response;
    }
};

function exceptionHandler(error, context) {
    context.someInputWithError = 'Error was handled';
    return false;
}

var flow = new ArchAuto_ScriptedFlowEngine(input, exceptionHandler);
var output = flow.run(processes);
console.info('Flow result is:');
console.log(output.result);