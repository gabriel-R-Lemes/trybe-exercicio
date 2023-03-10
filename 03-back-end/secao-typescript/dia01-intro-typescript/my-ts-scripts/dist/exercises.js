"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createSimpleSentence = exports.sortInput = exports.validateEmailFormat = exports.isItAPrime = void 0;
function isItAPrime(numb) {
    for (let i = 2; i < numb; i++)
        if (numb % i === 0) {
            return false;
        }
    return numb > 1;
}
exports.isItAPrime = isItAPrime;
function validateEmailFormat(email) {
    let re = /\S+@\S+\.\S+/;
    return re.test(email);
}
exports.validateEmailFormat = validateEmailFormat;
function sortInput(numb) {
    return numb.sort(function (a, b) { return a - b; });
}
exports.sortInput = sortInput;
function createSimpleSentence(obj) {
    return `Olá, meu nome é ${obj.name} e tenho ${obj.age} anos.`;
}
exports.createSimpleSentence = createSimpleSentence;
const isOfLegalAge = (param) => {
    return !!param;
};
