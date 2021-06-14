import React, { useContext, useState } from "react";
import { ThemeContext } from "../contexts/ThemeContext";

const CheckEquation = ({ firstNumber, mark, secondNumber, calculate }) => {
  const [answer, setAnswer] = useState(0);
  const handleChange = (e) => {
    setAnswer(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    calculate(answer);
    e.target.reset();
  };
  const { isLightTheme, light, dark } = useContext(ThemeContext);
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
        <form className="form-inline" onSubmit={handleSubmit}>
          <div className="form-group input-group mx-sm-3 mb-2">
            <input
              className="form-control"
              type="number"
              onChange={handleChange}
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
};

export default CheckEquation;
