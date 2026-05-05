const palindromes = function (string) {
    const sanitized = string.toLowerCase().replace(/\p{P}/gu, "").replaceAll(" ", "");
    const arrStr = [...sanitized];
    const reverseArrStr = arrStr.toReversed();

    return arrStr.toString() === reverseArrStr.toString();
};

// Do not edit below this line
module.exports = palindromes;
