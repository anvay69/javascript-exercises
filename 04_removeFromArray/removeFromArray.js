const removeFromArray = function(arr, ...elems) {
    for (let elem of elems) {
        arr = arr.filter((value) => value !== elem);
    }

    return arr;
};

// Do not edit below this line
module.exports = removeFromArray;
