const sizeControlRef = document.querySelector("#font-size-control");
const spanTextRef = document.querySelector("#text");

sizeControlRef.addEventListener("input", () => {
  let size = sizeControlRef.value + "px";
  spanTextRef.style.fontSize = String(size);
});
