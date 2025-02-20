function checkLegality (el) {
    if ((typeof(el) != "number") || 
    (el < 0) ||
    ((el % 1) != 0))     
    return true;
}

const sumAll = function(arg1, arg2) {
    if (checkLegality(arg1) ||
        checkLegality(arg2))
        return "ERROR";

    const higherNumber = Math.max(arg1, arg2);
    const lowerNumber = Math.min(arg1, arg2);
    let sum = 0;
    for (let i = lowerNumber; i <= higherNumber; i++) {
        sum += i;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
