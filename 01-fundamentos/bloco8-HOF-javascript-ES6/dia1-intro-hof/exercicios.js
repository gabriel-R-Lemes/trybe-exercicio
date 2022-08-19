const newId = (nomeCompleto) => {
  const email = nomeCompleto.split(' ').join('_') + '@trybe.com';
  const objeto = {
    nomeCompleto: nomeCompleto,
    email: email,
  }
  return objeto;
}
const newEmployees = (name, callback) => {
  const employees = {
    id1: callback(name)
  }
  return employees;
};


// console.log(newEmployees('Gabriel Rodrigues Lemes', newId));



const numeroDaSorte = (numero) => {
  let numeroSorteado = Math.random() * 100;
  if (numeroSorteado === numero) {
    return true;
  } else {
    return false;
  }
}
const resultado = (aposta, callback) => {
  let test = callback(aposta);
  
  if (test == true) {
    console.log('Parabéns, você ganhou!')
  } else {
    console.log('Tente novamente')
  }
  
}


// console.log(resultado(15, numeroDaSorte));

const gabarito = (arrayCerto, arrayStudent, callback) => callback(arrayCerto, arrayStudent);

const compara = (array1, array2) => {
  let nota = 0;
    for(let i in array1){
      if (array1[i] == array2[i]){
        nota += 1;
      } else {
        nota -= 0.5;
      }
    }
  return nota;
}

const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

console.log(gabarito(RIGHT_ANSWERS, STUDENT_ANSWERS, compara));