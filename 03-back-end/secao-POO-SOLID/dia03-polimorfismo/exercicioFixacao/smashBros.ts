// abstract class Character {
//   constructor(public name: string) { };
//   abstract talk(): void;
//   abstract specialMove(): void;

//   static presentation(character: Character): void {
//     console.log(`${character.name} reporting for duty!`)
//     character.talk();
//     character.specialMove();
//   }
// }

// class MeleeCharacter extends Character {
//   talk() {
//     console.log('Hello i"m an melee character!');
//   }
//   specialMove(): void {
//     console.log('Take this! Ultra super duper punch');
//   }
// }

// class LongRangeCharacter extends Character {
//   talk() {
//     console.log('Hello i"m an ranged character!');
//   }
//   specialMove(): void {
//     console.log('Take this! Ultra super duper arrow');
//   }
// }

// const yoshi = new MeleeCharacter('Yoshi Bros');
// const samus = new LongRangeCharacter('Samus');

// // console.log(yoshi.name);
// // yoshi.talk();
// // yoshi.specialMove();
// // console.log(samus.name);
// // samus.talk();
// // samus.specialMove()

// Character.presentation(yoshi);
// Character.presentation(samus)