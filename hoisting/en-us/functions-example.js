// -------------------------- EXAMPLE 1 --------------------------
function anotherHoistTest() {
    hoistMe()
    
    function hoistMe() {
        console.log('hoisted');
    }
}

anotherHoistTest() // output: hoisted


// -------------------------- EXAMPLE 2 --------------------------

hoistMe() // output: hoisted
assignedToVar() // output: Is not a function
assignedToLet() // output: cannot access before initialization
assignedToConst() // output: cannot access before initialization

function hoistMe() {
    console.log('hoisted');
}

const assignedToConst = function () {
    console.log('hoisted');
}

let assignedToLet = function () {
    console.log('hoisted');
}

var assignedToVar = function() {
    console.log('hoisted');
}
