setInterval(() => {
  const time = document.querySelector("#time");
  let date = new Date(),
    hours = date.getHours(),
    minutes = date.getMinutes(),
    seconds = date.getSeconds(),
    period = "AM";

    if (hours > 12) {
        period = "PM";
        hours = hours - 12;
    }
    if(hours < 10) {
        hours = "0" + hours;
    }
    if(minutes < 10) {
        minutes = "0" + minutes;
    }
    if(seconds < 10) {
        seconds = "0" + seconds;
    }
  time.textContent = hours + ":" + minutes + ":" + seconds + " " + period;
});
