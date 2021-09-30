const _ = require('lodash')

module.exports = (str, Templates, Condition) => {
   
    let DataStructure = str.split('_')
    
    return _.includes(Templates,DataStructure[0]) && _.includes(Condition, DataStructure[1])
}