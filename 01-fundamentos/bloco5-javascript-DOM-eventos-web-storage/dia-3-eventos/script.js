function createDaysOfTheWeek() {
    const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
    const weekDaysList = document.querySelector('.week-days');
  
    for (let index = 0; index < weekDays.length; index += 1) {
      const days = weekDays[index];
      const dayListItem = document.createElement('li');
      dayListItem.innerHTML = days;
  
      weekDaysList.appendChild(dayListItem);
    };
  };
  
  createDaysOfTheWeek();
  
  // Escreva seu código abaixo.

  function createDays(){
    let decemberDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
    const numberDays = document.querySelector('#days');
    for(let i = 0; i<decemberDaysList.length; i +=1){
      const days1 = decemberDaysList[i];
      const dayListItem1 = document.createElement('li');
      dayListItem1.className =('day')
      if (days1 == 24 || days1 == 25 || days1 == 31){
        dayListItem1.className = dayListItem1.className + ' holiday';
      }else {}
      if (days1 == 4 || days1 == 11 || days1 == 18 || days1 == 25){
        dayListItem1.className = dayListItem1.className + ' friday';
      }
      dayListItem1.innerText = days1;

      numberDays.appendChild(dayListItem1);
    }
}

createDays();

function holiday (feriado){
  const locButtonHoliday = document.querySelector(".buttons-container");
  const buttonHoliday = document.createElement('button');
  buttonHoliday.id = 'btn-holiday';
  buttonHoliday.innerText = 'Feriados!';
  locButtonHoliday.appendChild(buttonHoliday);
}
holiday()