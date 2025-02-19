const repeatString = function(string, num) {
    let result = "";
    // if (num > 0) {
    //     result = string;
    // } else if (num < 0) {
    //     result = "ERROR";
    // }

        for (i = 0; i <= (num - 1); i++) {
            result += string ;
            console.log(string)
        }
        return result;
    };

// Do not edit below this line
module.exports = repeatString;
