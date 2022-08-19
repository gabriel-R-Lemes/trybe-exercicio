const wakingUp = () => 'Acordando!!'
const coffeTime = () => 'Bora tomar café!!'
const sleepy = () => 'Partiu dormir!!'

const doingThings =(func) => console.log(func())

doingThings(wakingUp);
doingThings(coffeTime);
doingThings(sleepy);
