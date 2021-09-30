const fs = require('fs')

// module.exports = file =>  fs.readFileSync(`${file.path}/${file.fileName}`,'utf8')
module.exports = (path, fileName) =>  fs.readFileSync(`${path}/${fileName}`,'utf8')

