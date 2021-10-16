"use strict"

const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];


ingredients.forEach (ingredient => {
//1
  const newEl = document.createElement('li');
//2
  newEl.textContent = ingredient;
//3
  newEl.classList.add('item');
//4
  const itemEl = document.querySelector('#ingredients');
  itemEl.append(newEl);

}); 




// Напиши скрипт, который для каждого элемента массива ingredients:

// 1. Создаст отдельный элемент <li>. Обзательно используй метод document.createElement().
// 2. Добавит название ингредиента как его текстовое содержимое.
// 3. Добавит элементу класс item.
// 4. После чего вставит все <li> за одну операцию в список ul.ingredients.