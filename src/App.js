/* eslint-disable no-eval */
import React, { Component } from "react";
import CheckEquation from "./components/CheckEquation";
import Settings from "./components/Settings";
import Snackbar from "./components/Snackbar";
import ThemeContextProvider from "./contexts/ThemeContext";
import ScoreAndLevel from "./components/ScoreAndLevel";

class App extends Component {
  state = {
    firstNumber: 5,
    mark: "+",
    secondNumber: 5,
    maxNumber: 5,
    levelDownWhen: -15,
    levelUpWhen: 15,
    add: true,
    substract: false,
    multiply: false,
    divide: false,
    score: 0,
    level: 0,
  };
  updateSettings = (
    maxNumber,
    levelDownWhen,
    levelUpWhen,
    add,
    substract,
    multiply,
    divide
  ) => {
    this.setState({
      maxNumber,
      levelDownWhen,
      levelUpWhen,
      add,
      substract,
      multiply,
      divide,
    });
  };

  correctAnswerScore = () => {
    const scoreEl = document.querySelector(".score");
    scoreEl.classList.remove("text-danger");
    scoreEl.classList.add("text-success");
  };
  wrongAnswerScore = () => {
    const scoreEl = document.querySelector(".score");
    scoreEl.classList.remove("text-success");
    scoreEl.classList.add("text-danger");
  };

  calculate = (answer) => {
    const {
      maxNumber,
      levelDownWhen,
      levelUpWhen,
      add,
      substract,
      multiply,
      divide,
      firstNumber,
      mark,
      secondNumber,
    } = this.state;
    const typesCount = add + substract + multiply + divide;
    const statement = `${firstNumber}${mark}${secondNumber}`;
    let { score, level } = this.state;

    const fireSnackbar = (message, typesCount) => {
      const snackbar = new Snackbar();
      snackbar.init();
      snackbar.show(message, typesCount);
    };

    if (typesCount === 0) {
      const message = "Sa pead checkima vähemalt ühe tehte";
      fireSnackbar(message, typesCount);
      return;
    }

    const typesArray = [
      { add, mark: "+" },
      { substract, mark: "-" },
      { multiply, mark: "*" },
      { divide, mark: "/" },
    ].filter((item) => Object.values(item)[0]);

    if (eval(statement) === Number(answer)) {
      this.correctAnswerScore();

      this.setState({
        score: score + 5,
      });

      if (score >= levelUpWhen) {
        this.setState({
          maxNumber: Number(maxNumber) + 1,
          level: level + 1,
          score: 0,
        });
      }
    } else {
      this.wrongAnswerScore();

      this.setState({
        score: score - 5,
      });

      if (score <= levelDownWhen) {
        this.setState({
          maxNumber: Number(maxNumber) - 1,
          level: level - 1,
          score: 0,
        });
      } else if (maxNumber === 0 && level < 0) {
        this.setState({
          maxNumber: 1,
        });
      }
    }

    let randomMark = Math.floor(Math.random() * Number(typesCount));

    this.setState({
      firstNumber: Math.floor(Math.random() * maxNumber + 1),
      mark: typesArray[randomMark].mark,
      secondNumber: Math.floor(Math.random() * maxNumber + 1),
    });
  };
  render() {
    const {
      firstNumber,
      mark,
      secondNumber,
      maxNumber,
      levelDownWhen,
      levelUpWhen,
      add,
      substract,
      multiply,
      divide,
      score,
      level,
    } = this.state;
    return (
      <div className="container my-4 App rounded-circle">
        <ThemeContextProvider>
          <ScoreAndLevel
            score={score}
            level={level}
            maxNumber={maxNumber}
            correctAnswerScore={this.correctAnswerScore}
            wrongAnswerScore={this.wrongAnswerScore}
          />
          <CheckEquation
            firstNumber={firstNumber}
            mark={mark}
            secondNumber={secondNumber}
            calculate={this.calculate}
          />
          <Settings
            updateSettings={this.updateSettings}
            maxNumber={maxNumber}
            levelDownWhen={levelDownWhen}
            levelUpWhen={levelUpWhen}
            add={add}
            substract={substract}
            multiply={multiply}
            divide={divide}
          />
        </ThemeContextProvider>
      </div>
    );
  }
}

export default App;
