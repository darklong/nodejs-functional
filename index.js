const _ = require('lodash')
const checkFileExist = require('./checkFileExist')
const checkListFile = require('./checkListFile')
const pipe = require('./pipe')
const partial = require('./partial')
const file = require('./file')
const readListFile = require('./readListFile')
const sortDataBy = require('./sortDataBy')
const writeSmallFile = require('./writeSmallFile')
const fileSplitCondition = require('./fileSplitCondition')
const specificCondition = require('./specificConditon')
const chunk = require('./chunk')

console.time()

const ZDP1 = partial(checkListFile, undefined, ['ZDP1'], ['KUNNR'])

const existAndValid = pipe(checkFileExist, ZDP1)

let  files = existAndValid(`${__dirname}\\data`)


const config = {
    limit: 2000,
    outPutPath: `${__dirname}\\out`
}

file.setConfig(config)

let result  =  file.of(files).map(fileSplitCondition).map(specificCondition).map( readListFile ).map( sortDataBy ).map(chunk).map( writeSmallFile )


Promise.all(result.value).then( (data) =>{
    console.log( data )
    console.timeEnd()

})


