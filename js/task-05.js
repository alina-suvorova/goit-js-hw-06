"use strict"



const nameInput = document.querySelector("#name-input");
const nameOutput = document.querySelector("#name-output");

function clickInput() {
    if (nameInput.value === '') {
       nameOutput.innerHTML = 'Anonymous';
    } else {
    nameOutput.innerHTML = nameInput.value;
    }
}

nameInput.addEventListener('input', clickInput);


// Напиши скрипт который, при наборе текста в инпуте input#name-input 
//(событие input), подставляет его текущее значение в span#name-output. 
//Если инпут пустой, в спане должна отображаться строка "Anonymous".