var reverse = function(x) {
    x  = parseFloat(x.toString().split('').reverse().join('')) * Math.sign(x)
    if (x > 0x7FFFFFFF) {
        return 0;
    }
    if (x < -(0x80000000)) {
        return 0;
      }
    return x
};

console.log(reverse(123));
console.log(reverse(-2147483648));