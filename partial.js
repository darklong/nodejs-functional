
module.exports = function (fn, ...partialArgs) {
    let args = partialArgs;
    return function (...fullArguments) {
        let arg = 0;
        for (let i = 0; i < args.length && arg < fullArguments.
            length; i++) {
            if (args[i] === undefined) {
                args[i] = fullArguments[arg++];
            }
        }
        return fn.apply(null, args);
    };
};