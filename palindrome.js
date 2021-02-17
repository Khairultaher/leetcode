/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    let xx = x
          .toString()
          .split('')
          .reverse()
          .join('')
    if(xx === x.toString()){
        return true
    } else {
        return false
    }
};

console.log(isPalindrome(-121))