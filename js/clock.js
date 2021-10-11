const clock = document.querySelector("div#clock");
const clock_date = clock.querySelector("p.date");
const clock_time = clock.querySelector("p.time");
const WEEK = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];


function getClock(){
  const date = new Date();
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const seconds = String(date.getSeconds()).padStart(2, "0");
  clock_date.innerText= `${date.getFullYear()}-${date.getMonth()+1}-${date.getDate()} ${WEEK[date.getDay()]}`;
  clock_time.innerText = `${hours}:${minutes}:${seconds}`
}

getClock();
setInterval(getClock, 1000); //calls designated function every 1000 miliseconds

