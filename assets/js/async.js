// синхронний код

console.log('first');

console.log('second');

// for(let i = 0; i < 700_000_000; i++) {}

console.log('third');

// асинхроний код
const btn = document.getElementById('btn');

btn.addEventListener('click', () => {
  // while(true) {}
})

// setTimeout - функція встановлення зворотнього відліку

// setTimeout(function callback() {
//   console.log('delayed')
// }, 1000)

console.log(1);

console.log(2);

const id = setTimeout(() => {
  console.log(3);
}, 0)

console.log(4);
// 1, 2, 4, 3

// відміна таймаута по його id
clearTimeout(id)


// setInterval - встановлює інтервал
const intervalId = setInterval(() => {
  console.log('interval')
}, 1500)

clearInterval(intervalId);
// console.time('timer');
// let i = 1;

// const intervalFunc = setInterval(() => {
//   console.log(i++);

//   if(i > 10) {
//     clearInterval(intervalFunc)
//     console.timeEnd('timer')
//   }
// }, 100);
// let i = 0;

// function mySetTimeoutFunc() {

//   setTimeout(() => {
//     if(i > 10) {
//       return;
//     }
//     i++;

//     console.log(i);

//     mySetTimeoutFunc();
//   }, 1000)
// }


const userData = {
  email: 'test@test.test',
  password: '12345admin',
  id: 5,
  address: {
    city: 'Kozatyn',
    country: 'Ukraine',
  },
  friends: [],
  isMale: true,
  someImportantData: null,
  someSymbol: Symbol('test me plz'),
  age: undefined,
  isAdult: function () {
    return this.age >= 18;
  }
}

// серіалізація - процес перетворення даних у вигляд зручний для передачі
const jsonString = JSON.stringify(userData);
/*
  відмінності JSON та JS
  1. рядки в JSON можуть бути тільки подвійними лапками
  2. ключи в об'єктах мають бути рядками
  3. відсутність висячих ком у кінці об'єктів та масивів 
*/

// десереалізація - процес відновлення  даних із зручного для передачі формату
const userData2 = JSON.parse(jsonString)


// Promise - обіцянка, сучасни спосіб написання асинхронного коду у JS
// вирішує проблему коллбек хела
/*
  проміс - спеціальний об'єкт містить результат роботи асинхронної операції

  у об'єкта проміса є 3 можливих стани
    - pending (очікується) - очікує виконання асинхроної операції
    - fullfiled (виконаний) - асинхрона операція була успішно завершена
    - rejected (відхилений) - у промісі сталася помилка

  проміс може знаходитись у 2 з цих трьох станів

    pending -> fullfiled
    pending -> rejected
*/

// const promise = new Promise(executor);

// function executor (resolve, reject) {
//   // console.log(resolve);
//   // console.log(reject);

//   // функція яка сигналізує, що дія виконана успішно
//   // і аргумент цієї функції буде результуючим
//   // resolve('test string')
//   reject('test string')
  
// }


// then - метод який дозволить зреагувати на завершення асинхронної операції
// promise.then(
//   // запускається при успішному виконанні проміса
//   function fullfilledCallback(param) {
//     console.log('promise fullfilled');
//     console.log(param); // результат роботи проміса   
//   },
//   function rejectedCallback (error) {
//     console.log('promise rejected');
//     console.error(error);
//   }
// )

// catch - метод для обробки помилок в промісах
// promise.catch(function rejectedCallback (error) {
//   console.log('promise rejected');
//   console.log(error);
// });

const randomPromise = new Promise(executor);

function executor (resolve, reject) {
  Math.random() > 0.5 ? resolve('success') : reject('unlucky');
}

randomPromise.then((param) => {
  console.log(param);
}).catch((param) => {
  console.log(param)
});

// randomPromise.catch((param) => {
//   console.log(param);
// })

fetch('https://jsonplaceholder.typicode.com/posts/1')
  .then((response) => {
  // console.log(response)

  // асинхроний метод десереалізації даних
  return response.json();
}).then((data) => {
  console.log(data)
})
