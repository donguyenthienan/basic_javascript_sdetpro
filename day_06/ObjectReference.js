let teo = {
    name: "Teo",
    age: 18,
    bankAccount: {
        balance: 1000
    }
}

let tun = teo // 'tun' point to 'teo' so when 'teo' change 'tun' is alse changed
teo.age = 19
teo.name = "Tun"

console.log(teo);
console.log(tun);

//________________________________________________________________

let ti = {...teo} // shallow copy 'teo' then assign to 'ti' but only ONE level (nested object, array will not be copied but still pointing to the copied object)
teo.age = 19
teo.name = "Ti"
teo.bankAccount.balance = 2000

console.log(teo);
console.log(ti);

//________________________________________________________________

let beo = JSON.parse(JSON.stringify(teo))
beo.name = 'beo'
beo.bankAccount.balance = 3000

console.log(teo);
console.log(beo);

// Methods of object
//Object.keys(targetObject): return an array of property names
//Object.values(targetObject): return an array of property values
//Object.entries(targetObject): return map of pairs [key, value]