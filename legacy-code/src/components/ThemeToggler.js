import React, { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";

const ThemeToggler = () => {
  const { toggleTheme } = useContext(ThemeContext);
  return (
    <div>
      <button className="btn btn-dark" onClick={toggleTheme}>
        Toggle Theme
      </button>
    </div>
  );
};

export default ThemeToggler;
