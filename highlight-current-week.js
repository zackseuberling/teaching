const date = new Date();
const today = `${date.getFullYear()}${date.getMonth()}${date.getDate()}`;
console.log(today);

const elements = document.querySelectorAll(".week");
const weeks = Array.from(elements).map((element) => element.dataset.jsDate);

const currentWeek = weeks.reduce((acc, week) => {
  return Math.abs(week - today) < Math.abs(acc - today) ? week : acc;
});

document
  .querySelector([`[data-js-date="${currentWeek}"]`])
  .classList.add("current-week");
