const inputEl = document.querySelectorAll("input");

const spacingInputEl = document.querySelector("#spacing-label");
const blurInputEl = document.querySelector("#blur-label");
const colorInputEl = document.querySelector("#color-label");
colorInputEl.value = "#ffffff";

const spanEl = document.querySelector("span");

const imgEl = document.querySelector("img");

inputEl.forEach((input) => {
  input.addEventListener("input", (event) => {
    const inputValue = event.target.value;
    const inputName = event.target.name;
    if (inputName === "spacing-input") {
      imgEl.style.setProperty(`--spacing`, `${inputValue}px`);
    } else if (inputName === "blur-input") {
      imgEl.style.setProperty(`--blur`, `${inputValue}px`);
    } else {
      imgEl.style.setProperty(`--base-color`, `${inputValue}`);
      spanEl.style.setProperty(`--base-color`, `${inputValue}`);
    }
  });
});
