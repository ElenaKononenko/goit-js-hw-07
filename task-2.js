const ingredients = [
  "Картошка",
  "Грибы",
  "Чеснок",
  "Помидоры",
  "Зелень",
  "Приправы",
];
const ingredient = document.getElementById("ingredients");
const ingredArr = ingredients.map((el) => {
  let item = document.createElement("li");
  item.textContent = el;
  return item;
});

ingredArr.forEach((el) => {
  ingredient.appendChild(el);
});
