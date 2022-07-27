document.getElementById("header-container").style.backgroundColor= 'green'; 
document.getElementsByClassName("emergency-tasks")[0].style.backgroundColor= 'orange';
const emergency = document.querySelectorAll(".emergency-tasks h3");
for (let i =0; i<emergency.length; i+=1){
    console.log(i);
    emergency[i].style.backgroundColor = 'purple';
}
document.querySelectorAll('.no-emergency-tasks')[0].style.backgroundColor = 'yellow';
document.querySelectorAll(".no-emergency-tasks h3")[0].style.backgroundColor = 'black';
document.querySelectorAll(".no-emergency-tasks h3")[1].style.backgroundColor = 'black';
const footer = document.getElementById('footer-container');
footer.style.backgroundColor = 'rgb(0, 53, 51)';