const lab3_3 = require('./LAB_3.3')

function mergeAndSortArray(intArr1, intArr2) {
    intArr1.push(...intArr2)
    return lab3_3.sortASC(intArr1)
}

console.log(mergeAndSortArray([1,12,16,28,34],[1,13,16,27,99]));