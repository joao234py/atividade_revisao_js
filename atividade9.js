// Elabore um programa para uma loja, o qual leia o preço de um produto e informe as opções de pagamento da loja. Calcule e informe o valor para pagamento à vista com 10% de desconto e o valor em 3x. 

const prompt = require('prompt-sync')()
let preco = parseFloat(prompt("Digite o preco do produto: "));
let desconto = preco * 0.1;
let parcela = preco / 3;

console.log("O preco do produto e:", preco)
console.log("O preco com 10% de desconto e:", desconto)
console.log("O preco em 3x e:", parcela)
