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

// clickMeBtn.addEventListener("click", showMessage());

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
  console.log(event);

  // посилання на об'єкт з якими сталася подія
  console.log(event.target);

  // посилання на об'єкт, чий обробник було запущено
  console.log(event.currentTarget);

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

const myBtn = document.querySelector(".button");
const myParagraph = document.querySelector(".button-text");

function handleSquareBtnClick() {
  const number = +prompt("Enter your number:");

  if (isNaN(number)) {
    throw new TypeError("Invalid type");
  }

  myParagraph.textContent = Math.pow(number, 2);
}

myBtn.addEventListener("click", handleSquareBtnClick);

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

const btnContainer = document.getElementById("btn-container");

function logText(e) {
  if (e.target.tagName === "BUTTON") {
    console.log(e.target.textContent);
  }
}

btnContainer.addEventListener("click", logText);

const themeContainer = document.getElementById("theme-container");

function handleSwitchTheme(e) {
  if (e.target.tagName === "BUTTON") {
  }
}

themeContainer.addEventListener("click", handleSwitchTheme);

/*
  Форми
*/

// const formSubmitBtn = document.getElementById("formSubmitBtn");
// const form = document.getElementById("form");

// formSubmitBtn.addEventListener('click', (e) => {
//   console.log('test');
//   e.preventDefault();
// })

// form.addEventListener("submit", (e) => {
//   e.preventDefault();

//   const { target: formElement } = e;

//   // всі інтеррактивні елементи форми
//   console.log(formElement.elements);

//   const formInput = formElement.elements.inputName;

//   // отримати значення, яке було введено в input - value
//   console.log(formInput.value);

//   // тут тексту не буде
//   // console.log(formInput.textContent);

//   // очистка даних у формі
//   // formInput.value = '';

//   formElement.reset();
// });

/*
  рішення задачки
*/

const squareForm = document.getElementById("squareForm");
const squareDisplay = document.querySelector(".squareDisplay");

squareForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const {
    target: {
      elements: { num },
    },
    target,
  } = e;

  const number = +num.value;
  if (isNaN(number)) {
    squareDisplay.textContent = `Введіть корректне число`;
  } else {
    squareDisplay.textContent = `Результат: ${Math.pow(num.value, 2)}`;
  }

  target.reset();
});

const imgSwitchBtn = document.getElementById("imgSwitchBtn");
const picture = document.getElementById("picture");

imgSwitchBtn.addEventListener("click", (e) => {
  // зміна атрибутів
  // сеттери для унікальних атрибутів елемента / деяких глобальних атрибутів
  // picture.src = 'assets/img/cat.jpg';
  // picture.alt = 'Кіт'
  // через setAttribute
  // picture.setAttribute('src', 'assets/img/cat.jpg')
  // picture.setAttribute('src', 'Кіт')
  // через вузол-атрибут
  // const srcNode = document.createAttribute('src');
  // console.dir(srcNode)
  // srcNode.value = 'assets/img/cat.jpg';
  // picture.setAttributeNode(srcNode);
});

/*
  ще деякі цікаві методи роботи з атрибутами:

  picture.hasAttribute('src') - перевірка наявності атрибута
  picture.getAttribute('src') - отримання значення атрибута
  picture.getAttributeNode('src') - отримати об'єкт вузла атрибута

  picture.removeAttribute('src') - прибирає атрибут з елемента
*/

// const attrImg = document.getElementById("attrImg");
// const attrBtn = document.getElementById("attrBtn");

// const imgData = [
//   ["assets/img/nature.jpg", "nature"],
//   ["assets/img/cat.jpg", "cat"],
// ];

// attrImg.setAttribute("src", imgData[0][0]);
// attrImg.setAttribute("alt", imgData[0][1]);

// attrBtn.addEventListener("click", (e) => {
//   const currentSrc = attrImg.getAttribute("src");

//   const imgIndex = imgData.findIndex((image) => currentSrc === image[0]);

//   const [src, alt] = imgData[(imgIndex + 1) % imgData.length];

//   attrImg.setAttribute("src", src);
//   attrImg.setAttribute("alt", alt);
// });

/*
  Користувацькі атрибути (data-*)
  атрибути, які починаються з data-
*/

// const div = document.getElementById('div');

// // отримання значення користувацького атрибуту
// const currentTheme = div.getAttribute('data-theme');

// div.setAttribute('data-theme', 'dark')

// const black = document.getElementById('black');
// const white = document.getElementById('white');
// const red = document.getElementById('red');

// const buttonWrap = document.querySelector('.button-wrap');

// black.addEventListener('click', (e) => {
//   buttonWrap.setAttribute('data-theme', 'black');
// });

// white.addEventListener('click', (e) => {
//   buttonWrap.setAttribute('data-theme', 'white');
// });

// red.addEventListener('click', (e) => {
//   buttonWrap.setAttribute('data-theme', 'red');
// });

const buttonWrap = document.querySelector(".button-wrap");

buttonWrap.addEventListener("click", (e) => {
  const { target } = e;

  if (target.tagName === "BUTTON") {
    const bg = target.dataset.bg;
    buttonWrap.style.backgroundColor = bg;
  }
});

const elem = document.createElement("div");
elem.id = "text";
elem.textContent = "Hello from DOM";

const rootDiv = document.getElementById("root");

// вставка elem останньою дитиною rootDiv
rootDiv.appendChild(elem);

/*
  Element - клас елементів у ДОМ

  elem.children - отримати доступ до дітей-елементів певного елемента 
  elem.className - Рядок з класом елемента
  elem.className = 'class-1 class-2' - заміна класів для елементу

  elem.classList - об'єкт атрибуту класу
  elem.classList.add('className') - додає до існуючих класів новий класс
  elem.classList.remove() - прибирає вказаний клас/и зі списку існуючих
  elem.classList.toggle('className') - додає або видаляє вказаний клас в залежності від того є він чи його нема

  elem.innerHTML - дає доступ до повної внутрішньої HTML розмітки елемента
*/

const post = {
  user: "Test Testovich",
  id: 1,
  title:
    "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
  body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",
};

const renderRoot = document.getElementById('renderRoot');

function createPost(postObject) {
  const postArticle = document.createElement('article');
  postArticle.classList.add('post');

  const postTitle = document.createElement('h2');
  postTitle.classList.add('post-title');
  postTitle.textContent = postObject.title;

  const postSubtitle = document.createElement('h3');
  postSubtitle.classList.add('post-subtitle');
  postSubtitle.textContent = postObject.user;

  const postText = document.createElement('p');
  postText.classList.add('post-text');
  postText.textContent = postObject.body;

  postArticle.append(postTitle, postSubtitle, postText);

  return postArticle;
}

const post1Elem = createPost(post);

renderRoot.append(post1Elem);