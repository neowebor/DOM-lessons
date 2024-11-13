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
