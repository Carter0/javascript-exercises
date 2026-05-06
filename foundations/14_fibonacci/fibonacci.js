const fibonacci = function (n) {
    if (n < 0) {
        return "OOPS";
    }

    return fibHelper(Number(n));
};


function fibHelper(n) {
    if (n === 0) {
        return 0;
    } else if (n === 1) {
        return 1;
    } else {
        return fibHelper(n - 1) + fibHelper(n - 2);
    }
}

// Do not edit below this line
module.exports = fibonacci;
