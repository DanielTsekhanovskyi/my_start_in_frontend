// Напиши функцію, яка перевіряє, чи є передане їй число “досконалим числом”.
// Досконале число - це число, яке дорівнює сумі всіх своїх дільників.

// function isPerfectNumber(number) {
//     let sum = 0;
    
//     for (let i = 1; i < number; i++) {
//         if (number % i === 0) {
//             sum += i;
//         }
//     }

//     return sum === number;
// }

// // Перевірка, чи число 28 є досконалим
// let numberToCheck = 28;
// if (isPerfectNumber(numberToCheck)) {
//     console.log(`${numberToCheck} є досконалим числом.`);
// } else {
//     console.log(`${numberToCheck} не є досконалим числом.`);
// }