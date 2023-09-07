
const displayDate = () => {
  const daysArr = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

const newDate = new Date();

const getDay = daysArr[newDate.getDay()];
const dateDiv = document.querySelector('.date');
dateDiv.textContent = getDay;

const getTime = newDate.getTime();
const timeDiv = document.querySelector('.time');
timeDiv.textContent = getTime;
}

setInterval(() => {
  displayDate()
}, 1000);
