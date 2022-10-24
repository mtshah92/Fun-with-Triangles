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

  const lengthOfHypotenuse = Math.sqrt(sumOfSquares).toFixed(2);

  if (sides[0].value !== "" && sides[1].value !== "") {
    if (sides[0].value > 0 && sides[1].value > 0) {
      output.innerText =
        "The length of Hypotenuse is " + lengthOfHypotenuse + " cm";
    } else {
      output.innerText =
        "The length of a & b (i.e. both side) should be greater than Zero";
    }
  } else {
    output.innerText = "Please Enter Both Fields";
  }
}

btnHypo.addEventListener("click", calculateHypotenuse);
