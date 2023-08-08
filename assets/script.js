

  function displayTime() {
    var today = dayjs().format("dddd[,] MMMM Do");
    $("#currentDay").text(today);
  }

  dayjs format
var varName = new Date()
var currentTime = new Date();
var currentHour = currentTime.getHours();

Mohamed Ugas 21:56
var date = dayjs("2023-12-13").format("dddd, MMMM, D"); 
console.log(date);
$( document ).ready(function() {
    $("#currentDay").text(date);
});