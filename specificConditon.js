const noThing = require('./nothing')


module.exports = (files, config) => files.map((file) => {
    try {
        if (file.template == 'ZDP1' || file.template == 'ZDP2' || file.template == 'ZDP5')
            file.specificSplitConditions = ['KSTBM']
    } catch (err) {
        
        return noThing.of({
            message: "Something went wrong at specificCondition function",
            errorCode: err['statusCode']
        })
    }
    return file
})