const timer = (deadline) => {
  function getRemainigDate() {
    const total = Date.parse(deadline) - Date.parse(new Date()),
      days = Math.floor(total / (1000 * 60 * 60 * 24)),
      hours = Math.floor((total / (1000 * 60 * 60)) % 24),
      minutes = Math.floor((total / (1000 * 60)) % 60),
      seconds = Math.floor((total / 1000) % 60);

    return { total, days, hours, minutes, seconds };
  }

  function setClock() {
    const days = document.getElementById("days"),
      hours = document.getElementById("hours"),
      minutes = document.getElementById("minutes"),
      seconds = document.getElementById("seconds"),
      timeInterval = setInterval(updateClock, 1000);

    updateClock();

    function updateClock() {
      const time = getRemainigDate();
      days.textContent = addZero(time.days);
      hours.textContent = addZero(time.hours);
      minutes.textContent = addZero(time.minutes);
      seconds.textContent = addZero(time.seconds);

      if (time.total <= 0) {
        clearInterval(timeInterval);
      }
    }
  }

  function addZero(num) {
    if (num < 10) {
      return "0" + num;
    } else {
      return num;
    }
  }
  setClock();
};
export default timer;
