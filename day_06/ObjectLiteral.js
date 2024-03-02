// Create
let teo = {
    name: "Teo",
    age: 18,
    sayHello: function () {
        console.log('Hello world');
    },
    secretInfo: {

    }
}

//Read: dot notation, [] (use to access properties/keys have space) syntax
console.log(teo.name);
console.log(teo['age']);

//Update
teo.name = 'An'
teo['age'] = 30
teo.job = "Automation Engineer"
console.log(teo);

//Delete
delete teo['sayHello']
delete teo.secretInfo
console.log(teo);