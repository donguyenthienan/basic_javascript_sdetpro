function sortASC(intArr) {
    for (let i = 0; i < intArr.length - 1; i++) {
        let minValue = intArr[i];
        for (let j = i + 1; j < intArr.length; j++) {
            if(intArr[j] < minValue){
                intArr[i] = intArr[j]
                intArr[j] = minValue
                minValue = intArr[i]
            }
        }
    }
    return intArr
}

console.log(sortASC([12,34,1,16,28]));

module.exports = {
    sortASC : sortASC
}