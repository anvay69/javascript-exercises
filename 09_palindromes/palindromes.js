const palindromes = function (str) {
    arr = str.split('').filter((val) => (
        val !== ' ' && 
        val !== '\n' &&
        val !== '.' &&
        val !== ',' &&
        val !== ';' &&
        val !== ':' &&
        val !== '!'
    ));
    let n = arr.length-1;
    let half = Math.floor(arr.length/2);
    for (let i = 0; i < half; i++) {
        if (arr[i].toLowerCase() !== arr[n-i].toLowerCase())
            return false;
    }
    return true;
};

// Do not edit below this line
module.exports = palindromes;