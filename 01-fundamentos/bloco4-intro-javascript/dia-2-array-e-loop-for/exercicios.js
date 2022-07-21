let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
//EXERCICIO I
// for (let i =0; i < numbers.length; i+=1){
//     console.log(numbers[i]);
// }

//EXERCICIO II
// let soma = 0;
// for (let i = 0; i <numbers.length; i+=1){
//     soma = numbers[i] + soma;
// }
// console.log(soma);

//EXERCICIO III
// let soma = 0;
// for (let i = 0; i <numbers.length; i+=1){
//     soma = numbers[i] + soma;
// }
// console.log(soma / numbers.length);

//EXERCICIO IV
// let soma = 0;
// for (let i = 0; i <numbers.length; i+=1){
//     soma = numbers[i] + soma;
// }
// let mediaAri = (soma / numbers.length);
// if (mediaAri > 20){
//     console.log("valor maior que 20");
// } else{
//     console.log("valor menor ou igual a 20");
// }

//EXERCICIO V
// let maiorNum = 0;
// for (let i=0; i<numbers.length; i+=1){
//     if(numbers[i] > maiorNum){
//         maiorNum = numbers[i];
//     }
// }
// console.log(maiorNum);

//EXERCICIO VI
// let cont =0;
// for (let i=0; i<numbers.length; i+=1){
//     if(numbers[i] % 2 >0){
//         cont +=1;
//     }
// }
// console.log("Existem " + cont + " numeros ímpares");

//EXERCICIO VII
// let menorNum = 1000;
// for (let i=0; i<numbers.length; i+=1){
//     if(numbers[i] < menorNum){
//         menorNum = numbers[i];
//     }
// }
// console.log(menorNum);

//EXERCICIO IIX
// let array15 =[];
// for (let i = 1; i <16; i+=1){
//     array15.push(i);
// }
// console.log(array15);

//EXERCICIO IX
// let div = []
// let array15 =[];
// for (let i = 1; i <16; i+=1){
//     array15.push(i);
//     div.push(i/2);
// }
// console.log(div);

//EXERCICIO BONUS I
//numbers.sort((a, b) => a -b);
//console.log (numbers);

//EXERCICIO BONUS II
// numbers.sort((a,b) => b-a);
// console.log(numbers);

//EXERCICIO BONUS III
// let numberMult =[];
// for (let i = 0; i < numbers.length; i+=1){
//     if (i < 9){
//         let vezes = numbers[i] * numbers[i+1];
//         numberMult.push(vezes)
//     } else {
//         vezes = numbers[i] * 2;
//         numberMult.push(vezes);
//     }
// }
// console.log(numberMult);