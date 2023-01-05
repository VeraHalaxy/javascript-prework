let computerMove = `stone`;
printMessage('I played a' + computerMove + 'If your move is paper, you win!');

let playerMove = `paper`;

let randomFraction = Math.random();

printMessage('The fraction drawn is: ' + randomFraction);

let calculation = randomFraction * 3 + 1;

printMessage('A fraction multiplied by 3 and increased by 1: ' + calculation);

let roundNumber = Math.floor(calculation);

printMessage('The number after rounding down is: ' + roundNumber);