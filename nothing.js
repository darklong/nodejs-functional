const Nothing = function(val) {
    this.value = val
}

Nothing.of = function(val) {
    return new Nothing(val)
}

Nothing.prototype.map = function() {
    return this;
}

Nothing.prototype.isNothing = function() {
    return ( this.value === null || this. value === undefined )
}


Nothing.prototype.join = function() {
    return this.isNothing() ? Nothing.of(null) : this.value
}

module.exports = Nothing