const _ = require('lodash')
const csv = require('csv');
const parse = csv.parse;

module.exports = async (header,data) => {  

    // let arr = data.split(/\r?\n/),
    //     head = arr[0].split(',')
    // return arr.map(row => _.zipObject( head, row.split(',') ) )

    return new Promise ( (resolve, reject) => parse(data, { columns: header, delimiter:',', from_line: 3 }, function (error, records, info) {
        if(error)
            reject(error)
        resolve(records)
    }) )
}
