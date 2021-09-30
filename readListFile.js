const readFile = require('./readFile')
const csv = require('./csv')
const pipe = require('./pipe')
const curry = require('./curry')
const noThing = require('./nothing')


module.exports = (files) => files.map(file => {
    try {
        const readFileOne = curry(readFile)(file.path)
        const csvWithHeader = curry(csv)(file.templateStructure.header.map(el => el.id))
        const readFileCSV = pipe(readFileOne, csvWithHeader)

        file.data = readFileCSV(file.fileName + '.' + file.fileType)
    } catch (err) {
        return noThing.of({
            message: "Something went wrong at readListFile function",
            errorCode: err['statusCode']
        })
    }
    return file
})