const removeFromArray = function(inputArray, ...deleteParameters) {
    let delPara = [];
    delPara = deleteParameters;
    const paraNum = deleteParameters.length;
    for (let i = 0; i < paraNum; i++) {
       let position = inputArray.indexOf(delPara[i]);
       inputArray.splice(position, 1);
    }
    return inputArray;
};

// Do not edit below this line
module.exports = removeFromArray;
