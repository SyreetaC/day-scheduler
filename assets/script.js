const currentDay = document.getElementById("currentDay");

$(document).ready(function () {
  $(currentDay).text(moment());
});
