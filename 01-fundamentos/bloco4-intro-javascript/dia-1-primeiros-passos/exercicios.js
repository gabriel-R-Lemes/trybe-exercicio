// EXERCICIO 2
// const a = 20;
// const b = 32;

// let maior = (a > b);
// if (maior){
//     console.log("Constante A é maior que B");
// }
// else {
//     console.log("Constante B é maior que A");
// }

// EXERCICIO 3
// const a = 15;
// const b = 25;
// const c = 20;

// if (a > b && a > c){
//     console.log("A constante A é a maior das 3");
// }
// else if (b > a && b > c) {
//     console.log("A constante B é a maior das 3");
// }
// else if (c > a && c > b){
//     console.log("A constante C é a maior das 3");
// }
// else {
//     console.log("Elas possuem o mesmo valor");
// }

//Exercicio 4
// const x = -15;

// if (x > 0) {
//     console.log("Positivo");
// }
// else if(x < 0) {
//     console.log("Negativo");
// }
// else {
//     console.log("Zero");
// }

//Exercicio 5
// const a = 80;
// const b = 50;
// const c = 50;
// let soma = (a+b+c == 180);
//if (a < 0 || b < 0 || c < 0){
//    console.log("ERRO");
//}
// if (soma) {
//     console.log(soma);
// }
// else{
//     console.log(soma);
// }

//exercicio 6
// let peca = "cavalo";
// switch(peca) {
//     case 'bispo':
//         console.log("Diagonal");
//         break
//     case 'torre':
//         console.log("horizontal e vertical");
//         break
//     case 'cavalo':
//         console.log("Em L");
//         break
//     case 'rainha':
//         console.log("Diagonal, horizontal e vertical");
//         break
//     case 'rei':
//         console.log("Anda uma casa apenas");
//         break
//     case 'peao':
//         console.log("Uma casa para frente (duas casas no primeiro movimento)");
//     default:
//         console.log("ERRO");
// }

//exercicio 7

// let nota = 98;
// if(nota >=90){
//     console.log("Nota A");
// }
// else if(nota >= 80 && nota <90){
//     console.log("Nota B");
// }
// else if (nota >=70 && nota <80){
//     console.log("Nota C");
// }
// else if(nota >=60 && nota <70){
//     console.log("Nota D");
// }
// else if(nota >=50 && nota <60){
//     console.log("Nota E");
// }
// else if(nota <50){
//     console.log("Nota F");
// }
// else if (nota < 0 || nota > 100){
//     console.log("ERRO");
// }

//EXERCICIO 8

// const a =8;
// const b = 5;
// const c = 3;

// if (a%2 ==0 || b%2 == 0 || c%2 == 0){
//     console.log(true);
// }
// else {
//     console.log(false);
// }

// exercicio 9
// const a =8;
// const b = 5;
// const c = 3;
// if (a%2 >0 || b%2 > 0 || c%2 > 0){
//     console.log(true);
// }
// else {
//     console.log(false);
// }

//EXERCICIO 10
// const custo = 30;
// const preco = 120;

// let imposto = 30*0.2;
// let lucro = preco -custo -imposto;
// let lucroMensal = lucro *1000;

// console.log(lucroMensal);

//EXERCICIO 11
let salarioBruto = 3000;
let impostoINSS;
let impostoIR;
let salarioINSS;
let parcela;

switch(salarioBruto){
    case (salarioBruto >=5189.82) :
        impostoINSS = 570.88;
        break
    case (salarioBruto <5189.82 && salarioBruto >=2594.93):
        impostoINSS = salarioBruto*0.11;
        break
    case (salarioBruto<2594.93 && salarioBruto >=1556.95):
        impostoINSS = salarioBruto*0.09;
        break
    case (salarioBruto<1556.95):
        impostoINSS = salarioBruto*0.08;
        break
}
salarioINSS = salarioBruto-impostoINSS;

switch(salarioINSS){
    case (salarioINSS> 4664.68):
        impostoIR = salarioINSS*0.275;
        parcela =869.36;
        break
    case (salarioINSS<= 4664.68 && salarioINSS >=3751.06):
        impostoIR = salarioINSS*0.225;
        parcela = 636.13;
        break
    case (salarioINSS<3751.06 && salarioINSS >=2826.66):
        impostoIR = salarioINSS*0.15;
        parcela = 354.80;
        break
    case (salarioINSS<2826.66 && salarioINSS >= 1903.99):
        impostoIR = salarioINSS *0.075;
        parcela = 142.80;
        break
    case (salarioINSS < 1903.99):
        impostoIR = salarioINSS;
        parcela = 0;
        break
    default:
        console.log("ERRO")
}
let salarioLiquido;
salarioLiquido = salarioBruto-impostoINSS-impostoIR;
console.log(salarioLiquido)