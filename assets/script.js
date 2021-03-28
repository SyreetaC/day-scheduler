const currentDay = document.getElementById("currentDay");
// const timeOfDay = document.querySelector("#past");
const allTextAreas = document.getElementsByTagName("textarea");

$(document).ready(function () {
  $(currentDay).text(moment().format("dddd, MMMM Do YYYY, h:mm:ss a"));
});

//set text area colours based on time.
const setTextAreaColour = () => {
  //Get the hour from moment
  currentTimeString = moment().format("H");
  const currentTimeNumber = parseInt(currentTimeString);
  //Take that hour and turn it into a string
  console.log(currentTimeNumber);

  //get values of text areas for comparison
  let scheduleTime = $(allTextAreas).attr("data-time");
  console.log(scheduleTime);

  //Compare the values of the current time and the time blocks on the schedule
  if (currentTimeString === scheduleTime) {
    $(allTextAreas).addClass("present");
  } else if (currentTimeString < scheduleTime) {
    $(allTextAreas).addClass("future");
  } else if (currentTimeString > scheduleTime) {
    $(allTextAreas).addClass("past");
  }
  //if string matches string from data-time, then change class to present.
  //if string is > string from data-time, then change class to future.
  //else keep as past.
};

//TO WORK ON- FOR EACH METHOD
const setColours = () => {
  allTextAreas.each(setTextAreaColour);
};

$(document).ready(setTextAreaColour);
