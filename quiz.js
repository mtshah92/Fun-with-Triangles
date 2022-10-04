const form = document.querySelector(".quiz-container");
const submitBtn = document.querySelector("#submit-btn");
const output = document.querySelector("#output");

const correctAnswers = ["90°", "right angled"];

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

  output.innerText = "Your score is " + score;
}

submitBtn.addEventListener("click", checkAnswers);
