const removeFromArray = function(inputArray, ...deleteParameters) {
    const paraNum = deleteParameters.length;
    for (let i = 0; i < paraNum; i++) {
        const x = deleteParameters[i];
        let position = inputArray.indexOf(x);
        while (position > -1) {
            inputArray.splice(position, 1);
            position = inputArray.indexOf(x);
        } 
    }
    return inputArray;
};

// Do not edit below this line
module.exports = removeFromArray;
