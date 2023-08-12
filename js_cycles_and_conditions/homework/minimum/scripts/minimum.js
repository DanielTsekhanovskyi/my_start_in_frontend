// 1. Запитай у користувача його вік і визначи, ким він є: дитиною (0-11), підлітком (12-17), дорослим (18_59) або пенсіонером (60 ...), передбач можливість введення невірних даних.

const userAge = +prompt('enter your age');
const adulthood =  (userAge < 2) ? 'You are an infant' :
  (userAge < 11) ? 'You are a chlid' :
  (userAge < 18) ? 'You are a teenager' :
  (userAge < 59) ? 'You are an adult' :
  (userAge < 100) ? 'You are a senior' :
   'What an unusual age!';
console.log(adulthood);



// 2. Запитай у користувача число від 0 до 9 і виведи йому спецсимвол, який розташований на цій клавіші (1 !, 2 @, 3 # і т. д).

let number = +prompt('Назви число 0-9');
if (number === 1) {
alert('!');
} else if (number === 2) {
  alert('@');
} else if (number === 3) {
  alert('#');
} else if (number === 4) {
  alert('$');
} else if (number === 5) {
  alert('%');
} else if (number === 6) {
  alert('^');
} else if (number === 7) {
  alert('&');
} else if (number === 8) {
  alert('*');
} else if (number === 9) {
  alert('(');
} else {
  alert('Некоректне число. Введіть число від 0 до 9.');
}

// або

let number = +prompt('Назви число 0-9');
const symbols = {
  1: '!',
  2: '@',
  3: '#',
  4: '$',
  5: '%',
  6: '^',
  7: '&',
  8: '*',
  9: '('
};

if (symbols[number]) {
  alert(symbols[number]);
} else {
  alert('Некоректне число. Введіть число від 0 до 9.');
}

// 3. Підрахуй суму всіх чисел в заданому користувачем діапазоні.

let initialNumber = +prompt('Назви початкове число діапазону');
let finalNumber = +prompt('Назви кінцеве число діапазону');
let sum = 0;
for (let i = initialNumber; i <= finalNumber; i++) {
sum += i; }
alert(`Сума всіх чисел у діапазоні від ${initialNumber} до ${finalNumber} дорівнює: ${sum}`);

// 4. Запитай у користувача 2 числа і знайди найбільший спільний дільник.

// Функція для знаходження найбільшого спільного дільника (НСД)

function findGCD(a, b) {
  while (b !== 0) {
      var temp = b;
      b = a % b;
      a = temp;
  }
  return a;
}

// Запитати користувача про два числа
let userInput1 = +prompt("Введіть перше число:");
let userInput2 = +prompt("Введіть друге число:");

// Знайти найбільший спільний дільник
const gcd = findGCD(userInput1, userInput2);

// Вивести результат
console.log("Найбільший спільний дільник чисел " + userInput1 + " і " + userInput2 + " дорівнює " + gcd);

// 5. Запитай у користувача число і виведи всі дільники цього числа.

// Запитати користувача про число
const userInput = +prompt("Введіть число:");

// Вивести всі дільники числа
console.log(`Дільники числа ${userInput}:`);

for (let i = 1; i <= userInput; i++) {
    if (userInput % i === 0) {
        console.log(i);
    }
}