const currentDay = document.getElementById("currentDay");
const timeOfDay = document.querySelector("#past");
const allTextAreas = document.getElementsByTagName("textarea");

$(document).ready(function () {
  $(currentDay).text(moment().format("dddd, MMMM Do YYYY, h:mm:ss a"));
});

//set text area colours based on time.
const setTextAreaColour = (index) => {
  //Get the hour from moment
  currentTimeString = moment().format("H");
  const currentTimeNumber = parseInt(currentTimeString);
};

//Take that hour and turn it into a string

//get values of text areas for comparison

//if string matches string from data-time, then change class to present.
//if string is > string from data-time, then change class to future.
//else keep as past.

// $("textarea").each(function ()

$(document).ready(setTextAreaColour);
