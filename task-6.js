const inputRef = document.querySelector("#validation-input");

inputRef.addEventListener("blur", () => {
  if (inputRef.value.length === Number(inputRef.dataset["length"])) {
    inputRef.classList.add("valid");
    inputRef.classList.remove("invalid");
  } else {
    inputRef.classList.remove("valid");
    inputRef.classList.add("invalid");
  }
});
