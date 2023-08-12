// 1. Запитай у користувача його вік і визначи, ким він є: дитиною (0-11), підлітком (12-17), дорослим (18_59) або пенсіонером (60 ...), передбач можливість введення невірних даних.

const userAge = +prompt('enter your age');
const adulthood =  (userAge < 2) ? 'You are an infant' :
  (userAge < 11) ? 'You are a chlid' :
  (userAge < 18) ? 'You are a teenager' :
  (userAge < 59) ? 'You are an adult' :
  (userAge < 100) ? 'You are a senior' :
   'What an unusual age!';
console.log(adulthood);


// 2. 





// 3. 

