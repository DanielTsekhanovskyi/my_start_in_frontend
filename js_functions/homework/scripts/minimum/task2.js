// Створи функцію, яка буде виводити кількість переданих їй аргументів.

// function name(argument1, argument2, argument3, argument4) {
//     console.log("Кількість аргументів: " + name.length);
//   }

//   name(); // Виведе функцію

function displayArguments() {
  for (let i = 0; i < arguments.length; i++) {
    console.log(arguments[i]);
  }
}

// displayArguments(1, 'asdas', null, true, [], {});
