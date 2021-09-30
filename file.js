 const file = function(val) {
    this.value = val
}

file.setConfig = function(config) {
    file.config = config
}

file.of = function (val) {
    return new file(val)
}

file.prototype.isNothing = function() {
    return ( this.value === null || this. value === undefined )
}

file.prototype.map = function(fn) {
    return  this.isNothing() ? file.of(null) : file.of(fn(this.value, file.config))
}

file.prototype.join = function() {
    return this.isNothing() ? file.of(null) : this.value
}

module.exports = file