let randomNumber = Math.floor(Math.random() * 3 + 1);

console.log('The random number is: ' + randomNumber);

let computerMove = 'unknown move';

if(randomNumber == 1){
   computerMove = 'stone';
} else if(randomNumber == 2){
   computerMove = 'paper';
} else(randomNumber == 3){
   computerMove = 'scissors';
}

printMessage('My move is: ' + computerMove);

let playerInput = prompt('Choose your move! 1: stone, 2: paper, 3: scissors.');

console.log('The player typed: ' + playerInput);

let playerMove = 'unknown move';

if(playerInput == '1'){
   playerMove = 'stone';
} else if(randomNumber == '2'){
   playerMove = 'paper';
} else(randomNumber == '3'){
   playerMove = 'scissors';
}

printMessage('Your move is: ' + playerMove);

if( computerMove == 'stone' && playerMove == 'paper'){
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
}