var numero = 42
console.log(numero);

numero = numero + 18;
console.log(numero);

// Let

let outro_numero = 42
console.log(outro_numero);

outro_numero = outro_numero + 18;
console.log(outro_numero);

let nome = 'Geek';
console.log(nome);

nome = 'University'
console.log(nome);

for (var i = 0; i < 5; i++) {
    var valor = i * 3
    console.log(valor);
}

console.log(valor);
console.log(i);

for (let i = 0; i < 5; i++) {
    var valor = i * 3
    console.log(valor);
}

console.log(valor);
console.log(i);

// Const

const TAXA = 1.44;
console.log(TAXA);

let res = 45 * TAXA;
console.log(res);

//TAXA = 5; //TypeError - constante não pode mudar
//console.log(TAXA);

const curso = { nome: 'Programação em javaScript' };
console.log(curso.nome);

// Não posso alterar o valor de uma constante
//curso = 43; // Erro!

// Podemos realizar mutação em dados contidos na constante
curso.nome = "Programação em Python"; // Mutação
console.log(curso);

/*
Dicas de como declarar variávies em JavaScript;

- A variável poderá ser alterada? (vai variar) se sim, use let
- A variável será constante? (não vai variar) se sim, use const
*/

const valor = 5;

for (let i = 0; i < valor; i++) {
    console.log(valor - i);
}