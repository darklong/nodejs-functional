const splitBy = require('./splitBy')
const noThing = require('./nothing')


module.exports = (files, config) => files.map(async file => {
    try {
        file  = await file
        // const chunk = partial( splitBy,undefined, config.limit, file.splitCondtions )

        file.splitedList = splitBy(file.data, config.limit, file.splitConditions)
    } catch (err) {
        console.log(err)
        return noThing.of({
            message: "Something went wrong at chunk function",
            errorCode: err['statusCode']
        })
    }
    return file
})