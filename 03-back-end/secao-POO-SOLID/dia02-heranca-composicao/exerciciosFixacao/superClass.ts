class SuperClass {
  constructor(public isSuper: boolean = true) { }

  sayHello() {
    console.log('Olá mundo!');
  }
}

class SubClass extends SuperClass {
  constructor(public isSuper: boolean){
    super(isSuper = false);
  }
}

const myFunc = (obj: SuperClass) => {
  return obj.isSuper ? 'Super!' : 'Sub!';
}

const obj1 = new SuperClass();
const obj2 = new SubClass(false);

myFunc(obj1);
myFunc(obj2);
// obj1.sayHello;
// obj2.sayHello;