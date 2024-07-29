const fibonacci = function(num) {
    num = +num;
    if (isNaN(num) || num < 0) return "OOPS";
    if (num == 0) return 0;

    let a = 1, b = 1;
    for (let i = 3; i <= num; i++) {
        let c = a+b;
        a = b, b = c;
    }

    return b;
};

// Do not edit below this line
module.exports = fibonacci;
