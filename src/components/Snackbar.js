import React, { Component } from "react";
import "../styles/Snackbar.css";

class Snackbar extends Component {
  constructor() {
    super();
    this.snackbar = document.createElement("div");
  }
  init() {
    this.snackbar.classList.add("snackbar");
    document.querySelector("body").appendChild(this.snackbar);
  }
  show(message, typesCount) {
    if (typesCount === 0) {
      this.snackbar.textContent = message;
      this.snackbar.classList.add("active");
      setTimeout(() => {
        this.snackbar.classList.remove("active");
      }, 2300);
    }
  }
  render() {
    return <div></div>;
  }
}

export default Snackbar;
