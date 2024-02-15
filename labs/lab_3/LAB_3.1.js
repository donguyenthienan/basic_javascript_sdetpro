function countOddEventNumber(intArr) {
    let evenArr = intArr.filter(value => {
        return !(value % 2)
    })
    console.log("Even numbers: ", evenArr.length);

    let oddArr = intArr.filter(value => {
        return value % 2
    })
    console.log("Odd numbers: ", oddArr.length);
}

countOddEventNumber([1,2,3,4,5])