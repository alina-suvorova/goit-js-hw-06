"use strict"

const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

// const itemEl = document.querySelector('#ingredients');

// ingredients.forEach (ingredient => {
// //1
//   const newEl = document.createElement('li');
// //2
//   newEl.textContent = ingredient;
// //3
//   newEl.classList.add('item');
//   itemEl.append(newEl);
// }); 

const itemEl = document.querySelector('#ingredients');

const array = [];

ingredients.forEach (ingredient => {
//1
  const newEl = document.createElement('li');
//2
  newEl.textContent = ingredient;
//3
  newEl.classList.add('item');
  
  array.push(newEl);
}); 

itemEl.append(...array);

// Напиши скрипт, который для каждого элемента массива ingredients:

// 1. Создаст отдельный элемент <li>. Обзательно используй метод document.createElement().
// 2. Добавит название ингредиента как его текстовое содержимое.
// 3. Добавит элементу класс item.
// 4. После чего вставит все <li> за одну операцию в список ul.ingredients.