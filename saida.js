// =====================================
// PARTE 1 - TIPOS DE SAÍDA
// =====================================

// Exibindo uma mensagem no console
console.log("Olá, mundo!");

// Exibindo um alerta no navegador
alert("Olá! Meu nome é Gabriel.");

// Exibindo uma mensagem na página HTML
// - Esse metodo foi descontinuado - document.write("<p>Você completou a Parte 1!</p>"); -
document.getElementById("mensagem").textContent = "Mensagem exibida na página HTML usando textContent.";


// =====================================
// PARTE 2 - DECLARAÇÕES E COMENTÁRIOS
// =====================================

// Declara uma variável chamada idade
// e atribui o valor 25
let idadeExemplo = 25;

// Exibindo o valor da variável no console
console.log(idadeExemplo);

// Código com a sintaxe corrigida
let nome = "Ana";
console.log(nome);


// =====================================
// PARTE 3 - VARIÁVEIS
// =====================================

// Dados pessoais
const nomeCompleto = "Gabriel Henrique Bramante Guimarães";
let minhaIdade = 21;
let cidade = "Contagem";

// Exibindo as informações no console
console.log("Nome:", nomeCompleto);
console.log("Idade:", minhaIdade);
console.log("Cidade:", cidade);


// =====================================
// PARTE 4 - OPERADORES
// =====================================

// 1. Operadores aritméticos

let numero1 = 20;
let numero2 = 6;

console.log("Soma:", numero1 + numero2);
console.log("Subtração:", numero1 - numero2);
console.log("Multiplicação:", numero1 * numero2);
console.log("Divisão:", numero1 / numero2);
console.log("Resto da divisão:", numero1 % numero2);


// 2. Operadores de comparação

console.log("São iguais?", numero1 === numero2);
console.log("São diferentes?", numero1 !== numero2);

if (numero1 === numero2) {
    console.log("Os números são iguais.");
} else {
    console.log("Os números são diferentes.");
}


// 3. Operadores lógicos

let numero = 25;

// Verifica se é maior que 10 E menor que 50
if (numero > 10 && numero < 50) {
    console.log("O número está entre 10 e 50.");
} else {
    console.log("O número não está entre 10 e 50.");
}

// Verifica se é menor que 5 OU maior que 20
if (numero < 5 || numero > 20) {
    console.log("O número é menor que 5 ou maior que 20.");
} else {
    console.log("O número não atende à condição.");
}
