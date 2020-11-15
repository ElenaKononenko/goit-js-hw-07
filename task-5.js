const inputName = document.querySelector("#name-input");
const spanName = document.querySelector("#name-output");
inputName.addEventListener("input", () => {
  spanName.textContent =
    inputName.value.length > 0 ? inputName.value : "незнакомец";
});
