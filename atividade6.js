//Elabore um programa que leia o valor de um jantar. Calcule e informe o valor da taxa do garçom (10%) e o valor total a ser pago.

const prompt = require('prompt-sync')()
let valor_jantar = parseFloat(prompt("Digite o valor do jantar: "));
let taxa_garcom = valor_jantar * 0.1;
let valor_total = valor_jantar + taxa_garcom;  

console.log("O valor do jantar é:", valor_jantar)
console.log("O valor da taxa do garçom é:", taxa_garcom)
console.log("O valor total a ser pago é:", valor_total)
