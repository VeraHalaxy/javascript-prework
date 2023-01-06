function getMoveName(argMoveId){
   if(argMoveId == 1){
      return 'stone';
   } else if(argMoveId == 2){
      return 'paper';
   } else if(argMoveId == 3){
      return 'scissors';
   } else {
      printMessage('Unknown move ' + argMoveId + '.');
      return 'unknown move';
   }
}

function displayResult(argComputerMove, argPlayerMove){
   printMessage('I played ' + argComputerMove + ', and you ' + argPlayerMove);
   if( argComputerMove == 'stone' && argPlayerMove == 'paper'){
      printMessage('You win!');
   } else if( argComputerMove == 'paper' && argPlayerMove == 'scissors'){
      printMessage('You win!');
   } else if( argComputerMove == 'scissors' && argPlayerMove == 'stone'){
      printMessage('You win!');
   } else if( argComputerMove == 'paper' && argPlayerMove == 'stone'){
      printMessage('You lose!');
   } else if( argComputerMove == 'scissors' && argPlayerMove == 'paper'){
      printMessage('You lose!');
   } else if( argComputerMove == 'stone' && argPlayerMove == 'scissors'){
      printMessage('You win!');
   } else if( argComputerMove == 'scissors' && argPlayerMove == 'scissors'){
      printMessage('Dead Heat');
   } else if( argComputerMove == 'stone' && argPlayerMove == 'stone'){
      printMessage('Dead Heat');
   } else if( argComputerMove == 'paper' && argPlayerMove == 'paper'){
      printMessage('Dead Heat');
   } else {
      printMessage('Unknown Move');
   }
}

let randomNumber = Math.floor(Math.random() * 3 + 1);

console.log('The random number is: ' + randomNumber);

let computerMove = getMoveName(randomNumber);

/*if(randomNumber == 1){
   computerMove = 'stone';
} else if(randomNumber == 2){
   computerMove = 'paper';
} else(randomNumber == 3){
   computerMove = 'scissors';
}*/

printMessage('My move is: ' + computerMove);

let playerInput = prompt('Choose your move! 1: stone, 2: paper, 3: scissors.');

console.log('The player typed: ' + playerInput);

let playerMove = getMoveName(randomNumber);

/*if(playerInput == '1'){
   playerMove = 'stone';
} else if(randomNumber == '2'){
   playerMove = 'paper';
} else(randomNumber == '3'){
   playerMove = 'scissors';
}*/

printMessage('Your move is: ' + playerMove);

/*if( computerMove == 'stone' && playerMove == 'paper'){
   printMessage('You win!');
} else if( computerMove == 'parer' && playerMove == 'scissors'){
   printMessage('You win!');
} else if( computerMove == 'scissors' && playerMove == 'stone'){
   printMessage('You win!');
} else if( computerMove == 'stone' && playerMove == 'stone'){
   printMessage('Dead Heat');
} else if( computerMove == 'scissors' && playerMove == 'scissors'){
   printMessage('Dead Heat');
} else if( computerMove == 'paper' && playerMove == 'paper'){
   printMessage('Dead Heat');
} else if( computerMove == 'paper' && playerMove == 'stone'){
   printMessage('You lose!');
} else if( computerMove == 'scissors' && playerMove == 'paper'){
   printMessage('You lose!');
} else if( computerMove == 'stone' && playerMove == 'scissors'){
   printMessage('You lose!');
} else {
   printMessage('Unknown Move');
}*/