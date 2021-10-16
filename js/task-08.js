"use strict"




const formEl = document.querySelector('.login-form');

formEl.addEventListener('submit', onFormSubmit);

function onFormSubmit (event){
    
event.preventDefault();
const inputMail = document.querySelector('.inputMail');
const inputPassword = document.querySelector('.inputPassword');

if(!inputMail.value || !inputPassword.value){
    alert('Все поля должны быть заполнены!');
} else {
const formElements = event.currentTarget.elements;

const mail = formElements.email.value;
const password = formElements.password.value;
const formData = {mail, password};
console.log(formData);

formEl.reset();
}
}



// Обработка отправки формы form.login-form должна быть по событию submit.

// При отправке формы страница не должна перезагружаться.

// Если в форме есть незаполненные поля, выводи alert с предупреждением о том, 
// что все поля должны быть заполнены.

// Если пользователь заполнил все поля и отправил форму, 
// собери значения полей в обьект, где имя поля будет именем свойства, 
// а значение поля - значением свойства. Для доступа к элементам формы 
// используй свойство elements.

// Выведи обьект с введенными данными в консоль и очисти значения полей
// формы методом reset.