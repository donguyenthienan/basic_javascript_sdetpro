/**
 * Methods of process array
 * 
 */

const { filterEvenNumber, 
    convertToEvenNumber, 
    sortNumberASC, 
    sortNumberDESC } = require("../Utils/ArrayHelper")

//Literal declaration
let myNumArray = [1,2,3,4,5]

// 1. Most of methods to process an array can accept a function as a parameter
let evenNumbers = myNumArray.filter(filterEvenNumber)

// 2. The function to process the array: (value, index, array)
// function filterEvenNumber(value, index, array) {
//     console.log("Processing at index: ", index)
//     return value % 2 === 0
// }

// MAP sth --> [SAME rule/logic] --> sthElse
let map = myNumArray.map(convertToEvenNumber);

// SORT Asc, Desc
myNumArray.sort(sortNumberASC)
myNumArray.sort(sortNumberDESC)
myNumArray.sort((a, b) => a - b)

// forEach Str: 12345
myNumArray.forEach(convertToNoSpaceStr)

var targetStr = ''
function convertToNoSpaceStr(value, index, array) {
    targetStr = value + ''
}





/**
 * CRUD: Create Read Update Delete
 */

console.log("Array length: ", myNumArray.length);
console.log('Value of the second num before updating: ', myNumArray[1]);
myNumArray[1] = 100
console.log('Value of the second num after updating: ', myNumArray[1]);

//=============

console.log(myNumArray[100]);
// Possibly undefined holes
// myNumArray[10] = 1000

//Adding one more on top of array
myNumArray.push(6)
console.log(myNumArray);
// 1,2,3,4,5, undefined, undefined...... 10

// Removing the last element from array
let removedValue = myNumArray.pop()
console.log(removedValue);
console.log('After removing the last element: ', myNumArray);

// Removing the first element from array
removedValue = myNumArray.shift()
console.log(removedValue);
console.log('After removing the first element: ', myNumArray);

//Deleting | splice
myNumArray.splice(1, 1)
console.log('After removing the second element: ', myNumArray);

// Inserting 
let whereToInsert = 1;
let numberOfArgToBeRemoved = 0;
let valueToBeAdded = 2
myNumArray.splice(whereToInsert, numberOfArgToBeRemoved, valueToBeAdded)
console.log('After inserting the second element: ', myNumArray);