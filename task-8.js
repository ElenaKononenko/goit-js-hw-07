const inputMumberRef = document.querySelector('[type="number"]');
const divBoxesRef = document.querySelector("#boxes");
const renderRef = document.querySelector('[data-action="render"]');
const destroyRef = document.querySelector('[data-action="destroy"]');

const createBoxes = (amount) => {
  for (let i = 0; i < amount; i += 1) {
    const newDiv = document.createElement("div");
    newDiv.style.width = 30 + i * 10 + "px";
    newDiv.style.height = 30 + i * 10 + "px";
    const theColor =
      "#" + (0x1000000 + Math.random() * 0xffffff).toString(16).substr(1, 6);
    newDiv.style.backgroundColor = theColor;
    divBoxesRef.appendChild(newDiv);
  }
};
renderRef.addEventListener("click", () => {
  createBoxes(Number(inputMumberRef.value));
});

destroyRef.addEventListener("click", () => {
  while (divBoxesRef.firstChild) {
    divBoxesRef.removeChild(divBoxesRef.firstChild);
  }
});
