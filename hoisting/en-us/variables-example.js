// ---------- Example inside a function
function hoistTest() {
    console.log(handle === undefined); // output: true
    
    var handle = '\'hoisted\''
}

hoistTest()

// ---------- Example in global scope
console.log(hoistMe); // output: undefined, hoisting just declare, the assignment occurs where it was implemented
console.log(hoistMeConst); // output: cannot access before initialization
console.log(hoistMeLet); // output: cannot access before initialization

var hoistMe = '\'hoisted\''
const hoistMeConst = '\'hoisted\''
let hoistMeLet = '\'hoisted\''

// ---------- Extra (if we assign the value before and declare it later the hoisting is done successfully)
handle = '\'hoisted\'';

console.log(handle); // output: 'hoisted'

var handle;