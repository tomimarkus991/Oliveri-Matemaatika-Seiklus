import "../styles/bigMath.css";
import Snackbar from "./snackbar";

class BigMath {
  constructor() {}
  init() {
    const firstNumber = document.querySelector(".first-number");
    const equation = document.querySelector(".equation");
    const secondNumber = document.querySelector(".second-number");

    const score = document.querySelector(".user-score");
    const level = document.querySelector(".user-level");
    const userAnswerForm = document.querySelector(".user-answer-form");
    const userAnswer = document.querySelector(".user-answer");

    const scoreAnimation = document.querySelector(".score-animation");

    const harderWhenInput = document.querySelector("#harder-when-input");
    const equationNumberSize = document.querySelector("#equation-number-size");

    let addEl = document.querySelector("#add-el");
    let substractEl = document.querySelector("#substract-el");
    let multiplyEl = document.querySelector("#multiply-el");
    let divideEl = document.querySelector("#divide-el");

    localStorage.howBig
      ? (equationNumberSize.value = localStorage.howBig)
      : (equationNumberSize.value = 5);

    localStorage.levelWhen
      ? (harderWhenInput.value = localStorage.levelWhen)
      : (harderWhenInput.value = 20);

    localStorage.addChecked === "true"
      ? (addEl.checked = true)
      : (addEl.checked = false);

    localStorage.substractChecked === "true"
      ? (substractEl.checked = true)
      : (substractEl.checked = false);

    localStorage.multiplyChecked === "true"
      ? (multiplyEl.checked = true)
      : (multiplyEl.checked = false);

    localStorage.divideChecked === "true"
      ? (divideEl.checked = true)
      : (divideEl.checked = false);

    userAnswerForm.addEventListener("submit", (e) => {
      e.preventDefault();

      let textScore = Number(score.textContent);

      let howBig = Number(equationNumberSize.value);
      let levelWhen = Number(harderWhenInput.value);

      const add = addEl.checked;
      const substract = substractEl.checked;
      const multiply = multiplyEl.checked;
      const divide = divideEl.checked;

      localStorage.setItem("howBig", howBig);
      localStorage.setItem("levelWhen", levelWhen);

      localStorage.setItem("addChecked", add);
      localStorage.setItem("substractChecked", substract);
      localStorage.setItem("multiplyChecked", multiply);
      localStorage.setItem("divideChecked", divide);

      const typesCount = add + substract + multiply + divide;

      const typesArray = [
        { add, mark: "+" },
        { substract, mark: "-" },
        { multiply, mark: "*" },
        { divide, mark: "/" },
      ].filter((item) => Object.values(item)[0]);

      const fireSnackbar = (message, typesCount) => {
        const snackbar = new Snackbar();
        snackbar.init();
        snackbar.show(message, typesCount);
      };

      if (typesCount === 0) {
        const message = "Sa pead checkima vähemalt ühe tehte";
        fireSnackbar(message, typesCount);
        return "";
      }
      if (userAnswer.textLength) {
        switch (equation.textContent) {
          case "+":
            if (
              Number(firstNumber.textContent) +
                Number(secondNumber.textContent) ===
              Number(userAnswer.value)
            ) {
              score.textContent = textScore + 5;
              scoreAnimation.classList.remove(
                "border",
                "border-danger",
                "text-danger"
              );
              scoreAnimation.classList.add(
                "border",
                "border-success",
                "text-success"
              );
            } else {
              score.textContent = textScore - 5;
              scoreAnimation.classList.remove(
                "border",
                "border-success",
                "text-success"
              );
              scoreAnimation.classList.add(
                "border",
                "border-danger",
                "text-danger"
              );
            }
            userAnswer.value = "";
            break;
          case "-":
            if (
              Number(firstNumber.textContent) -
                Number(secondNumber.textContent) ===
              Number(userAnswer.value)
            ) {
              score.textContent = textScore + 5;
              scoreAnimation.classList.remove(
                "border",
                "border-danger",
                "text-danger"
              );
              scoreAnimation.classList.add(
                "border",
                "border-success",
                "text-success"
              );
            } else {
              score.textContent = textScore - 5;
              scoreAnimation.classList.remove(
                "border",
                "border-success",
                "text-success"
              );
              scoreAnimation.classList.add(
                "border",
                "border-danger",
                "text-danger"
              );
            }
            userAnswer.value = "";
            break;
          case "*":
            if (
              Number(firstNumber.textContent) *
                Number(secondNumber.textContent) ===
              Number(userAnswer.value)
            ) {
              score.textContent = textScore + 5;
              scoreAnimation.classList.remove(
                "border",
                "border-danger",
                "text-danger"
              );
              scoreAnimation.classList.add(
                "border",
                "border-success",
                "text-success"
              );
            } else {
              score.textContent = textScore - 5;
              scoreAnimation.classList.remove(
                "border",
                "border-success",
                "text-success"
              );
              scoreAnimation.classList.add(
                "border",
                "border-danger",
                "text-danger"
              );
            }
            userAnswer.value = "";
            break;
          case "/":
            if (
              Number(firstNumber.textContent) /
                Number(secondNumber.textContent) ===
              Number(userAnswer.value)
            ) {
              score.textContent = textScore + 5;
              scoreAnimation.classList.remove(
                "border",
                "border-danger",
                "text-danger"
              );
              scoreAnimation.classList.add(
                "border",
                "border-success",
                "text-success"
              );
            } else {
              score.textContent = textScore - 5;
              scoreAnimation.classList.remove(
                "border",
                "border-success",
                "text-success"
              );
              scoreAnimation.classList.add(
                "border",
                "border-danger",
                "text-danger"
              );
            }
            userAnswer.value = "";
            break;
        }
        firstNumber.textContent = Math.floor(Math.random() * howBig + 1);

        let randomMark = Math.floor(Math.random() * Number(typesCount));

        equation.textContent = typesArray[randomMark].mark;

        secondNumber.textContent = Math.floor(Math.random() * howBig + 1);
      }

      // Level up
      if (textScore >= Number(levelWhen)) {
        howBig += 2;
        level.textContent = Number(level.textContent) + 1;
        score.textContent = Number(0);
      }
    });
  }
}

export { BigMath as default };
