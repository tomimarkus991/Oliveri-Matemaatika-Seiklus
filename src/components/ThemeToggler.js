import React, { Component } from "react";
import { ThemeContext } from "../contexts/ThemeContext";

class ThemeToggler extends Component {
  static contextType = ThemeContext;
  render() {
    const { toggleTheme } = this.context;
    return (
      <div>
        <button className="btn btn-dark" onClick={toggleTheme}>
          Toggle Theme
        </button>
      </div>
    );
  }
}

export default ThemeToggler;
