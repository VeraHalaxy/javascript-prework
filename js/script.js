function playGame(playerInput){

   clearMessages();

   let randomNumber = Math.floor(Math.random() * 3 + 1);
   console.log('The random number is: ' + randomNumber);

   let computerMove = getMoveName(randomNumber);

   let playerMove = getMoveName(playerInput);
   printMessage('Your move is: ' + playerMove);

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
      if(argComputerMove == 'stone' && argPlayerMove == 'paper'){
         printMessage('You win!');
      } else if(argComputerMove == 'paper' && argPlayerMove == 'scissors'){
         printMessage('You win!');
      } else if(argComputerMove == 'scissors' && argPlayerMove == 'stone'){
         printMessage('You win!');
      } else if(argComputerMove == 'paper' && argPlayerMove == 'stone'){
         printMessage('You lose!');
      } else if(argComputerMove == 'scissors' && argPlayerMove == 'paper'){
         printMessage('You lose!');
      } else if(argComputerMove == 'stone' && argPlayerMove == 'scissors'){
         printMessage('You lose!');
      } else{
         printMessage('Dead heat!');
      } 
   }

   displayResult(computerMove, playerMove);

}

document.getElementById('play-stone').addEventListener('click', function(){
   playGame(1);
});

document.getElementById('play-paper').addEventListener('click', function(){
   playGame(2);
});

document.getElementById('play-scissors').addEventListener('click', function(){
   playGame(3);
});