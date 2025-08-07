// Elabore um programa que leia dois números. Calcule e informe a soma desses números.

const prompt = require('prompt-sync')()
let num1 = parseInt(prompt("Digite o primeiro numero: "));
let num2 = parseInt(prompt("Digite o segundo numero: "));
let soma = num1 + num2;

console.log("A soma entre", num1, "e", num2, "é:", soma)
