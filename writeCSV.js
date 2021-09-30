const createCsvWriter = require('csv-writer').createObjectCsvWriter;

module.exports = async ( path, header, records ) => {
    
    const csvWriter = createCsvWriter({
        path: path,
        header: header
    });
    result = await csvWriter.writeRecords(records)
    return result
}