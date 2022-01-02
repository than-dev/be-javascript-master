// -------------------------- EXEMPLO 1 --------------------------
function outroTesteDeHoisting() {
    hoistMe()
    
    function hoistMe() {
        console.log('\'hoisted\'');
    }
}

outroTesteDeHoisting() // output: 'hoisted'


// -------------------------- EXEMPLO 2 --------------------------

hoistMe() // output: 'hoisted'
atribuidoAVar() // output: atribuidoAVar não é uma função
atribuidoALet() // output: não pode ser acessada antes da inicialização
atribuidoAConst() // output: não pode ser acessada antes da inicialização

function hoistMe() {
    console.log('\'hoisted\'');
}

const atribuidoAConst = function () {
    console.log('\'hoisted\'');
}

let atribuidoALet = function () {
    console.log('\'hoisted\'');
}

var atribuidoAVar = function() {
    console.log('\'hoisted\'');
}
