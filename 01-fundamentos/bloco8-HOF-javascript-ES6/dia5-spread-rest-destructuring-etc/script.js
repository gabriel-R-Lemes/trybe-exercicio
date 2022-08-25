// // let comida = 'gato';
// // let animal = 'água';
// // let bebida = 'arroz';

// // console.log(comida, animal, bebida); // arroz gato água

// // // Utilizando array destructuring, faça com que os valores apareçam nas variáveis correspondentes ao seu verdadeiro tipo

// // [comida, animal, bebida] = [bebida, comida, animal]

// // console.log(comida, animal, bebida);

// let numerosPares = [1, 3, 5, 6, 8, 10, 12];

// console.log(numerosPares); // [6, 8, 10, 12];

// // Utilize array destructuring para produzir o resultado esperado pelo console.log abaixo

// [,,, ...numerosPares] = numerosPares

// console.log(numerosPares);

const getNationality = ({ firstName, nationality = 'Brazilian'}) => `${firstName} is ${nationality}`;

const person = {
  firstName: 'João',
  lastName: 'Jr II',
};

const otherPerson = {
  firstName: 'Ivan',
  lastName: 'Ivanovich',
  nationality: 'Russian',
};

console.log(getNationality(otherPerson)); // Ivan is Russian
console.log(getNationality(person));