// Digamos que o número de chinchilas de uma fazenda triplica a cada ano, após o primeiro ano. 
// Elaborar um programa que leia o número inicial de chinchilas e anos e informe ano a ano o número médio previsto de chinchilas da fazenda. 
// Validar a entrada para que o número inicial de chinchilas seja maior ou igual a 2 (um casal)

const prompt = require('prompt-sync')()
let chinchilas = parseInt(prompt("Digite o número inicial de chinchilas: "));
let anos = parseInt(prompt("Digite a quantidade de anos: "));

for (let i = 0; i < anos; i++) {
    chinchilas = chinchilas * 3;
    console.log("O número médio de chinchilas é:", chinchilas)
}
