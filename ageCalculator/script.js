

let userName = "Adib";
let age = 23;

function makeUser(name, age) {
    return {
        name,
        age,
        taker: undefined,
    }
}


let user = makeUser(userName,age);


console.log( user.taker === undefined)
console.log("taker  " in user);