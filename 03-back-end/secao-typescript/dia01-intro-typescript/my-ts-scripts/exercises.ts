export function isItAPrime(numb: number): boolean {
  for (let i = 2; i< numb; i++)
    if(numb % i === 0) {
      return false
    }
  return numb > 1;
}

export function validateEmailFormat(email: string): boolean {
  let re = /\S+@\S+\.\S+/;
  return re.test(email);
}

export function sortInput(numb: number[]) {
  return numb.sort(function(a, b){return a-b});

}

export function createSimpleSentence(obj: { name: string; age: number }) {
  return `Olá, meu nome é ${obj.name} e tenho ${obj.age} anos.`;
}

const isOfLegalAge = (param: string | boolean) => {
  return !!param
}