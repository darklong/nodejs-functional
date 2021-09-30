const splitCondition = require('./splitCondition')
const ZDPOne = require('./template/ZDPOne')
const noThing = require('./nothing')


module.exports = (files) => files.map(file => {
    try {
        
        let arr = file.fileName.split('_')

        file.splitConditions = splitCondition(arr[1])

        file.template = arr[0]
        
        switch (file.template) {
            case 'ZDP1':
                file.templateStructure = ZDPOne
                break;

        }

    } catch (err) {
        return noThing.of( { message: "Something went wrong at fileSplitCondition function" , 
        errorCode: err['statusCode'] })
    }

    
    return file
})