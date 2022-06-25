module.exports = function reverse (n) {
    return Math.abs(n).toString(10).split('').reverse().join('')
}
