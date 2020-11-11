const ingredients = [
    'Картошка',
    'Грибы',
    'Чеснок',
    'Помидоры',
    'Зелень',
    'Приправы',
  ];
 const ingredient = document.getElementById('ingredients')
 const tegs =  ingredients.map((el) => {
 let item =  document.createElement('li')
 item.textContent = el
 ingredient.appendChild(item)
 })

  

