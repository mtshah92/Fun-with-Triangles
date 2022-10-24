const angle = document.querySelectorAll(".angle");
const checkIsTriangle = document.querySelector("#chek-btn");
const output = document.querySelector("#output");

function calculateSumOfAngles(angle1, angle2, angle3) {
  const sum = angle1 + angle2 + angle3;
  return sum;
}

function IsTriangle() {
  const sumofAngles = calculateSumOfAngles(
    Number(angle[0].value),
    Number(angle[1].value),
    Number(angle[2].value)
  );
  if (angle[0].value !== "" && angle[1].value !== "" && angle[2].value !== "") {
    if (angle[0].value > 0 && angle[1].value > 0 && angle[2].value > 0) {
      if (sumofAngles === 180) {
        output.innerText = "Yay! The Triangle is formed by angles";
      } else {
        output.innerText = "OOPs! Traingle can not form by this angle.";
      }
    } else {
      output.innerText = "All Angles Should be Greater Than Zero.";
    }
  } else {
    output.innerText = "Please Enter all input fields";
  }
}

checkIsTriangle.addEventListener("click", IsTriangle);
