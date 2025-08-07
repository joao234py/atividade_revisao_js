//Elabore um programa que liste os números em ordem decrescente com o valor inicial informado pelo usuário.
const prompt = require('prompt-sync')()
let num = parseInt(prompt("Digite um número: "));

for (let i = num; i >= 0; i--) {
    console.log(i)
}
