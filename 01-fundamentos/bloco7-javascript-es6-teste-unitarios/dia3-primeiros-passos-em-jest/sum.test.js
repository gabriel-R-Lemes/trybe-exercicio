const sum = require('./sum.js');

describe ('Testando a função sum', () => {
  test('Testa se o retorno de (4, 5) é 9', () =>{
    expect(sum(4, 5)).toBe(9);
  });

  test('Testa se o retorno de (0, 0) é 0', () =>{
    expect(sum(0, 0)).toBe(0);
  });

  test('Testa se retorna um erro ao inserir uma string', () =>{
    expect(() => sum(4, '5')).toThrow(Error);
  });
})