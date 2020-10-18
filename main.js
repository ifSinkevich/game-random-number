'use strict';

let isNumber = function(n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
};

let startGame = function() {
    let rndNumber = function(min, max) {
          let rand = min + Math.random() * (max + 1 - min);
          return Math.floor(rand);
    };

    let myNumber = rndNumber(1, 100);
    console.log('myNumber: ', myNumber);

    alert ('Отгадай число от 1 до 100?');

      let gameContinue = function() {        
        
        let userNumber = prompt ('Введи число от 1 до 100:');
        console.log('userNumber: ', userNumber);

        if (userNumber === null) {
          alert('Игра закончена!')
        };

        if (!isNumber(userNumber) && userNumber != null) {
          gameContinue();
        };
        if (Number(userNumber) === myNumber) {
          alert ('Поздравляю, Вы угадали!');        
        }; 
        if (Number(userNumber) > myNumber) {
            alert ('Загаданное число меньше!');
            gameContinue();
        }; 
        if (Number(userNumber) < myNumber && userNumber != null) {
            alert ('Загаданное число больше!');
            gameContinue();
        }; 
    };

    gameContinue();   
  };   

startGame();