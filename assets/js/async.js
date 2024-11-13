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