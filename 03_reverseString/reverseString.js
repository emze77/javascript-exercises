const reverseString = function(word) {
    const len = word.length;
    let reversed = "";
    for (let i = 1; i <= len; i++) {
        reversed += word.at(-i);
    }
    return reversed;
};

// Do not edit below this line
module.exports = reverseString;
