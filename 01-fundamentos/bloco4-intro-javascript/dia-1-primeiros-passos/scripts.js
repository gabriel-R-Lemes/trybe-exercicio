const currentHour = 16;
let message= "";
if (currentHour >= 22){
    message = "Não deveríamos comer nada, está na hora de dormir";
}
else if (currentHour >=18 && currentHour< 22){
    message = "Rango da noite, vamos jantar :D";
}
else if (currentHour >=14 && currentHour < 18){
    message = "vamos fazer um bolo para o café da tarde?";
}
else if (currentHour >= 11 && currentHour < 14) {
    message = "Hora do Almoço!!!";
}
else if (currentHour >= 4 && currentHour < 11){
    message = "Hmmmm, cheiro de café recém passado";
}
console.log(message);