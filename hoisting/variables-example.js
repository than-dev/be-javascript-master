// ---------- Example inside a function

function hoistTest() {
    console.log(any === undefined); // output: true
    
    var any = 'ola'
}

hoistTest()

// ---------- Example in global scope
console.log(hoistMe); // undefined, hoisting just declare, the assignment occurs where it was implemented
console.log(hoistMeConst); // cannot access before initialization
console.log(hoistMeLet); // cannot access before initialization

var hoistMe = 'any'
const hoistMeConst = 'any'
let hoistMeLet = 'any'
