const allTextAreas = $(".container").children().children("textarea");

const renderCurrentDay = () => {
  const currentDay = moment().format("dddd, MMMM Do YYYY");
  $("#currentDay").text(currentDay);
};

const setTextAreaColours = () => {
  const setTextAreaColour = (index, element) => {
    const currentHour = moment().hour();
    const scheduleTime = parseInt($(element).attr("data-time"));

    if (currentHour === scheduleTime) {
      $(element).removeClass("past").addClass("present");
    }

    if (currentHour < scheduleTime) {
      $(element).removeClass("past").addClass("future");
    }
  };

  $('textarea[name="note"]').each(setTextAreaColour);
};

const setUpLocalStorage = () => {
  const dayScheduleMemory = JSON.parse(localStorage.getItem("schedule"));

  if (dayScheduleMemory === null) {
    const schedule = [
      { hour: 9, task: "" },
      { hour: 10, task: "" },
      { hour: 11, task: "" },
      { hour: 12, task: "" },
      { hour: 13, task: "" },
      { hour: 14, task: "" },
      { hour: 15, task: "" },
      { hour: 16, task: "" },
      { hour: 17, task: "" },
    ];

    localStorage.setItem("schedule", JSON.stringify(schedule));
  } else {
    const updateTextArea = (index, element) => {
      const scheduleTime = parseInt($(element).attr("data-time"));

      for (const taskObj of dayScheduleMemory) {
        if (scheduleTime === taskObj.hour) {
          $(element).val(taskObj.task);
        }
      }
    };

    $('textarea[name="note"]').each(updateTextArea);
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

const onReady = () => {
  renderCurrentDay();

  setTextAreaColours();

  setUpLocalStorage();
};

$(document).ready(onReady);

$(".container").on("click", "button", saveTask);

// function to check the time every 10 seconds and reset textarea colours if needed
// setInterval(setTextAreaColour, 10000);
//New click event for button
