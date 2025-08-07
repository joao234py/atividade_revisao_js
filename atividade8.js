//Elabore um programa para uma pizzaria, o qual leia o valor total de uma conta e quantos clientes vão pagá-la. Calcule e informe o valor a ser pago por cliente.

const prompt = require('prompt-sync')()
let valor_total = parseFloat(prompt("Digite o valor total da conta: "));
let quantidade_clientes = parseInt(prompt("Digite a quantidade de clientes: "));
let valorPor_cliente = valor_total / quantidade_clientes;

console.log("O valor a ser pago por cliente é:", valorPor_cliente)