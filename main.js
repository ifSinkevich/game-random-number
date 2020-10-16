'use strict';
let isNumber = function(n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
};

let myNumber = function(min, max) {
  let rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
};

let getInvitationGame = function() {
  let userInput = confirm('Отгадаешь число от 1 до 100?');

  if (!userInput) {
    gameOver();
  } else {
    gameContinue();
  };  
};

let gameOver = function() {
  alert('Игра закончена!')
};

let comparisonNumber = function(n) {
  if (Number(n) === myNumber(1, 100)){
    alert ('Поздравляю, Вы угадали!');
    gameOver();
  } 
  if (Number(n) > myNumber(1, 100)) {
    alert ('Загаданное число меньше!');
    gameContinue();
  } 
  if (Number(n) < myNumber(1, 100)) {
    alert ('Загаданное число больше!');
    gameContinue();
  }; 
} 

let gameContinue = function() {
  let userNumber = prompt ('Введи число от 1 до 100:');
    if (!isNumber(userNumber) && userNumber != null) {
      gameContinue();  
    } else if (userNumber === null) {
      gameOver();
    } else {
      comparisonNumber(userNumber);
    }; 
     
};

getInvitationGame();