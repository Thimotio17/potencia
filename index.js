const prompt = require('prompt-sync')();

console.log("Vamos calcular potência");


let base = prompt("Base: ");
base = +base; /


let expoente = +prompt("Expoente: ");

let resultado = 1;

for (let j = 0; j < expoente; j++) {
    resultado *= base;
}

console.log("Resultado:", resultado);
