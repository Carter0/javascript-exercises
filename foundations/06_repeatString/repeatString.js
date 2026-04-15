const repeatString = function (str, amount) {
    if (amount < 0) {
        return "ERROR"
    }

    let repeatedStr = "";
    let i = 0;
    while (i < amount) {
        repeatedStr += str;
        i++;
    }

    return repeatedStr;
};

// Do not edit below this line
module.exports = repeatString;
