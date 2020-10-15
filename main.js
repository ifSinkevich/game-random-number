'use strict';
let isNumber = function(n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
};

let gameRandomNumber = function() {
  let myNumber = 23;
  let userNumber = prompt ('Угадай число от 1 до 100:');
  
  if (!isNumber(userNumber) && userNumber != null) {
    confirm ('Введи число от 1 до 100:');
    if (confirm) {
      gameRandomNumber();
    } else {
      alert ('Игра закончена!');
    }    
  };

  if (Number(userNumber) < myNumber && userNumber != null) {
    alert ('Загаданное число больше!');
    gameRandomNumber();
  }
    if (Number(userNumber) > myNumber && userNumber != null) {
    alert ('Загаданное число меньше!');
    gameRandomNumber();
  }
    if (Number(userNumber) === myNumber && userNumber != null){
    alert ('Поздравляю, Вы угадали!');
  } 
  
  console.log('userNumber: ', userNumber, typeof(userNumber));    

}
gameRandomNumber();