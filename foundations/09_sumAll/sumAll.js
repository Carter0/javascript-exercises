const sumAll = function (start, end) {

    if (start < 0 || end < 0) {
        return "ERROR";
    }

    if (!Number.isInteger(start) || !Number.isInteger(end)) {
        return "ERROR";
    }



    if (start <= end) {
        return range(start, end).reduce(((accumulator, currentValue) => accumulator + currentValue), 0);
    } else {
        return range(end, start).reduce(((accumulator, currentValue) => accumulator + currentValue), 0);
    }
};


function range(start, end) {
    return Array.from({ length: end - start + 1 }, (_, i) => start + i);
}

// Do not edit below this line
module.exports = sumAll;
