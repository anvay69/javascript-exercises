const repeatString = function(string, num) {
    if (num < 0) return "ERROR";

    let result = '';
    while (num > 0) {
        result += string;
        num -= 1;
    }
    return result;
};

repeatString("hello", 10);
// Do not edit below this line
module.exports = repeatString;
