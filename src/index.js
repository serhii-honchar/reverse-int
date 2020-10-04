module.exports = function reverse (n) {
    if(n<0){
        return Number ((''+n).split('').splice(1).reverse().join(''));
    } else {
        return Number ((''+n).split('').reverse().join(''));
    }
}
