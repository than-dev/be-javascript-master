// ---------- Exemplo no escopo de uma função

function testeDeHoisting() {
    console.log(handle === undefined); // output: true
    
    var handle = '\'hoisted\''
}

testeDeHoisting()

// ---------- Exemplo no escopo global
console.log(hoistMe); // undefined, hoisting apenas declara, a atribuição ocorre onde foi implementada
console.log(hoistMeConst); // não pode ser acessada antes da inicialização
console.log(hoistMeLet); // não pode ser acessada antes da inicialização

var hoistMe = '\'hoisted\''
const hoistMeConst = '\'hoisted\''
let hoistMeLet = '\'hoisted\''
