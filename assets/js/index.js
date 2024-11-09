"use strict";
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

console.log(document);

/*
  концепції взаємодії з DOM:
    1. Все у DOM зроблено у вигляді об'єктів
    2. Маємо можливість казати ДОМу, що ми хочему зробити за допомогою подій
*/

// 1. знайти кнопку
const buttons = document.getElementsByTagName("button");
const [clickMeBtn] = buttons;

// 2. сказати що робити
function showMessage() {
  let i = 1;

  return () => {
    alert(`You clicked on button ${i++} times`);
  };
}

// 3. при кліку запустити функцію
/* 
  target.addEventListener(type, listener)

  target - той, з ким відбудеться подія
  type - рядок, який каже яка саме подія має трапитись
  listener - функція яка запуститься браузером коли подія відбудеться з target
*/

clickMeBtn.addEventListener("click", showMessage());

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
const [firstErrorBtn] = document.getElementsByClassName("error");

// повертає масивоподібну колекцію всіх елементів на сторінці з вказаним атрибутом name
const inputs = document.getElementsByName("someInputName");

// повертає перший елемент на сторінці з вказаним айдішніком
const select1 = document.getElementById("select1");

// повертає перший елемент на сторінці з вказаним css селектором
const h1 = document.querySelector("#h1");

const btns = document.querySelectorAll("button");

/*
  на кнопку ресет повісити функцію-слухач яка має виводити повідомлення
    повідомлення має показатися тільки при першому натисканні на кнопку
*/

const resetBtn = document.getElementById("resetBtn");

// 1. рішення через зовнішню змінну
// let isMessageShown = false;

// function handleResetBtn() {
//   if(!isMessageShown) {
//     alert('Ви клікнули на кнопку reset');
//     isMessageShown = true;
//   }

// }

// рішення 2 - зробити одноразовим об'єкт налаштувань addEventListener
// function handleResetBtn() {
//   alert("Ви клікнули на кнопку reset");
// }

// рішення 3
function handleResetBtn(event) {
  // об'єкт події, що трапилась
  console.log(event)

  // посилання на об'єкт з якими сталася подія
  console.log(event.target);

  // посилання на об'єкт, чий обробник було запущено
  console.log(event.currentTarget)

  alert("Ви клікнули на кнопку reset");

  // прибираємо слуха після того як він відпрацював
  // resetBtn.removeEventListener("click", handleResetBtn);
}

// function testFunc () {
//   console.log('testing');
// }

resetBtn.addEventListener("click", handleResetBtn);
// resetBtn.addEventListener("click", testFunc);


// dispatchEvent - симулює подію на якомусь елементі

/*
  Node (вузол) - основний будівельний блок ДОМ-у
  Всі елементи, атрибути текста у ДОМі робляться через вузли

  Основні властивості вузлів:

  node.baseURI - URL адреса сайту
  
  node.childNodes - список всіх дитячих вузлів поточного вузла
  node.firstChild - перший дитячий вузол
  node.lastChild - останній дитячий вузол
  
  node.nextSibling - посилання на наступний вузол  
  
  node.parentNode - повертає батьківський вузол
  node.parentElement - повертає батьківський елемент

  node.textContent - містить текстовий вміст цього вузла. Дозволяє міняти текст вузла / елемента
*/

const myBtn = document.querySelector('.button');
const myParagraph = document.querySelector('.button-text');

function handleSquareBtnClick() {
  const number = +prompt('Enter your number:');

  if(isNaN(number)) {
    throw new TypeError('Invalid type');
  }

  myParagraph.textContent =  Math.pow(number, 2);
}

myBtn.addEventListener('click', handleSquareBtnClick);

/*
  Фази обробки подій:
    1. дивиться з ким сталася наша подія (занурення)
    2. найглибший елемент у дереві з яким подія трапилась (target) 
    3. браузер запускає обробники подій починаючи з найглибшого до найпершого (всплиття)
*/

// btn -> container -> body -> document

// якщо я хочу, щоб всплиття зупинилось, можно визвати event.stopPropagation() - буквально припиняється подальший запуск обробників подій

// const btn1 = document.getElementById('btn1');
// const btn2 = document.getElementById('btn2');
// const btn3 = document.getElementById('btn3');
// const btn4 = document.getElementById('btn4');

const btnContainer = document.getElementById('btn-container')

function logText(e) {
  if(e.target.tagName === 'BUTTON') {
    console.log(e.target.textContent);
  }
}

btnContainer.addEventListener('click', logText);

