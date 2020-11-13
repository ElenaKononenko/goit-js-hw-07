const listItem = document.querySelectorAll(".item");
console.log(`В списке ${listItem.length} категории`);

listItem.forEach((el) => {
  el.firstElementChild.textContent;

  let categorie = el.firstElementChild.textContent;
  let total = el.querySelectorAll("li").length;
  console.log(`Категория: ${categorie}\nКоличество элементов: ${total}`);
});
