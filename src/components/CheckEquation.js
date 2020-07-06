import React, { Component } from "react";
import { ThemeContext } from "../contexts/ThemeContext";

class CheckEquation extends Component {
  state = {
    answer: null,
  };
  handleChange = (e) => {
    this.setState({
      answer: e.target.value,
    });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.calculate(this.state.answer);
    e.target.reset();
  };
  render() {
    const { firstNumber, mark, secondNumber } = this.props.equation;
    return (
      <ThemeContext.Consumer>
        {(context) => {
          const { isLightTheme, light, dark } = context;
          const theme = isLightTheme ? light : dark;
          const { syntax, ui, bg } = theme;
          return (
            <div
              className="container text-center py-4"
              style={{ background: bg, color: syntax }}
            >
              <div className="row justify-content-center mb-4">
                <div className="col-1">
                  <span className="h3">{firstNumber}</span>
                </div>
                <div className="col-1">
                  <span className="h3">{mark}</span>
                </div>
                <div className="col-1">
                  <span className="h3">{secondNumber}</span>
                </div>
              </div>
              <div className="row justify-content-center">
                <form className="form-inline" onSubmit={this.handleSubmit}>
                  <div className="form-group input-group mx-sm-3 mb-2">
                    <input
                      className="form-control"
                      type="number"
                      onChange={this.handleChange}
                      placeholder="Enter Answer"
                      required
                    />
                    <div className="input-group-append">
                      <button className="btn btn-dark">Enter</button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          );
        }}
      </ThemeContext.Consumer>
    );
  }
}

export default CheckEquation;
