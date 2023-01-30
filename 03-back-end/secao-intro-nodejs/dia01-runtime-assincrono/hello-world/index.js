const readline = require('readline-sync')

const name = readline.question("Qual o seu nome? ");
const idade = readline.questionInt("Qual a sua idade? ");

console.log(`Olá, ${name}!! Voce tem  ${idade} anos de idade!!!`);