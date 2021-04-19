"use strict";
const display = function (className, msg) {
  document.querySelector("." + className).textContent = msg;
};
const clickAction = function (className, action) {
  document
    .querySelector("." + className)
    .addEventListener("click", function () {
      action();
    });
};
const insertedValue = function (className) {
  return document.querySelector("." + className).value;
};

document
  .querySelector(".number-input")
  .addEventListener("keyup", function (event) {
    if (event.keyCode === 13) {
      event.preventDefault();
      document.querySelector(".lite").click();
    }
  });

let num = Math.floor(Math.random() * 25 + 1);
let points = 15;
let highScore = 0;
const action1 = function () {
  let x = Number(insertedValue("number-input"));
  display("guessed-number", `${x}`);
  if (x != num) {
    x > num ? display("status", "Too High!") : display("status", "Too Low!");
    points--;
    if (points === 0) {
      display("status", "You Lose!");
      display("points", "");
      document.querySelector(".lite").disabled = true;
      document.querySelector("body").style.background = "#e74545";
    } else {
      display("points", `Points: ${points}`);
    }
  } else {
    display("status", `You Win! Your Score is ${points}`);
    document.querySelector("body").style.background = "#60b347";
    points > highScore ? (highScore = points) : (highScore = highScore);
    display("high-score", `High Score: ${highScore}`);
    display("points", "");
    document.querySelector(".lite").disabled = true;
  }
};

const action2 = function () {
  num = Math.floor(Math.random() * 25 + 1);
  points = 15;
  document.querySelector("body").style.background = "#0e0e0eb9";
  display("guessed-number", "?");
  display("status", "Enter a Number!");
  document.querySelector(".lite").disabled = false;
  display("points", `Points: ${points}`);
};

clickAction("lite", action1);
clickAction("dark", action2);
