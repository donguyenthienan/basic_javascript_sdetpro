//The function to process the array: (value, index, array)
function filterEvenNumber(value, index, array) {
    console.log("Processing at index: ", index)
    return value % 2 === 0
}

function convertToEvenNumber(value, index, array) {
    return value % 2 ? value + 1 : value;
}

function sortNumberASC(firstNum, secondNum) {
    return firstNum - secondNum
}

function sortNumberDESC(firstNum, secondNum) {
    return secondNum - firstNum
}

module.exports = {
    filterEvenNumber: filterEvenNumber,
    convertToEvenNumber: convertToEvenNumber,
    sortNumberASC: sortNumberASC,
    sortNumberDESC: sortNumberDESC
}