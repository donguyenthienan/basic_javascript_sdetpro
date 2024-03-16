const readline = require("readline-sync");
while (true) {
  let inputString = readline.question("enter string here: ");
  let countWords = {};
  let splitString = inputString.split(" ");
  for (itemString of splitString) {
    if (countWords[itemString] != null) {
      countWords[itemString] += 1;
    } else {
      countWords[itemString] = 1;
    }
  }
  console.log(countWords);
}