const _ = require('lodash')
const checkFileName = require('./checkFileName')

module.exports = (list, Templates, Condition) => {
    return  _.filter(list, el => checkFileName( el.fileName, Templates, Condition ))
             .map((el) => ({ fileName: el.fileName, path: el.path, fileType: el.fileType }))
}