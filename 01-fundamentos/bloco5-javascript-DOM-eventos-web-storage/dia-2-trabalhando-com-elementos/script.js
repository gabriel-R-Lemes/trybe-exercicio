// document.getElementById('pai').lastChild;
document.querySelector('#elementoOndeVoceEsta').parentNode.style.color = 'red';
document.querySelector('#elementoOndeVoceEsta').firstElementChild.innerText = "Coisa boa em casa";
document.querySelector('#pai').firstElementChild;
document.querySelector('#elementoOndeVoceEsta').previousElementSibling;
document.querySelector('#elementoOndeVoceEsta').parentNode.nextSibling.innerText;
document.querySelector('#elementoOndeVoceEsta').nextSibling.innerHTML = 'Mudando tudo em!';
document.querySelector('#elementoOndeVoceEsta').nextSibling.nextSibling;
document.querySelector('#pai').firstElementChild.nextSibling.nextSibling.nextSibling.nextSibling;

const pai = document.querySelector("#pai");
const irmaoElementoOndeVoceEsta = document.createElement('section');
irmaoElementoOndeVoceEsta.id = 'irmaoElementoOndeVoceEsta';
pai.appendChild(irmaoElementoOndeVoceEsta);

const elementoOndeVcTa = document.querySelector("#elementoOndeVoceEsta");
const filhoElementoOndeVcTa = document.createElement('section');
filhoElementoOndeVcTa.id = 'filhoElementoOndeVcTa';
elementoOndeVcTa.appendChild(filhoElementoOndeVcTa);

const primeiroFilhoFilho = document.querySelector("#primeiroFilhoDoFilho");
const primogenito = document.createElement("section");
primogenito.id = 'filhoDoPrimeiroFilhoDoFilho';
primeiroFilhoFilho.appendChild(primogenito);

const acessoAoTerceiroFilho = document.querySelector("#filhoDoPrimeiroFilhoDoFilho").parentElement.parentElement.nextElementSibling;

// const paiDoPai = document.querySelector("#paiDoPai");
// const primeiroFilho = document.querySelector("#primeiroFilho");
// const terceiroFilho = document.querySelector("#terceiroFilho");
// const quartoEUltimoFilho = document.querySelector("#quartoEUltimoFilho");

// paiDoPai.removeChild(primeiroFilho)
// paiDoPai.removeChild(terceiroFilho)
// paiDoPai.removeChild(quartoEUltimoFilho)

const segundoEUltimoFilhoDoFilho = document.getElementById('segundoEUltimoFilhoDoFilho');
segundoEUltimoFilhoDoFilho.remove();