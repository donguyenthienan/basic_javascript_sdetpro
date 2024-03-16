const readline = require("readline-sync");
while (true) {
  let inputString = readline.question("enter string here: ");
  let countWords = {};
  let splitString = inputString.split(" ");
  for (itemString of splitString) {
    countWords[itemString] = !countWords[itemString] ? 1 : countWords[itemString] + 1
  }
  console.log(countWords);
}