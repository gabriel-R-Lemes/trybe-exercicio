var readlineSync = require('readline-sync');

const unidades = ['km³', 'hm³', 'dam³', 'm³', 'dm³', 'cm³', 'mm³'];

export function convert(valor: number, unidadeBase: string, unidadeConvert: string) {
  const indexBase = unidades.indexOf(unidadeBase);
  const indexDesejado = unidades.indexOf(unidadeConvert);
  const expoente = indexDesejado - indexBase;

  return valor * Math.pow(1000, expoente);
}

function exec() {
  const valor = readlineSync.question('Qual o valor para converter? ');
  const unidadeBase = readlineSync.question('Qual a unidade Base? ');
  const unidadeConvert = readlineSync.question('Qual a unidade desejada? ');

  const resultado = convert(valor, unidadeBase, unidadeConvert);

  return `${valor}${unidadeBase} é igual a ${resultado}${unidadeConvert}`;
}

exec();