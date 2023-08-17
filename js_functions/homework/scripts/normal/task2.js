// Напиши функцію, яка приймає мінімальне і максимальне значення для діапазону,
// і виводить тільки ті числа з діапазону, які є досконалими. 
// Використовуй написану раніше функцію, щоб дізнатися, чи є це число досконалим.

// function isPerfectNumber(num) {
//     if (num <= 1) {
//         return false;
//     }
    
//     let sum = 1; // Початкове значення суми (1 завжди входить)
//     for (let i = 2; i <= Math.sqrt(num); i++) {
//         if (num % i === 0) {
//             sum += i;
//             if (i !== num / i) {
//                 sum += num / i;
//             }
//         }
//     }
    
//     return sum === num;
// }

// function printPerfectNumbersInRange(min, max) {
//     for (let i = min; i <= max; i++) {
//         if (isPerfectNumber(i)) {
//             console.log(i);
//         }
//     }
// }

// // Приклад виклику функції для діапазону від 1 до 10000
// printPerfectNumbersInRange(1, 10000);