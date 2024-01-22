function evaluteNumber(num) {
    let isOdd = num % 2 ? true : false
    if(isOdd){
        console.log(`${num} is odd number`)
    } else {
        console.log(`${num} is even number`)
    }
}

evaluteNumber(11)