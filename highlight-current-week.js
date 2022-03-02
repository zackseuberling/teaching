const date = new Date();
const today = Intl.DateTimeFormat("en-GB").format(date);
const regex = /(\d{2})\/(\d{2})\/(\d{4})/;

const todayFormatted = parseInt(today.replace(regex, "$3$2$1"), 10);

const elements = document.querySelectorAll(".week");
const weeks = Array.from(elements).map((element) => element.dataset.jsDate);

const currentWeek = weeks.reduce((acc, week) => {
  return Math.abs(week - todayFormatted) < Math.abs(acc - todayFormatted)
    ? week
    : acc;
});

document
  .querySelector([`[data-js-date="${currentWeek}"]`])
  .classList.add("current-week");
