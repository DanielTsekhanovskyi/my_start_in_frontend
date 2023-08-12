// 1. Гра «Вгадай число»

let minRange = 0;
let maxRange = 100;
let guess;
let userAnswer;

console.log("Загадайте число від 0 до 100.");
console.log("Відповідайте '>', '<' або '=', в залежності від того, чи більше, менше чи дорівнює ваше число згаданому.");

while (true) {
    guess = Math.floor((minRange + maxRange) / 2);
    userAnswer = prompt(`Ваше число > ${guess}, < ${guess} або = ${guess}?`);

    if (userAnswer === ">") {
        minRange = guess + 1;
    } else if (userAnswer === "<") {
        maxRange = guess - 1;
    } else if (userAnswer === "=") {
        console.log(`Ти загадав число ${guess}.`);
        break;
    } else {
        console.log("Будь ласка, введіть '>' або '<' або '='.");
    }
}

// 2. Виведи таблицю множення для всіх чисел від 2 до 9. Кожне число необхідно помножити на числа від 1 до 10.

for (let i = 2; i <= 9; i++) {
    console.log(`Таблиця множення для ${i}:`);
    for (let j = 1; j <= 10; j++) {
        console.log(`${i} * ${j} = ${i * j}`);
    }
    console.log('\n'); // Додатковий рядок для розділення таблиць
}

// 3. Запитай дату (день, місяць, рік) і виведи наступну за нею дату. Враховуй можливість переходу на наступний місяць, рік, а також високосний рік.

function isLeapYear(year) {
    return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
}

function getNextDate(day, month, year) {
    const daysInMonth = [0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

    if (isLeapYear(year)) {
        daysInMonth[2] = 29;
    }

    if (day < daysInMonth[month]) {
        day++;
    } else {
        day = 1;
        if (month < 12) {
            month++;
        } else {
            month = 1;
            year++;
        }
    }

    return { day, month, year };
}

const inputDay = parseInt(prompt("Введіть день:"));
const inputMonth = parseInt(prompt("Введіть місяць:"));
const inputYear = parseInt(prompt("Введіть рік:"));

const nextDate = getNextDate(inputDay, inputMonth, inputYear);

console.log(`Наступна дата: ${nextDate.day}.${nextDate.month}.${nextDate.year}`);