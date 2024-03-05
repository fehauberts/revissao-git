// exercicios de operações de calculos

const num1 = 236;
const num2 = 95;

// soma
let soma = num1 + num2;

// console.log("Resultado: " + soma + " !");
console.log("Resultado da soma: ", soma)
// console.log(`Resultado ${ soma } mil`);

// subtração -
let subtração = num1 - num2;

console.log("Resultado da subtração: ", subtração)

// multiplicação *
let multiplicacao = num1 * num2;

console.log("Resultado da multiplicação: ", multiplicacao)

// divisão 
let divisao = num1 / num2;

console.log("Resultado da divisão: ", divisao)

// numeros par ou impar
let par_impar_num1 = num1 % 2

if (par_impar_num1 === 0) {
    console.log("Número 1 é Par");
} else {
    console.log("Número 1 é impar")
}

let par_impar_num2 = num2 % 2

if (par_impar_num2 === 0) {
    console.log("Número 2 é Par");
} else {
    console.log("Número 2 é impar")
}