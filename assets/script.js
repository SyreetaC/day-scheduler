const allTextAreas = $(".container").children().children("textarea");

$(document).ready(function () {
  const currentDay = $("#currentDay");
  $(currentDay).text(moment().format("dddd, MMMM Do YYYY"));
});

//set text area colours based on time.
const setTextAreaColour = (index) => {
  //Get the hour from moment
  currentTimeString = moment().format("H");
  const currentHour = parseInt(currentTimeString);
  //Take that hour and turn it into a string

  //get values of text areas for comparison
  let scheduleTime = $(allTextAreas[index]).attr("data-time");

  //Compare the values of the current time and the time blocks on the schedule
  if (currentHour === scheduleTime) {
    $(allTextAreas[index]).removeClass("past");
    $(allTextAreas[index]).addClass("present");
  } else if (currentHour < scheduleTime) {
    $(allTextAreas[index]).removeClass("past");
    $(allTextAreas[index]).addClass("future");
  } else if (currentHour > scheduleTime) {
    $(allTextAreas[index]).addClass("past");
  }
  //if string matches string from data-time, then change class to present.
  //if string is > string from data-time, then change class to future.
  //else keep as past.
};
$(allTextAreas).each(setTextAreaColour);

//check if anything is in local storage- else return whatever was previously in local storage
const setUpLocalStorage = () => {
  const dayScheduleMemory = localStorage.getItem("day-schedule");
  if (dayScheduleMemory === null) {
    console.log("Set up local memory");
    const schedule = {
      9: {
        task: "",
      },
      10: {
        task: "",
      },
      11: {
        task: "",
      },
      12: {
        task: "",
      },
      13: {
        task: "",
      },
      14: {
        task: "",
      },
      15: {
        task: "",
      },
      16: {
        task: "",
      },
      17: {
        task: "",
      },
    };
    //set up local storage with empty objects
    const scheduleString = JSON.stringify(schedule);
    localStorage.setItem("schedule", scheduleString);
  } else {
    console.log("memory exists!");
  }
};

const setTaskIntoMemory = () => {
  let task = allTextAreas[index].value;
  console.log(task);
  // const scheduleMemory = localStorage;
};

//link save button to local storage
//remember that favicon is a child of the button!
//set interval so (set text area colour function) colours automatically change after a particular time.

$(document).ready(setTextAreaColour);
$(document).ready(setUpLocalStorage);
$(document).ready(setTaskIntoMemory);

// document.ready for every function
