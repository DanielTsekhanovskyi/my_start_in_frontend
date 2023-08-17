// 1. Запитай у користувача п’ятирозрядне число і визначи, чи є воно паліндромом.

// Запитати користувача про п'ятирозрядне число
const userInput = prompt("Введіть п'ятирозрядне число:");

// Перевірити, чи є число паліндромом
if (userInput.length !== 5) {
    console.log("Введіть правильне п'ятирозрядне число.");
} else if (userInput === userInput.split("").reverse().join("")) {
    console.log("Це число є паліндромом.");
} else {
    console.log("Це число не є паліндромом.");
}

// 2. Запитай у користувача суму покупки і виведи суму до оплати зі знижкою:
// від 200 до 300 - знижка буде 3%; 
// від 300 до 500 - 5%;
// від 500 і вище - 7%.

// Запитати користувача про суму покупки
const sum = parseFloat(prompt("Введіть суму покупки:"));

// Змінна для зберігання суми зі знижкою
let discountedAmount;

// Визначити знижку в залежності від суми покупки
if (purchaseAmount >= 200 && purchaseAmount < 300) {
    discountedAmount = purchaseAmount * 0.97; // 3% знижка
} else if (purchaseAmount >= 300 && purchaseAmount < 500) {
    discountedAmount = purchaseAmount * 0.95; // 5% знижка
} else if (purchaseAmount >= 500) {
    discountedAmount = purchaseAmount * 0.93; // 7% знижка
} else {
    discountedAmount = purchaseAmount; // Якщо немає знижки
}

// Вивести суму до оплати зі знижкою
console.log("Сума до оплати зі знижкою: " + discountedAmount.toFixed(2));

// 3. Запитай у користувача 10 чисел і порахуй, скільки він ввів додатніх, від’ємних і нулів. При цьому також порахуй, скільки з них парних і непарних. Виведи статистику на екран.

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let positive = 0, negative = 0, zero = 0, even = 0, odd = 0;

function askNumber() {
  rl.question('Введіть число (або будь-який нечисловий рядок для завершення): ', input => {
    const number = parseFloat(input);
    if (!isNaN(number)) {
      if (number > 0) positive++;
      else if (number < 0) negative++;
      else zero++;

      if (number % 2 === 0) even++;
      else odd++;

      askNumber();
    } else {
      displayStatistics();
      rl.close();
    }
  });
}

function displayStatistics() {
  console.log('Статистика:');
  console.log(`Додатні числа: ${positive}`);
  console.log(`Від’ємні числа: ${negative}`);
  console.log(`Нулі: ${zero}`);
  console.log(`Парні числа: ${even}`);
  console.log(`Непарні числа: ${odd}`);
}

askNumber();

// 4. Зацикли відображення днів тижня таким чином: «День тижня. Хочеш побачити наступний день? » і так до тих пір, поки користувач натискає OK.

const daysOfWeek = ['Понеділок', 'Вівторок', 'Середа', 'Четвер', 'Пятниця', 'Субота', 'Неділя'];
let currentDayIndex = 0;

while (confirm(`День тижня: ${daysOfWeek[currentDayIndex]}. Хочеш побачити наступний день?`)) {
    currentDayIndex = (currentDayIndex + 1) % daysOfWeek.length;
}