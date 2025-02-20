const leapYears = function(year) {
    let test1 = false;
    let test2 = false;
    if ((year % 4 === 0) && (year % 100 != 0)) test1 = true;
    if ((test1 === true) || (year % 400 === 0)) test2 = true;
    return test2;
};

// Do not edit below this line
module.exports = leapYears;
