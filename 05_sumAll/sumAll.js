const sumAll = function(start, end) {
    if (
        typeof start !== 'number' || 
        typeof end !== 'number' || 
        start < 0  || end < 0
    )
        return "ERROR";
    
    if (end < start) {
        end ^= start;
        start ^= end;
        end ^= start;
    }
    
    let result = 0;

    for (let i = start; i <= end; i++) {
        result += i;
    }

    return result;
};

// Do not edit below this line
module.exports = sumAll;
