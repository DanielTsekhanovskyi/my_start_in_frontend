// 1. Користувач вводить суму грошей в гаманці і ціну однієї шоколадки. Програма виводить скільки шоколадок може купити користувач і скільки здачі у нього залишиться.

const money = +prompt('Скільки в тебе грошей в гаманці?');
const price = +prompt('Яка ціна однієї шоколадки?');
let conversion = Math.floor(money / price);
let residue = (money - conversion);
if (price > money) {
alert('У вас недостатньо коштів для покупки шоколадки. Будь ласка, поповніть гаманець.');
} else {
alert("Ти можеш купити " + conversion + " шоколадки і в тебе залишиться " + residue + " здачі");
}



// 2. Запитай у користувача тризначне число і виведи його задом наперед. Для вирішення завдання тобі знадобиться оператор % (залишок від ділення).

// не вийшло виконати(