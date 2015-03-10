var specialConsole = (function () {
    var self;

    function getText() {
        var text;
        if (getText.arguments.length === 1) {
            text = arguments[0];
        } else {
            text = arguments[0];
            var argumentWords = [];
            for (var i = 1; i < arguments.length; i++) {
                argumentWords.push(arguments[i]);
            }

            var argumentMatches = text.match(/\{-?\d+\}/g);
            for (var i = 0; i < argumentMatches.length; i++) {
                var argumentNumberInArray = argumentMatches[i].match(/-?\d+/);
                var placeholderPosition = parseInt(argumentNumberInArray[0]);
                if (placeholderPosition > argumentWords.length - 1 || placeholderPosition < 0) {
                    throw new Error("Index (zero based) must be greater than or equal to zero and less than the size of the argument list.");
                }

                text = text.replace(argumentMatches[i], argumentWords[placeholderPosition]);
            }
        }

        return text;
    }

    function writeLine() {
        return console.log(getText.apply(null, arguments));
    }
    
    function writeError() {
        return console.error(getText.apply(null, arguments));
    }

    function writeWarning() {
        return console.warn(getText.apply(null, arguments));
    }

    function writeInfo() {
        return console.info(getText.apply(null, arguments));
    }
    
    self = {
        writeLine: writeLine,
        writeError: writeError,
        writeWarning: writeWarning,
        writeInfo: writeInfo
    };
    
    return self;
})();


specialConsole.writeLine("Message: hello");
specialConsole.writeLine("Message: {0}", "hello");
specialConsole.writeLine("Object: {0}", { name: "Gosho", toString: function() { return this.name }});
specialConsole.writeError("Error: {0}", "A fatal error has occurred.");
specialConsole.writeWarning("Warning: {0}", "You are not allowed to do that!");
specialConsole.writeInfo("Info: {0}", "Hi there! Here is some info for you.");
specialConsole.writeError("Error object: {0}", { msg: "An error happened", toString: function() { return this.msg }});
