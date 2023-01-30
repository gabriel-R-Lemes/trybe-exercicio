const readline = require('readline-sync');


const main = () => {
  const bmiCalc = (w, h) => {
    const bmi = w / ((h * h)/ 10000);
    
    if(bmi <=  18.5){
      return console.log(`Your Body Mass Index is ${(w / ((h * h)/ 10000))}, and you're considered below your ideal weight`);
    }
    if(bmi > 18.5  && bmi <=  24.9 ){
      return console.log(`Your Body Mass Index is ${(w / ((h * h)/ 10000))}, and you're considered on your ideal weight`);
    }
    if(24.9 < bmi && bmi <=29.9){
      return console.log(`Your Body Mass Index is ${(w / ((h * h)/ 10000))}, and you're considered above your ideal weight`);
    }
    if(29.9 < bmi && bmi <=34.9){
      return console.log(`Your Body Mass Index is ${(w / ((h * h)/ 10000))}, and you're considered overweight stage I`);
    }
    if(34.9 < bmi && bmi <= 39.9){
      return console.log(`Your Body Mass Index is ${(w / ((h * h)/ 10000))}, and you're considered overweight stage II`);
    }
    else{
      return console.log(`Your Body Mass Index is ${(w / ((h * h)/ 10000))}, and you're considered overweight stage III or IV`);
    }
  } 
  
  const height = readline.question("What's your height? ");
  const weight = readline.questionInt("Whats your weight? ");

  return bmiCalc(weight, height);
  // const getStats = () => {
  // }
}

main();

// module.exports = getStats;