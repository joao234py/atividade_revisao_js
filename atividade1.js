//1- Elabore um programa que leia um número. Informe se ele é par ou ímpar
const prompt = require('prompt-sync')()
let num = parseInt(prompt("digite um número: "));
if (num % 2 == 0) {
    console.log(num, "é par")
} else {
    console.log(num, "é impar")
}