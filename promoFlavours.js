//const container = document.querySelector('.cover-3'); // container
const menuBtn = document.querySelector('.menu'); // menu button
const homeBtn = document.querySelector('.home'); // home button
const containerCancelBtn = document.querySelector('.cancel'); // conatiner cancel button


//Promotion section

const show = document.querySelector('.inner');
const day = document.querySelector('.numb-day');
const hour = document.querySelector('.numb-hour');
const minute = document.querySelector('.numb-min');
const sec = document.querySelector('.numb-sec');
const text = document.querySelector('.text');
const box = document.querySelector('.box');
const play = document.querySelector('.screenplay');
const show1 = document.querySelector('.announcement-date');


const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December'
];

const weekdays = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday'
];

let vay = setInterval(getDisplay, 1000);

const futureDate = new Date(2021, 5, 20, 14, 55, 00);
let yr = futureDate.getFullYear();
let ma = months[futureDate.getMonth()];
let wday = weekdays[futureDate.getDay()];
let dat = futureDate.getDate();
let hr = futureDate.getHours();
let mi = futureDate.getMinutes();
let seco = futureDate.getSeconds();

if (mi < 10) {
  mi = "0" + mi;
}

/*if(hourt < 12 && hourt > 0 ){
  let zone = 'AM'
}else {
  let zone= 'PM'
} */

let result = wday + ", " + dat + " " + ma + " " + hr + ":" + mi + " " + ",  " + yr;

show.innerHTML = result;
show1.innerHTML = result;

const futureTime = futureDate.getTime();
function getDisplay() {
  let currentTime = new Date().getTime();
  let answer = futureTime - currentTime;
  let oneDay = 24 * 60 * 60 * 1000;
  let oneHour = 60 * 60 * 1000;
  let oneMin = 60 * 1000;
  let oneSec = 1000;

  let dayt = Math.floor(answer / oneDay);
  let hourt = Math.floor((answer % oneDay) / oneHour);
  let minutest = Math.floor(((answer % oneDay) % (oneHour)) / oneMin);
  let secondt = Math.floor((((answer % oneDay) % (oneHour)) % (oneMin)) / oneSec);
  if (dayt < 10) {
    dayt = "0" + dayt;
  }

  if (hourt < 10) {
    hourt = "0" + hourt;
  }
  if (minutest < 10) {
    minutest = "0" + minutest;
  }
  if (secondt < 10) {
    secondt = "0" + secondt;
  }
  day.innerHTML = dayt;
  hour.innerHTML = hourt;
  minute.innerHTML = minutest;
  sec.innerHTML = secondt;

  // if (answer < 0) {
  //   clearInterval(vay);
  //   //text.innerHTML = "Sorry! The Promotion is over";
  //   box.style.display = 'none';
  // }


}
getDisplay()



const learnMoreBtn = document.querySelector('.learn-more');
const learnMoreCancelBtn = document.querySelector('.cover3-cancel');
const learnMoreDisplay = document.querySelector('.cover-3');
const cover = document.querySelector('.cover');

learnMoreBtn.addEventListener('click', function () {
  learnMoreDisplay.style.display = 'block';
  cover.style.width = `${45}%`;
  cover.style.marginRight = 0;
});

learnMoreCancelBtn.addEventListener('click', function () {
  learnMoreDisplay.style.display = 'none';
  cover.style.width = `${65}%`;
  cover.style.marginRight = 10 + 'px';
});