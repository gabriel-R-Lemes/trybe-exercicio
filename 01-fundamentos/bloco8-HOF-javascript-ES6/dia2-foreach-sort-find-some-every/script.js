// const emailListInData = [
//   'roberta@email.com',
//   'paulo@email.com',
//   'anaroberta@email.com',
//   'fabiano@email.com',
// ];

// const showEmailList = (email) => {
//   console.log(`O email ${email} esta cadastrado em nosso banco de dados!`);
// };

// emailListInData.forEach(showEmailList)

// const numbers = [19, 21, 3, 45, 30, 22, 15];

// const findDivisibleBy3And5 = numbers.find((number) => number % 3 === 0 && number % 5 === 0);

// console.log(findDivisibleBy3And5)

// const names = ['João', 'Fernando', 'Irene', 'Maria'];

// const findNameWithFiveLetters = names.find((nome) => nome.length >= 5)

// console.log(findNameWithFiveLetters);

// const musicas = [
//   { id: '31031685', title: 'Partita in C moll BWV 997' },
//   { id: '31031686', title: 'Toccata and Fugue, BWV 565' },
//   { id: '31031687', title: 'Chaconne, Partita No. 2 BWV 1004' },
// ]

// function findMusic(id) {
//   const result = musicas.find((musica) => musica.id === id);
//   return result
// }

// console.log(findMusic('31031687'))

// const names = ['Mateus', 'José', 'Ana', 'Cláudia', 'Bruna'];

// const hasName = (arr, name) => arr.some((nome) => nome === name);

// console.log(hasName(names, 'José'))

const people = [
  { name: 'Mateus', age: 18 },
  { name: 'José', age: 13 },
  { name: 'Ana', age: 23 },
  { name: 'Cláudia', age: 20 },
  { name: 'Bruna', age: 19 },
];

const verifyAges = (arr, minimumAge) => arr.every((obj) => obj.age >= minimumAge)

console.log(verifyAges(people, 18));