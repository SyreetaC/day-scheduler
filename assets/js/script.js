const allTextAreas = $(".container").children().children("textarea");

$(document).ready(function () {
  const currentDay = $("#currentDay");
  $(currentDay).text(moment().format("dddd, MMMM Do YYYY"));
});

//set text area colours based on time.
const setTextAreaColour = (index, element) => {
  //Get the hour from moment
  currentHour = moment().hour();

  //get values of text areas for comparison
  let scheduleTime = parseInt($(element).attr("data-time"));

  //Compare the values of the current time and the time blocks on the schedule
  if (currentHour === scheduleTime) {
    $(element).removeClass("past").addClass("present");
  } else if (currentHour < scheduleTime) {
    $(element).removeClass("past").addClass("future");
  } else if (currentHour > scheduleTime) {
    $(element).removeClass("past").addClass("past");
  }
  //if string matches string from data-time, then change class to present.
  //if string is > string from data-time, then change class to future.
  //else keep as past.
};
$(allTextAreas).each(setTextAreaColour);

//check if anything is in local storage- else return whatever was previously in local storage
const setUpLocalStorage = () => {
  const dayScheduleMemory = localStorage.getItem("schedule");
  if (dayScheduleMemory === null) {
    const schedule = [
      {
        hour: 9,
        task: "",
      },
      {
        hour: 10,
        task: "",
      },
      {
        hour: 11,
        task: "",
      },
      {
        hour: 12,
        task: "",
      },
      {
        hour: 13,
        task: "",
      },
      {
        hour: 14,
        task: "",
      },
      {
        hour: 15,
        task: "",
      },
      {
        hour: 16,
        task: "",
      },
      {
        hour: 17,
        task: "",
      },
    ];
    //set up local storage with empty objects
    const scheduleString = JSON.stringify(schedule);
    localStorage.setItem("schedule", scheduleString);
  } else {
    //Populate all text areas with existing data
    const scheduleArray = JSON.parse(dayScheduleMemory);
    $(allTextAreas).each(function (index, element) {
      //Loop over all text areas
      let scheduleTime = parseInt($(element).attr("data-time"));

      for (const taskObj of scheduleArray) {
        //Loop over all tasks stored in localstorage
        if (scheduleTime === taskObj.hour) {
          //Set the value of the textarea that matches localstorage
          $(element).val(taskObj.task);
        }
      }
    });
  }
};

const saveTask = (event) => {
  const dayScheduleMemory = JSON.parse(localStorage.getItem("schedule"));
  const target = $(event.target);
  if (target.is("button") || target.is("i")) {
    let key;
    let value;
    if (target.is("button")) {
      key = target.attr("id");
      value = target.parent().find("textarea").val();
    }
    if (target.is("i")) {
      key = target.parent().attr("id");
      value = target.parent().parent().find("textarea").val();
    }

    //get data from given text areas
    const callback = (acc, currentValue) => {
      if (key == currentValue.hour) {
        acc.push({
          ...currentValue,
          task: value,
        });
        return acc;
      } else {
        acc.push(currentValue);
        return acc;
      }
    };
    const newArray = dayScheduleMemory.reduce(callback, []);
    localStorage.setItem("schedule", JSON.stringify(newArray));
  }

  //save to local storage
};

$(document).ready(setTextAreaColour);
$(document).ready(setUpLocalStorage);
$(".container").on("click", "button", saveTask);

// function to check the time every 10 seconds and reset textarea colours if needed
setInterval(setTextAreaColour, 10000);
//New click event for button
