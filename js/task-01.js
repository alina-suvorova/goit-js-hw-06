"use strict"
//1
const categoriesList = document.querySelectorAll('li.item');
console.log(`Number of categories: ${categoriesList.length}`);

//2
const itemEl = document.querySelectorAll('li.item');

itemEl.forEach (elem => {
    console.log(`Category: ${elem.firstElementChild.textContent}`);
    console.log(`Elements: ${elem.lastElementChild.children.length}`);
});


// Number of categories: 3

// Category: Animals
// Elements: 4

// Category: Products
// Elements: 3

// Category: Technologies
// Elements: 5