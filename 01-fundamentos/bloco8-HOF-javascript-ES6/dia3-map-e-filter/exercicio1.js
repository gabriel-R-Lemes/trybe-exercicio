const books = [
  {
    id: 1,
    name: 'As Crônicas de Gelo e Fogo',
    genre: 'Fantasia',
    author: {
      name: 'George R. R. Martin',
      birthYear: 1948,
    },
    releaseYear: 1991,
  },
  {
    id: 2,
    name: 'O Senhor dos Anéis',
    genre: 'Fantasia',
    author: {
      name: 'J. R. R. Tolkien',
      birthYear: 1892,
    },
    releaseYear: 1954,
  },
  {
    id: 3,
    name: 'Fundação',
    genre: 'Ficção Científica',
    author: {
      name: 'Isaac Asimov',
      birthYear: 1920,
    },
    releaseYear: 1951,
  },
  {
    id: 4,
    name: 'Duna',
    genre: 'Ficção Científica',
    author: {
      name: 'Frank Herbert',
      birthYear: 1920,
    },
    releaseYear: 1965,
  },
  {
    id: 5,
    name: 'A Coisa',
    genre: 'Terror',
    author: {
      name: 'Stephen King',
      birthYear: 1947,
    },
    releaseYear: 1986,
  },
  {
    id: 6,
    name: 'O Chamado de Cthulhu',
    genre: 'Terror',
    author: {
      name: 'H. P. Lovecraft',
      birthYear: 1890,
    },
    releaseYear: 1928,
  },
];

// Adicione o código do exercício aqui:

const stringArray = books.map((element) => {
  const newString = `${element.name} - ${element.genre} - ${element.author.name}`;
  
  return newString;
});
console.log(stringArray)

const objetoArray = books.map((element) => {
  const result = {};
  result.author = element.author.name;
  result.age = element.releaseYear - element.author.birthYear;
  return result
})

objetoArray.sort((a,b) => a.age > b.age ? 1 : -1);
console.log(objetoArray);


const filterArray = books.filter((element) => (element.genre === 'Fantasia' || element.genre == 'Ficção Científica'))
console.log(filterArray)

const sixtyAge = books.filter((element) => 2022 -element.releaseYear >= 60);

sixtyAge.sort((a,b) => 2022-b.releaseYear > 2022-a.releaseYear ? 1 : -1)
console.log(sixtyAge)

const nameArray = filterArray.map((element) => element.author.name)
nameArray.sort();
console.log(nameArray);

const nameSixtyAge = sixtyAge.map((element) => element.name);
console.log(nameSixtyAge)

// const authorWith3DotsOnName = () => {
//   const test = books.filter((book) => (book.author.name[1] === '.' && book.author.name[4] === '.' && book.author.name[7] === '.'));
//   return test.name;
// }
function authorWith3DotsOnName() {
  return books.filter((book) => (
    book.author.name[1] === '.'
    && book.author.name[4] === '.'
    && book.author.name[7] === '.'
  ))[0].name;
}
console.log(authorWith3DotsOnName)
