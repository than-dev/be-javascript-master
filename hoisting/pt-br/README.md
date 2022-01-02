## 📡 Hoisting

<hr>
<br>

### 🌾 O que é

<br>

Hoisting é basicamente um comportamento do javascript que podemos ver em tempo de execução, faz com que funções e variáveis vão para o topo do escopo em que foram declaradas.

<br>
<hr>
<br>

### 💀 const, var & let

<br>

Antes de ver alguns exemplos, precisamos entender a diferença entre essas três maneiras de declarar uma variável.

<br>

- **var**: No início do javascript tínhamos apenas _var_, atualmente não temos motivos para usá-la, pois o conceito de hoisting se aplica apenas a este tipo de declaração, e, pode ser problemático por alguns motivos que irei explicar posteriormente. Outro ponto que podemos dizer aqui é que seu valor pode ser reatribuído.

- **let**: Ao contrário de _var_, o hoisting não é aplicado a _let_, o que torna o uso do _let_ preferível, mas, assim como _var_, seu valor pode ser reatribuído.

- **const**: Assim como _let_, o hoisting não é aplicado a ela. Outro ponto sobre _const_ é que ela não pode ter seu valor reatribuído.

<br>

para ficar atento: neste caso, reatribuído significa que a variável pode ou não ter um novo valor, não pense que se aplica à manipulação de objetos e arrays, podemos fazer isso normalmente.

<br>

resumo: com _const_ e _let_ entre nós, prefira utilizá-los, quando precisar alterar o valor de alguma variável em tempo de execução, prefira _let_, do contrário, prefira const.

<br>
<hr>
<br>

### 🏇 Funcionamento

<br>

**Funções:**

```
hoistMe() // output: Estou sendo executada graças ao hoisting

function hoistMe() {
    console.log('Estou sendo executada graças ao hoisting')
}
```

No exemplo acima, o hoisting funciona corretamente, repare que chamamos a função antes de sua inicialização!

<br>
<hr>
<br>

**Variaveis:**

Neste exemplo, usamos uma _const_, referindo-a, reparamos que o hoisting não é aplicado!

```
console.log(atribuidoAConst) // output: cannot access before initialization

const atribuidoAConst = 'Vou retornar um erro porque o hoisting não se aplica em const'
```

OBS: com _let_ o resultado seria o mesmo

<br>

Agora podemos ver um comportamento interessante do hoisting

```
console.log(atribuidoAVar) // output: cannot access before initialization

const atribuidoAVar = 'Vou retornar um erro porque o hoisting não atribui o valor, apenas declara no topo'
```

executando este trecho do código acima, vemos a saída especificada, isso ocorre porque o hoisting não atribui o valor, apenas o declara no topo do escopo. Preste atenção neste comportamento, ele torna seu código propício a bugs!

<br>
<hr>
<br>

### 🌞 Considerações

<br>

Este conceito explicado funciona independente do escopo, ainda que os exemplos apresentados sejam todos de escopo global, por exemplo:

```
function outroTesteDeHoisting() {
    hoistMe()

    function hoistMe() {
        console.log('Estou sendo \'hoisted\' dentro de outra função);
    }
}

outroTesteDeHoisting() // output: Estou sendo 'hoisted' dentro de outra função
```

<br>

Acho que é bom dizer para você não usufruir desse comportamento, ele torna seu código mais frágil e menos legível e conciso.
<br>

<hr>
<br>

### 🌴 Autor

<br>

Nathan Cotrim:

- https://github.com/NathanCotrim
- https://linktr.ee/nate.sfteng
