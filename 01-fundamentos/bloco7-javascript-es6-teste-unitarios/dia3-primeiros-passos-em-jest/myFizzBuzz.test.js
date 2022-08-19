const myFizzBuzz = require('./myFizzBuzz.js');

describe('Teste da função FizzBuzz', () => {
  test('Testando se com numero divisivel por 3 e 5 retorna fizzbuzz', () => {
    expect(myFizzBuzz(15)).toMatch('fizzbuzz');
  })

  test('Testando se com numero divisivel por 3 retorna fizz', () => {
    expect(myFizzBuzz(9)).toMatch('fizz');
  })

  test('Testando se com numero divisivel por 5 retorna buzz', () => {
    expect(myFizzBuzz(5)).toMatch('buzz');
  })

  test('Testando se com numero não divisivel por 3 e 5 retorna ele mesmo', () => {
    expect(myFizzBuzz(4)).toBe(4);
  })

  test('Testando se com parâmetro diferente de numero retorna false', () => {
    expect(myFizzBuzz('15')).toBeFalsy();
  })
})