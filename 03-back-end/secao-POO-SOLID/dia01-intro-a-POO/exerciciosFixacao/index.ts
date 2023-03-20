class TV {
  private _brand: string;
  private _size: number;
  private _resolution: number;
  private _connections: string[];
  private _connectedTo?: string;

  constructor(b: string, s: number, res: number, connec: string[], connecTo: string) {
    this._brand = b;
    this._size = s;
    this._resolution = res;
    this._connections = connec;
    this._connectedTo = connecTo;
  }

  get connectedTo(): string | undefined {
    return this._connectedTo;
  }

  set connectedTo(newValue: string | undefined){
    const connectionss = this._connections;
    const isValid = connectionss.some((e) => e === newValue);
    if (isValid) {
      this._connectedTo = newValue;
    } 
    else {
      console.log('Sorry, connection unavailable')
    }
  }

  turnOn(): void{
    console.log(`Esta é a sua TV --> Marca: ${this._brand}, Tamanho: ${this._size},
    Resolução: ${this._resolution}, Conexões: ${this._connections}`)
  }
}

const newTv = new TV('sony', 55, 1080, ['3 HDMI', '1 RGB'], 'HDMI');;
newTv.turnOn();

// --------------------------------------------------------
// class Person {
//   name: string;
//   private _weight: number;
//   private _age: number;
//   readonly height: number;

//   constructor(name: string, height: number, weight: number, age: number) {
//     this.name = name;
//     this._weight = weight;
//     this._age = age;
//     this.height = height;
//   }

// // esta sintaxe permite acessar o valor retornado via person.getWeight()
//   getWeight() {
//     return this._weight;
//   }

// // esta sintaxe permite acessar o valor retornado via person.age (como se fosse um atributo normal)
//   get age() {
//     return this._age;
//   }

// // do mesmo modo, esta sintaxe permite modificar o valor com uma simples atribuição: person.age = 42
// // mesmo que esteja ocorrendo uma validação internamente
//   set age(newValue: number) {
//     if (newValue >= 0 && newValue < 200) {
//       this._age = newValue;
//     }
//   }

//   birthday() {
//     this._age += 1;
//   }

// }

// const p1 = new Person('Maria', 171, 58, 19);
// const p2 = new Person('João', 175, 66, 18);

// ----------------------------------------------

class Email {
  private _from: string;
  private _to: string;
  private _message: string;
  private _subject: string;

  constructor(
    from: string,
    to: string,
    subject: string,
    message: string,
  ) {
    this._from = from;
    this._to = to;
    this._message = message;
    this._subject = subject;
  }

  set subject(newSubject: string) {
    if (newSubject.length <= 40) this._subject = newSubject;
  }

  get subject(): string {
    return this._subject;
  }

  get from(): string { return this._from; }

  get to(): string { return this._to; }

  get content(): string {
    return `
    From ${this._from} to ${this._to}
    ${this.subject}

    ${this._message}`;
  }
}

// -------------------------------------

class MailList {
  // Essa sintaxe no construtor é chamada `Parameter Properties`
  // É um atalho para declarar e automaticamente atribuir o valor que será recebido via parâmetro ao atributo privado `mailList`
  constructor(private mailList: Email[] = []) { }

  get all(): Email[] { return this.mailList; }

  getEmailsSentBy(mailAddress: string): Email[] {
    return this.mailList.filter((mail) => mail.from === mailAddress);
  }

  getByEmailFrom(mailAddress: string): Email[] {
     return this.mailList.filter((mail) => mail.from === mailAddress)
   }

  getEmailsTo(mailAddress: string): Email[] {
    return this.mailList.filter((mail) => mail.to === mailAddress);
  }

  getEmailsBySubject(searchString: string): Email[] {
    return this.mailList
      .filter((mail) => mail.subject.indexOf(searchString) !== -1);
  }

  addEmail(newMail: Email): void { this.mailList.push(newMail); }

  removeEmail(mailToRemove: Email): void {
    // note que como essa é uma comparação de objetos, esse filter só funcionará se a referência de `mail` e `mailToRemove` for a mesma
    this.mailList = this.mailList.filter((mail) => mail !== mailToRemove);
  }
}

// Para testar
const friendEmail = 'friend@personalmail.com';
const myEmail = 'me@personalmail.com';

const email1 = new Email(
  myEmail,
  friendEmail,
  'Car wash',
  'There\'s a new car wash in town. Did you know?',
);
const email2 = new Email(
  friendEmail,
  myEmail,
  'Reply - Car wash',
  'Great! My car is really dirty. How much do they charge?',
);
const email3 = new Email(
  myEmail,
  friendEmail,
  'Reply - Reply - Car wash',
  '$5.00, and you get a free polishing cloth',
);
const email4 = new Email(
  'me@companymail.com',
  'ceo@companymail.com',
  'Day off monday',
  `Next Tuesday is a holiday.
  Are we going to work on Monday?`,
);
const email5 = new Email(
  'ceo@companymail.com',
  'me@companymail.com',
  'Reply - Day off monday',
  'The entire company will have a day off on monday =D'
);

const personalMailList = new MailList([email1, email2, email3]);
const professionalMailList = new MailList([email4, email5]);

console.log('------ personalMailList.getByEmailFrom(\'me@personalmail.com\'):');
personalMailList.getByEmailFrom(myEmail).forEach(
  (mail) => console.log(mail.content),
);

const email6 = new Email(
  myEmail,
  'friend2@personalmail.com',
  'Day off monday',
  `Oh yes!
   My boss says we\'ll have Monday off.
   Want to go to the movies?`,
);

personalMailList.addEmail(email6);
personalMailList.addEmail(email5); // Adicionado erroneamente

console.log('------ personalMailList.getBySubject(\'Day off\'):');
personalMailList.getEmailsBySubject('Day off').forEach(
  (mail) => console.log(mail.content),
);
personalMailList.removeEmail(email5);

console.log('------ professionalMailList.all:');
professionalMailList.all.forEach(
  (mail) => console.log(mail.content),
);

console.log('------ personalMailList.all:');
personalMailList.all.forEach(
  (mail) => console.log(mail.content),
);

// -----------------------------