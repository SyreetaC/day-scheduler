const currentDay = $("#currentDay");
const allTextAreas = $(".container").children().children("textarea");

$(document).ready(function () {
  $(currentDay).text(moment().format("dddd, MMMM Do YYYY, h:mm:ss a"));
});

//set text area colours based on time.
const setTextAreaColour = (index) => {
  //Get the hour from moment
  currentTimeString = moment().format("H");
  const currentTimeNumber = parseInt(currentTimeString);
  //Take that hour and turn it into a string
  console.log(currentTimeNumber);

  //get values of text areas for comparison
  let scheduleTime = $(allTextAreas[index]).attr("data-time");
  console.log(scheduleTime);

  //Compare the values of the current time and the time blocks on the schedule
  if (currentTimeNumber === scheduleTime) {
    $(allTextAreas[index]).addClass("present");
  } else if (currentTimeNumber < scheduleTime) {
    $(allTextAreas[index]).addClass("future");
  } else if (currentTimeNumber > scheduleTime) {
    $(allTextAreas[index]).addClass("past");
  }
  //if string matches string from data-time, then change class to present.
  //if string is > string from data-time, then change class to future.
  //else keep as past.
};
$(allTextAreas).each(setTextAreaColour);

//check if anything is in local storage- else return whatever was previously in local storage
//set up local storage with empty objects

//link save button to local storage
//remember that favicon is a child of the button!
//set interval so (set text area colour function) colours automatically change after a particular time.

$(document).ready(setTextAreaColour);

// document.ready for every function
