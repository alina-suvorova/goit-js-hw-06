"use strict"




function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function buttonClick (event) {
document.querySelector('.color').textContent = getRandomHexColor();
document.body.style.background = getRandomHexColor();
}

document.querySelector('.widget').addEventListener('click', buttonClick);




//Напиши скрипт, который изменяет цвета фона элемента <body> через 
//инлайн стиль при клике на button.change-color и выводит значение цвета 
//в span.color.

// Для генерации случайного цвета используй функцию getRandomHexColor.