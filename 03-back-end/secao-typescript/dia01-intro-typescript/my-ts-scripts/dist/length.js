"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.convert = void 0;
var readlineSync = require('readline-sync');
const unidades = ['km', 'hm', 'dam', 'm', 'dm', 'cm', 'mm'];
function convert(valor, unidadeBase, unidadeConvert) {
    const indexBase = unidades.indexOf(unidadeBase);
    const indexDesejado = unidades.indexOf(unidadeConvert);
    const expoente = indexDesejado - indexBase;
    return valor * Math.pow(10, expoente);
}
exports.convert = convert;
function exec() {
    const valor = readlineSync.question('Qual o valor para converter? ');
    const unidadeBase = readlineSync.question('Qual a unidade Base? ');
    const unidadeConvert = readlineSync.question('Qual a unidade desejada? ');
    const resultado = convert(valor, unidadeBase, unidadeConvert);
    console.log(`${valor}${unidadeBase} é igual a ${resultado}${unidadeConvert}`);
}
exec();
