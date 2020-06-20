import "../styles/snackbar.css";

class Snackbar {
  constructor() {
    this.snackbar = document.createElement("div");
  }
  init() {
    this.snackbar.classList.add("snackbar");
    document.querySelector("body").appendChild(this.snackbar);
  }
  show(message, typesCount) {
    if (typesCount == 0) {
      this.snackbar.textContent = message;
      this.snackbar.classList.add("active");
      setTimeout(() => {
        this.snackbar.classList.remove("active");
      }, 5000);
    }
  }
}

export { Snackbar as default };
