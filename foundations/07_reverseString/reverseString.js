const reverseString = function (str) {
    return str.split("").reverse().join("");


    function reverse(strArr) {
        if (strArr.length === 0) {
            return strArr;
        } else {
            const [first, ...rest] = arr;
            return reverse(rest).concat(first);
        }
    }
};




// Do not edit below this line
module.exports = reverseString;
