const form = document.querySelector(".quiz-container");
const submitBtn = document.querySelector("#submit-btn");
const output = document.querySelector("#output");

const correctAnswers = [
  "90°",
  "right angled",
  "acute",
  "Equilateral",
  "2 congruent sides",
  "180 degrees",
  "50,60,40",
  "centroid",
  "orthocenter",
  "28cm",
];

function checkAnswers() {
  let score = 0;
  let index = 0;

  const formResults = new FormData(form);
  for (let value of formResults.values()) {
    if (value === correctAnswers[index]) {
      score = score + 1;
    }
    index = index + 1;
  }

  output.innerHTML = "Your score is " + score + "/10";
}

submitBtn.addEventListener("click", checkAnswers);
