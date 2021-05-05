// get year for footer -> copyright
const year = new Date().getFullYear();
document.querySelector(".year").innerHTML = year;

//
const userInput = document.querySelector("#userInput");
const convert = document.querySelector("#convert");
let result = document.querySelector(".result");
//
const exChange = (e) => {
  e.preventDefault();
  console.log(userInput.value);
  if (userInput.value != "") {
    result.innerHTML += `Your number is ${userInput.value}<br>`;
  } else {
    userInput.placeholder = "Please FIRST insert a binary number";
  }
};
//
convert.addEventListener("click", exChange);
