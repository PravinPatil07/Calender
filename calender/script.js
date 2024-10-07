const date = document.getElementById("date");
const day = document.getElementById("day");
const month = document.getElementById("month");
const year = document.getElementById("year");

const todayDate = new Date();
const weekDays = ['Sundat','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];

const allMonths = ['January','February','March','April','May','June','July','August','September','Octomber','November','December']

if(todayDate.getDate() < 10){
    date.innerHTML = '0' + todayDate.getDate();
}
else{
    date.innerHTML = '' + todayDate.getDate();
}

day.innerHTML = weekDays[todayDate.getDay()];
month.innerHTML = allMonths[todayDate.getMonth()];
year.innerHTML = todayDate.getFullYear();