const { file } = require('@babel/types');
const arraySort = require('array-sort');

// module.exports =   (files) => {

//     let temp = files.map( async el => arraySort( await el.data,['KUNNR']) )

//     files.forEach( (el, id) => {
//         el.data = temp[id]
//     });

//     return files
// }


// module.exports =   ( sortby, files) => files.map( async (el) =>{
//     let data = await el.data
//     el.data = arraySort( data, sortby)
//     return el
// })

// module.exports =    ( sortby, data ) => arraySort( data, sortby)
module.exports =    ( fn, fn1, data ) => arraySort( data, fn, fn1)
