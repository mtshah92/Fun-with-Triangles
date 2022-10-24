const sides = document.querySelectorAll(".sides");
const checkAreabutton = document.querySelector("#check-area-btn");
const output = document.querySelector("#output");

function calculateTheValue(a, b) {
  const area = 0.5 * (a * b);
  return area.toFixed(2);
}

function calculateArea() {
  const value = calculateTheValue(
    Number(sides[0].value),
    Number(sides[1].value)
  );

  if (sides[0].value !== "" && sides[1].value !== "") {
    if (sides[0].value > 0 && sides[1].value > 0) {
      output.innerText = "Area of Traingle is " + value + " cm²";
    } else {
      output.innerText = "Area and Height Should be Greater than Zero";
    }
  } else {
    output.innerText = "Please Enter both Fields";
  }
}

checkAreabutton.addEventListener("click", calculateArea);
