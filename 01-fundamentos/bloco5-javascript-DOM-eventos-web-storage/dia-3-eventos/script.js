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

function holidayColor(){
  const holidayDays = document.querySelectorAll('.holiday');
  for(let i = 0; i< holidayDays.length; i+=1){
    holidayDays[i].style.color = 'blue';
  }
}
const buttonHoliday = document.querySelector('#btn-holiday');
buttonHoliday.addEventListener('click', holidayColor);

function fridayBtn (string){
  const locButtonHoliday = document.querySelector(".buttons-container");
  const buttonFriday = document.createElement('button');
  buttonFriday.id = 'btn-friday';
  buttonFriday.innerText = 'Sexta-Feira';
  locButtonHoliday.appendChild(buttonFriday);
}
fridayBtn();

function fridayDay (){
  const fridayDays = document.querySelectorAll('.friday');
  for (let i =0; i<fridayDays.length; i+=1){
    fridayDays[i].innerText = 'SEXTOU!!';
  }
}
const buttonFriday = document.querySelector("#btn-friday");
buttonFriday.addEventListener('click', fridayDay);

function dayMouseOver() {
  let days = document.querySelector('#days');
  days.addEventListener('mouseover', function(event) {
    event.target.style.fontSize = '30px';
    event.target.style.fontWeight = '600'; 
  })
}

function dayMouseOut() {
  let days = document.querySelector('#days');
  days.addEventListener('mouseout', function(event) {
    event.target.style.fontSize = '20px';
    event.target.style.fontWeight = '200'; 
  });
}
dayMouseOut();
dayMouseOver();

function tasks(tarefa){
  let dadElement = document.querySelector('.my-tasks')
  const newTask = document.createElement('span');
  newTask.innerText = tarefa;
  dadElement.appendChild(newTask);
}
tasks('Cozinhar');