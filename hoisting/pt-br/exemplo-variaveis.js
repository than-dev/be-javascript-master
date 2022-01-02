// ---------- Exemplo no escopo de uma função

function testeDeHoisting() {
    console.log(auxiliar === undefined); // saida: true
    
    var auxiliar = '\'hoisted\'';
};

testeDeHoisting();

// ---------- Exemplo no escopo global
console.log(hoistMe); // saida: undefined, hoisting apenas declara, a atribuição ocorre onde foi implementada
console.log(hoistMeConst); // saida: não pode ser acessada antes da inicialização
console.log(hoistMeLet); // saida: não pode ser acessada antes da inicialização

var hoistMe = '\'hoisted\'';
const hoistMeConst = '\'hoisted\'';
let hoistMeLet = '\'hoisted\'';


// ---------- Extra (se atribuirmos o valor previamente e declararmos depois o hoisting é feito com sucesso)
auxiliar = '\'hoisted\'';

console.log(auxiliar); // saida: 'hoisted'

var auxiliar;
