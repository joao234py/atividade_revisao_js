//Elabore um programa que leia a duração de uma viagem em dias e horas. Calcule e informe a duração total da viagem em número de horas. 

const prompt = require('prompt-sync')()
let dias = parseInt(prompt("Digite a quantidade de dias: "));
let horas = parseInt(prompt("Digite a quantidade de horas: "));
let total_horas = (dias * 24) + horas;

console.log("O total de horas é:", total_horas)
