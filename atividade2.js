// Elabore um programa que leia a velocidade permitida em uma estrada e a velocidade de um condutor. 
// Se a velocidade for inferior ou igual à permitida, exiba “Sem Multa”. 
// Se a velocidade for de até 20% maior que a permitida, exiba “Multa Leve”. E, se a velocidade for superior a 20% da velocidade permitida, exiba “Multa Grave” 

const prompt = require('prompt-sync')()
let velocidade_permitida = parseInt(prompt("Digite a velocidade permitida: "));
let velocidade_condutor = parseInt(prompt("Digite a velocidade do condutor: "));

if (velocidade_condutor <= velocidade_permitida) {
    console.log("Sem multa")
} else if (velocidade_condutor > velocidade_permitida && velocidade_condutor <= velocidade_permitida * 1.2) {
    console.log("Multa leve")
} else {
    console.log("Multa grave")
}
