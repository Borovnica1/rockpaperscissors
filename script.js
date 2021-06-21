function computerPlay() {
  const moves = ['paper', 'rock', 'scissors'];
  return moves[Math.floor(Math.random()*3)];
}

function playRound(playerChoice, computerChoice) {
  playerChoice = playerChoice.toLowerCase();
  computerChoice = computerChoice.toLowerCase();
  
  if (playerChoice === computerChoice) {
    return [2, 'Draw!']
  } else if (playerChoice === 'paper' && computerChoice === 'rock') {
    return [0, 'You Win! Paper beats Rock']
  } else if (playerChoice === 'rock' && computerChoice === 'paper') {
    return [1, 'You Lose! Paper beats Rock']
  } else if (playerChoice === 'paper' && computerChoice === 'scissors') {
    return [1, 'You Lose! Scissors beats Paper']
  } else if (playerChoice === 'scissors' && computerChoice === 'paper') {
    return [0, 'You Win! Scissors beats paper']
  } else if (playerChoice === 'scissors' && computerChoice === 'rock') {
    return [1, 'You Lose! Rock beats Scissors']
  } else if (playerChoice === 'rock' && computerChoice === 'scissors') {
    return [0, 'You Win! Rock beats Scissors']
  }
}

function game() {
  let playerWonRounds = 0;
  let computerWonRounds = 0;
  for (let i = 0; i < 5; i++) {
    const playerChoice = prompt(`Type: \'paper\' or \'rock\' or \'scissors\'! Won round: You-${playerWonRounds} Computer-${computerWonRounds}`);
    
    let winnerArr = playRound(playerChoice, computerPlay());
    
    console.log(winnerArr[0], winnerArr[1])
    if (winnerArr[0] === 2) {
      playerWonRounds++;
      computerWonRounds++;
    } else if (winnerArr[0] === 1) computerWonRounds++;
    else playerWonRounds++;
  }
  console.log(`The winner is ${playerWonRounds > computerWonRounds ? 'You' : 'Computer'}`);
}
game()