//EXERCICIO I
// let info = {
//     personagem: 'Margarida',
//     origem: 'Pato Donald',
//     nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
// };
// // console.log("Bem vinda, " + info.personagem);
// info['recorrente'] = 'Sim';
// // console.log(info)

// // for(let key in info){
// //     console.log(key);
// // }

// for (let key in info){
//     console.log(info[key]);
// }
// let info2 = {
//     personagem: 'Tio Patinhas',
//     origem: 'Christmas on Bear Mountain, Dell\'\s Four Color Comics #178',
//     nota: 'O último MacPatinhas',
//     recorrente: 'Sim',
// };
// for (let key in info){
//     console.log(info[key] + " " + info2[key]);
// }

// let leitor = {
//     nome: 'Julia',
//     sobrenome: 'Pessoa',
//     idade: 21,
//     livrosFavoritos: [
//       {
//         titulo: 'O Pior Dia de Todos',
//         autor: 'Daniela Kopsch',
//         editora: 'Tordesilhas',
//       },
//     ],
//   }

//   console.log("O livro favorito de " + leitor.nome + " " + leitor.sobrenome + " se chama '" + leitor['livrosFavoritos'][0].titulo + "'");

//   leitor['livrosFavoritos'].push([{
//     titulo: 'Harry Potter e o Prisioneiro de Azkaban',
//     autor: 'JK Rowling',
//     editora: 'Rocco',
//   }])

//   console.log(leitor.nome + " tem " + leitor.livrosFavoritos.length + " livros favoritos.");


//EXERCICIO II

// function verificaPalindromo(palavra) {
//     let inverso = '';
//     inverso = palavra.split('').reverse().join('');

//     if(inverso === palavra){
//         return true;
//     } else {
//         return false;
//     }
// }
// console.log(verificaPalindromo('arara'));

// function maiorInteiro(myArray) {
//     let indiceMaior;
//     let verificador = 0;
//     for (let index in myArray){
//         if (myArray[index] > verificador){
//             indiceMaior = index
//             verificador = myArray[index]
//         }
//     }
//     return indiceMaior;
// }

// let test = [2, 3, 6, 7, 10, 1];

// console.log(maiorInteiro(test));

// function menorInteiro(myArray) {
//     let indiceMenor;
//     let verificador = Infinity;
//     for (let index in myArray){
//         if (myArray[index] < verificador){
//             indiceMenor = index
//             verificador = myArray[index]
//         }
//     }
//     return indiceMenor;
// }

// let test = [2, 4, 6, 7, 10, 0, -3];

// console.log(menorInteiro(test));

//Esse peguei do gabarito '-'
// function maiorPalavra(palavras) {
//     let maiorPalavra = palavras[0];
//     for (let indice in palavras) {
//       if (maiorPalavra.length < palavras[indice].length) {
//         maiorPalavra = palavras[indice];
//       }
//     }
  
//     return maiorPalavra;
//   }
  
//   console.log(maiorPalavra(['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']));

// function maisRepetido(numeros) {
//     let contRepetido = 0;
//     let contNumero = 0;
//     let indexNumeroRepetido = 0;
  
//     for (let index in numeros) {
//       let verificaNumero = numeros[index];
//       for (let index2 in numeros) {
//         if (verificaNumero === numeros[index2]) {
//           contNumero += 1;
//         }
//       }
//       if (contNumero > contRepetido) {
//         contRepetido = contNumero;
//         indexNumeroRepetido = index;
//       }
//       contNumero = 0;
//     }
  
//     return numeros[indexNumeroRepetido];
//   }
  
//   console.log(maisRepetido([2, 3, 2, 5, 8, 2, 3]));

