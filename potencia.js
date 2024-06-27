/* const prompt = require('prompt-sync')()
let numero = prompt('diga um numero')

console.log(typeof numero)
 numero = Number(numero)
 console.log(typeof numero) */

 
 

 process.stdin.on("data", function(data) {
    let palavra = data.toString().trim();
    let anagrama = [""];

    for (let char of palavra) {
        let tempanagram = [];
        for (let anagram of anagrama) {
            for (let i = 0; i <= anagram.length; i++) {
                tempanagram.push(anagram.slice(0, i) + char + anagram.slice(i));
            }
        }
        anagrama = tempanagram;
    }

    console.log(`Anagramas de ${palavra}:`, anagrama);
    process.exit();
});

console.log("Insira uma palavra para mostrar quantos anagramas tem.");

