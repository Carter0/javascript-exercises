const removeFromArray = function (elems, ...toRemove) {
    return elems.filter((elem) => !toRemove.includes(elem));
};



// Do not edit below this line
module.exports = removeFromArray;
