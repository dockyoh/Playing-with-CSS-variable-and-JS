const inputEl = document.querySelectorAll("input");
const colorInputEl = document.querySelector("#color-label");
colorInputEl.value = "#ffffff";

inputEl.forEach((input) => {
  input.addEventListener("input", (event) => {
    const unitValue = event.target.dataset.unit || "";
    const inputValue = event.target.value;
    const inputName = event.target.name;
    document.documentElement.style.setProperty(
      `--${inputName}`,
      `${inputValue}${unitValue}`,
    );
  });
});
