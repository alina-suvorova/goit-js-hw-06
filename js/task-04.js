"use strict"


const button = {
    increment: document.querySelector("[data-action='increment']"),
    span: document.querySelector("#value"),
    decrement: document.querySelector("[data-action='decrement']"),
  };
  
  let counterValue = 0;

  const btnIncrement = () => {
    counterValue += 1;
   button.span.textContent = counterValue;
  };
  
  const btnDecrement = () => {
    counterValue -= 1;
    button.span.textContent = counterValue;
  };
  
  button.increment.addEventListener("click", btnIncrement);
  button.decrement.addEventListener("click", btnDecrement);



// Счетчик состоит из спана и кнопок, которые, при клике, должны увеличивать и уменьшать его значение на единицу.
// Создай переменную counterValue в которой будет храниться текущее значение счетчика и инициализируй её значением 0.
// Добавь слушатели кликов на кнопки, внутри которых увеличивай или уменьшай значение счтетчика.
// Обновляй интерфейс новым значением переменной counterValue.