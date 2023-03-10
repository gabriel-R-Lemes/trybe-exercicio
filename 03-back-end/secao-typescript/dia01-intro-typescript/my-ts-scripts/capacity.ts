var readlineSync = require('readline-sync');

const unidades = ['kl', 'hl', 'dal', 'l', 'dl', 'cl', 'ml'];

export function convert(valor: number, unidadeBase: string, unidadeConvert: string) {
  const indexBase = unidades.indexOf(unidadeBase);
  const indexDesejado = unidades.indexOf(unidadeConvert);
  const expoente = indexDesejado - indexBase;

  return valor * Math.pow(10, expoente);
}

function exec() {
  const valor = readlineSync.question('Qual o valor para converter? ');
  const unidadeBase = readlineSync.question('Qual a unidade Base? ');
  const unidadeConvert = readlineSync.question('Qual a unidade desejada? ');

  const resultado = convert(valor, unidadeBase, unidadeConvert);

  return `${valor}${unidadeBase} é igual a ${resultado}${unidadeConvert}`;
}

exec();