import React, { Component } from "react";
import { ThemeContext } from "../contexts/ThemeContext";

class ScoreAndLevel extends Component {
  render() {
    const {
      level,
      score,
      maxNumber,
      correctAnswerScore,
      wrongAnswerScore,
    } = this.props;
    return (
      <ThemeContext.Consumer>
        {(context) => {
          const { isLightTheme, light, dark } = context;
          const theme = isLightTheme ? light : dark;
          const { syntax, ui, bg } = theme;
          return (
            <div
              className="container text-center rounded-top"
              style={{ background: bg, color: syntax }}
            >
              <h1 className="py-4 mt-4 mb-5 text-center heading">
                Oliveri Matemaatika Seiklus
              </h1>
              <div className="row">
                <div className="col">
                  <p className="h3">Level: {level}</p>
                </div>
              </div>
              <div className="row">
                <div className="col score">
                  <p
                    className="h3"
                    onSubmit={(correctAnswerScore, wrongAnswerScore)}
                  >
                    Score: {score}
                  </p>
                </div>
              </div>
              <div className="row">
                <div className="col">
                  <p className="h3">Maksimaalne arv: {maxNumber}</p>
                </div>
              </div>
            </div>
          );
        }}
      </ThemeContext.Consumer>
    );
  }
}

export default ScoreAndLevel;
