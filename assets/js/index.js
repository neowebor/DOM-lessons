'use strict'
/*
  DOM:
    Document
    Object
    Model
  об'єктна модель документа.

  Отримання доступу до DOM
    window - об'єктне уявлення браузера
    window.document - DOM
*/

console.log(document)

/*
  концепції взаємодії з DOM:
    1. Все у DOM зроблено у вигляді об'єктів
    2. Маємо можливість казати ДОМу, що ми хочему зробити за допомогою подій
*/

// 1. знайти кнопку
const buttons = document.getElementsByTagName('button');
const [clickMeBtn] = buttons;

// 2. сказати що робити
function showMessage () {
  let i = 1;

  return () => {
    alert(`You clicked on button ${i++} times`);
  }
}

// 3. при кліку запустити функцію
/* 
  target.addEventListener(type, listener)

  target - той, з ким відбудеться подія
  type - рядок, який каже яка саме подія має трапитись
  listener - функція яка запуститься браузером коли подія відбудеться з target
*/

clickMeBtn.addEventListener('click', showMessage());


/*
  Методи пошуку елементів у ДОМ-дереві

  document.getElementsByTagName()
    повертає масивоподібну колекцію всіх елементів на сторінці з вказаним тегом

  document.getElementsByClassName()
    повертає масивоподібну колекцію всіх елементів на сторінці з вказаним класом

  document.getElementsByName()
    повертає масивоподібну колекцію всіх елементів на сторінці з вказаним атрибутом name

  + document.getElementById()
    повертає перший елемент на сторінці з вказаним айдішніком

  + document.querySelector() - повертає перший елемент на сторінці з вказаним css селектором
  + document.querySelectroAll() - повертає маисв елементів на сторінці з вказаним css селектором

*/

// повертає масивоподібну колекцію всіх елементів на сторінці з вказаним класом
const [firstErrorBtn] = document.getElementsByClassName('error');

// повертає масивоподібну колекцію всіх елементів на сторінці з вказаним атрибутом name
const inputs = document.getElementsByName('someInputName');

// повертає перший елемент на сторінці з вказаним айдішніком
const select1 = document.getElementById('select1');

// повертає перший елемент на сторінці з вказаним css селектором
const h1 = document.querySelector('#h1');

const btns = document.querySelectorAll('button');