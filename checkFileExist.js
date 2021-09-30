const fs = require('fs')

module.exports = (folderPath) => fs.readdirSync(folderPath).map(fileName => {
    let file = fileName.split('.')
    return  { fileName: file[0], path: folderPath, fileType: file[1] }
})