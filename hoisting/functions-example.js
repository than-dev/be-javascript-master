// -------------------------- EXAMPLE 1 --------------------------
function anotherHoistTest() {
    hoistMe()
    
    function hoistMe() {
        console.log('I\'m being hoisted inside another function');
    }
}

anotherHoistTest()


// -------------------------- EXAMPLE 2 --------------------------

hoistMe() // output: I execute this function by hoisting
assignedToVar() // output: Is not a function
assignedToLet() // output: cannot access before initialization
assignedToConst() // output: cannot access before initialization

function hoistMe() {
    console.log('I\'m being executed by hoisting');
}

const assignedToConst = function () {
    console.log('I will give an error cause hoisting not apply in const');
}

let assignedToLet = function () {
    console.log('I will give an error cause hoisting not apply in let');
}

var assignedToVar = function() {
    console.log('I will give an error cause hoisting just declared the var on the top of scope, and assign where it was really instanced');
}
