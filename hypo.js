const sides = document.querySelectorAll(".side-input");
const btnHypo = document.querySelector("#btn-hypo");
const output = document.querySelector("#output");

function calculateValue(a, b) {
  const sumOfSquares = a * a + b * b;
  return sumOfSquares;
}
function calculateHypotenuse() {
  const sumOfSquares = calculateValue(
    Number(sides[0].value),
    Number(sides[1].value)
  );

  const lengthOfHypotenuse = Math.sqrt(sumOfSquares);

  output.innerText = "The length of Hypotenuse is " + lengthOfHypotenuse;
  //   output.innerText=
}

btnHypo.addEventListener("click", calculateHypotenuse);
