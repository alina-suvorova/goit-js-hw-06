"use strict"



const fontEl = document.querySelector("#font-size-control");
const textEl = document.querySelector("#text");

function clickInput () {
  textEl.style.fontSize = fontEl.value + "px";
};

fontEl.addEventListener('input', clickInput);



// Напиши скрипт, который реагирует на изменение значения 
//input#font-size-control (событие input) и изменяет инлайн-стиль span#text 
//обновляя свойство font-size. В результате при перетаскивании ползунка будет 
//меняться размер текста.