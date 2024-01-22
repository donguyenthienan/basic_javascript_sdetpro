function calculateBMI(weight, height) {
    let bmi = weight / Math.pow(height,2)
    var expectedWeight = 0
    if(bmi < 18.5){
        console.log(`You are Underweight`)
        expectedWeight = 18.5 * Math.pow(height,2)
        console.log(`You should increase at least ${Math.round(expectedWeight - weight)} kg`)
    } else if(bmi >= 18.5 && bmi < 25){
        console.log(`You are Normal weight`)
        console.log("You are perfect now")
    } else if(bmi >= 25 && bmi < 30){
        console.log(`You are Overweight`)
        expectedWeight = 25 * Math.pow(height,2)
        console.log(`You should diet at least ${Math.round(weight - expectedWeight)} kg`)
    } else {
        console.log(`You are Obesity`)
        expectedWeight = 25 * Math.pow(height,2)
        console.log(`You should diet at least ${Math.round(weight - expectedWeight)} kg`)
    }
}

calculateBMI(80,1.7)

