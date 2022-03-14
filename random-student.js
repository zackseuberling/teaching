let body = document.querySelector("body");
let studentsList = document.querySelector("#students");
let students = studentsList.children;
let shuffleButton = document.querySelector("#shuffle");

function shuffle(array) {
  let currentIndex = array.length;
  let randomIndex;

  // While there remain elements to shuffle...
  while (currentIndex != 0) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array;
}

shuffleButton.addEventListener("click", function () {
  body.classList.toggle("shuffling");
  shuffleButton.classList.toggle("hidden");
  let newStudents = shuffle(Array.from(students));

  setTimeout(() => {
    studentsList.innerHTML = "";

    for (let i = 0; i < newStudents.length; i++) {
      studentsList.appendChild(newStudents[i]);
    }
    body.classList.toggle("shuffling");
    body.classList.add("shuffled");
  }, 2000);
});
