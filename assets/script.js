const currentDay = document.getElementById("currentDay");
const timeOfDay = document.querySelector("#past");

$(document).ready(function () {
  $(currentDay).text(moment().format("dddd, MMMM Do YYYY, h:mm:ss a"));
});
