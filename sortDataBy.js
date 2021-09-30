const sortData = require('./sortData')
const noThing = require('./nothing')

module.exports = (files, config) => files.map(async (file) => {

    try {
        function compare(prop) {
            return function (a, b) {
                return a[prop].localeCompare(b[prop]);
            };
        }

        function compareINT(prop) {
            return function (a, b) {
                return parseInt(a[prop]) < parseInt(b[prop]);
            };
        }

        let tempdata = await file.data

        if (file.specificSplitConditions)
            file.data = sortData(compare(file.splitConditions), compareINT(file.specificSplitConditions), tempdata)
        else
            file.data = sortData(compare(file.splitConditions), tempdata)
    } catch (err) {
        return noThing.of({
            message: "Something went wrong at sortDataBy function",
            errorCode: err['statusCode']
        })
    }
    return file
})