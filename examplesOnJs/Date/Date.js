"use strict";
const now = new Date();
// console.log(now.getTimezoneOffset());
// console.log(now.getTime());
// console.log(new Date(now.getTime()));
// ----------

console.log(now);
console.log(new Date(now.setHours(10)));
console.log(new Date(now.setHours(-20)));
console.log(new Date(now.setHours(-10)));
//------------
let start = new Date();

for (let i = 0; i < 100000000; i++) {
  let a = i ** 100;
}
let end = new Date();
console.log(`circle have been done for ${end - start} ms`);

window.addEventListener("DOMContentLoaded", () => {
  const deadLine = "2023-08-10T06:40:00Z";
  function getRemainigTime(endtime) {
    const time = Date.parse(endtime) - Date.parse(new Date());
    let days, hours, minutes, seconds;
    if (time <= 0) {
      return {
        time: 0,
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
      };
    }

    (days = Math.floor(time / (1000 * 60 * 60 * 24))),
      (hours = Math.floor((time / (1000 * 60 * 60)) % 24)),
      (minutes = Math.floor((time / (1000 * 60)) % 60)),
      (seconds = Math.floor((time / 1000) % 60));

    return {
      time,
      days,
      hours,
      minutes,
      seconds,
    };
  }
  function getZero(num) {
    if (num < 10) {
      return "0" + num;
    } else {
      return num;
    }
  }
  function setTimer(selector, endtime) {
    const timer = document.querySelector(selector),
      days = timer.querySelector("#days"),
      hours = timer.querySelector("#hours"),
      minutes = timer.querySelector("#minutes"),
      seconds = timer.querySelector("#seconds"),
      timeOff = setInterval(updateTimer, 1000);
    updateTimer();

    function updateTimer() {
      const time = getRemainigTime(endtime);

      days.textContent = getZero(time.days);
      hours.textContent = getZero(time.hours);
      minutes.textContent = getZero(time.minutes);
      seconds.textContent = getZero(time.seconds);

      if (time.time <= 0) {
        clearInterval(timeOff);
      }
    }
  }
  setTimer(".timer", deadLine);
});
