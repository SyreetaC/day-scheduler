const currentDay = document.getElementById("currentDay");
const timeOfDay = document.querySelector("#past");

$(document).ready(function () {
  $(currentDay).text(moment().format("dddd, MMMM Do YYYY, h:mm:ss a"));
});

//set text area colours based on time.
const setTextAreaColour = () => {
  //Get the hour from moment
  const currentTimeString = moment().format("H");

  //Take that hour and turn it into a string

  //if string matches string from data-time, then change class to present.
  //if string is > string from data-time, then change class to future.
  //else keep as past.
};
