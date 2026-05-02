const spacingInputEl = document.querySelector("#spacing-label");
const blurInputEl = document.querySelector("#blur-label");
const colorInputEl = document.querySelector("#color-label");
colorInputEl.value = "#ffffff";

const spanEl = document.querySelector("span");

const imgEl = document.querySelector("img");

spacingInputEl.addEventListener("input", (event) => {
  let spacingValue = event.target.value;
  imgEl.style.setProperty(`--spacing`, `${spacingValue}px`);
});

blurInputEl.addEventListener("input", (event) => {
  let blurValue = event.target.value;
  imgEl.style.setProperty(`--blur`, `${blurValue}px`);
});

colorInputEl.addEventListener("input", (event) => {
  let colorValue = event.target.value;
  imgEl.style.setProperty(`--base-color`, `${colorValue}`);
  spanEl.style.setProperty(`--base-color`, `${colorValue}`);
});
