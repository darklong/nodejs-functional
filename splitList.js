const splitBy = require('./splitBy')

// module.exports = ( files, limit, by ) => {
//     let temp = files.map( async el => 
//         await splitBy( el.data, limit, by) 
//     )

//     files.forEach( (el, id) => {
//         el.splitedList = temp[id]
//     });

//     return files
// }

module.exports = (files, limit, by) => files.map(async (el) => {
    let file = await el

    file.splitedList = splitBy(file.data, limit, by)

    return file
})



// module.exports =   ( sortby, files) => files.map( async (el) =>{
//     let data = await el.data
//     el.data = arraySort( data, sortby)
//     return el
// })
