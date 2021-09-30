const _ = require('lodash')

module.exports = (...fns) => (value)  => _.reduce( fns, (acc, fn) => fn(acc), value )