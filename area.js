const sides = document.querySelectorAll(".sides");
const checkAreabutton = document.querySelector("#check-area-btn");
const output = document.querySelector("#output");

function calculateTheValue(a, b) {
  const area = 0.5 * (a * b);
  return area;
}

function calculateArea() {
  const value = calculateTheValue(
    Number(sides[0].value),
    Number(sides[1].value)
  );

  output.innerText = "Area of Traingle is " + value;
}

checkAreabutton.addEventListener("click", calculateArea);
