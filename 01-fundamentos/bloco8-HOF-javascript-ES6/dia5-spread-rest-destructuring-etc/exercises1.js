// const rectangleArea = (width, height) => width * height;

// const rectangle1 = [1, 2];
// const rectangle2 = [3, 5];
// const rectangle3 = [6, 9];
// const rectangles = [rectangle1, rectangle2, rectangle3];

// rectangles.forEach((rectangle) => {
//   console.log(rectangleArea(...rectangle)); // Altere o parâmetro recebido por rectangleArea()
// });

// const sum =(...array) => array.reduce((acc, curr) => acc + curr, 0)

// console.log(sum(4,5,8,10))


// <!-- name: nome da pessoa, age: idade, likes: gosta de, nationality: nacionalidade -->

// const alex = {
//   name: 'Alex',
//   age: 26,
//   likes: ['fly fishing'],
//   nationality: 'Australian',
// };

// const gunnar = {
//   name: 'Gunnar',
//   age: 30,
//   likes: ['hiking', 'scuba diving', 'taking pictures'],
//   nationality: 'Icelandic',
// };

// // complete a assinatura da função abaixo
// // const {name1, age2, likes3, nationality3} = gunnar
// // const {name, age, likes, nationality} = alex
// const personLikes = ({name, age, likes, nationality} ) => `${name} is ${age} years old and likes ${likes.join(', ')}.`;


// // <!-- <nome> tem <anos de idade> e gosta de <gostos da pessoa> -->

// // <!-- Retornos esperados: -->
// console.log(personLikes(alex)); // 'Alex is 26 years old and likes fly fishing.'
// console.log(personLikes(gunnar)); // 'Gunnar is 30 years old and likes hiking, scuba diving, taking pictures.'




const people = [
  {
    name: 'Nicole',
    bornIn: 1992,
    nationality: 'Australian',
  },
  {
    name: 'Harry',
    bornIn: 2008,
    nationality: 'Australian',
  },
  {
    name: 'Toby',
    bornIn: 1901,
    nationality: 'Australian',
  },
  {
    name: 'Frida',
    bornIn: 1960,
    nationality: 'Dannish',
  },
  {
    name: 'Fernando',
    bornIn: 2001,
    nationality: 'Brazilian',
  },
];
//bornIn: nascido em

// escreva filterPeople abaixo

// const filterPeople = (arr) => arr.filter(
//   ({ nationality, bornIn }) =>
//   nationality === 'Australian'  && bornIn > 1900 && bornIn <= 2000,
// );

// console.log(filterPeople(people));

// const myList = [5, 2, 3];

// const swap = ([one, two, three]) => [three, two, one]

// console.log(swap(myList));

// const palio = ['Palio', 'Fiat', 2019];
// const shelbyCobra = ['Shelby Cobra', 'Ford', 1963];
// const chiron = ['Chiron', 'Bugatti', 2016];

// const toObject = ([nome, marca, ano]) => ({nome, marca, ano})

// console.log(toObject(palio));
// console.log(toObject(shelbyCobra));
// console.log(toObject(chiron));
// const ships = [
//   {
//     name: 'Titanic',
//     length: 269.1,
//     measurementUnit: 'meters',
//   },
//   {
//     name: 'Queen Mary 2',
//     length: 1132,
//     measurementUnit: 'feet',
//   },
//   {
//     name: 'Yamato',
//     length: 256,
//     measurementUnit: 'meters',
//   },
// ];
// // measurementUnit: unidade de medida

// // escreva shipLength abaixo
// const shipLength = ({name, length, measurementUnit}) => (`${name} is ${length} ${measurementUnit} long`)
// console.log(shipLength(ships[0])); // 'Titanic is 269.1 meters long'
// console.log(shipLength(ships[1])); // 'Queen Mary 2 is 1132 feet long'
// console.log(shipLength(ships[2])); // 'Yamato is 256 meters long'

// const greet = (name, msg = 'Hi') => `${msg} ${name}`;

// console.log(greet('John')) // 'Hi John'
// console.log(greet('John', 'Good morning')) // 'Good morning John'
// console.log(greet('Isabela', 'Oi')) // 'Oi Isabela'

const yearSeasons = {
  spring: ['March', 'April', 'May'],
  summer: ['June', 'July', 'August'],
  autumn: ['September', 'October', 'November'],
  winter: ['December', 'January', 'February'],
};

const { spring, summer, autumn, winter } = yearSeasons;

const months = [...spring, ...summer, ...autumn, ...winter];

console.log(months)