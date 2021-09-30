const writeCSV = require('./writeCSV')
const partial = require('./partial')
const noThing = require('./nothing')


module.exports = (files, config) => files.map(async (file, id) => {
    try {
        file = await file
        file.writeStatus = []

        for (let fileNum in file.splitedList) {

            let smallData = file.data.filter((el, id) => id >= file.splitedList[fileNum][0] && id <= file.splitedList[fileNum][1])

            smallData.unshift(file.templateStructure.subHeader)

            let result = await writeCSV(`${config.outPutPath}/${file.fileName}_${parseInt(fileNum) + 1}.csv`, file.templateStructure.header, smallData)
            file.writeStatus.push({ fileName: `${config.outPutPath}/${file.fileName}_${parseInt(fileNum) + 1}.csv`, status: result })

        }
    } catch (err) {
        return noThing.of({
            message: "Something went wrong at writeSmallFile function",
            errorCode: err['statusCode']
        })
    }
    return file
});
