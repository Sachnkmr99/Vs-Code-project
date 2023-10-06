// Set the countdown date and time (example: July 31, 2023, 12:00:00 UTC)
var countdownDate = new Date("July 31, 2023 12:00:00 UTC").getTime();


var countdownInterval = setInterval(function() {

  var now = new Date().getTime();

  
  var timeRemaining = countdownDate - now;

 
  var days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
  var hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

  
  document.getElementById("days").textContent = formatTime(days);
  document.getElementById("hours").textContent = formatTime(hours);
  document.getElementById("min").textContent = formatTime(minutes);
  document.getElementById("sec").textContent = formatTime(seconds);

  
  if (timeRemaining < 0) {
    clearInterval(countdownInterval);
   
  }
}, 1000);


function formatTime(time) {
  return time < 10 ? "0" + time : time;
}
