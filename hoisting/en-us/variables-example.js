// ---------- Example inside a function
function hoistTest() {
    console.log(handle === undefined); // output: true
    
    var handle = '\'hoisted\''
}

hoistTest()

// ---------- Example in global scope
console.log(hoistMe); // undefined, hoisting just declare, the assignment occurs where it was implemented
console.log(hoistMeConst); // cannot access before initialization
console.log(hoistMeLet); // cannot access before initialization

var hoistMe = '\'hoisted\''
const hoistMeConst = '\'hoisted\''
let hoistMeLet = '\'hoisted\''
