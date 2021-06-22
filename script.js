let playerWonRounds = 0;
let computerWonRounds = 0;
const buttons = document.querySelectorAll('.buttons__option');


function computerPlay() {
  const moves = ['paper', 'rock', 'scissors'];
  return moves[Math.floor(Math.random()*3)];
}

function playRound(e) {
  playerChoice = this.getAttribute('data-choice')
  computerChoice = computerPlay();
  
  if (playerChoice === computerChoice) {
    updateScore([2, 'Draw!'])
  } else if (playerChoice === 'paper' && computerChoice === 'rock') {
    updateScore([0, 'You Win! Paper beats Rock'])
  } else if (playerChoice === 'rock' && computerChoice === 'paper') {
    updateScore([1, 'You Lose! Paper beats Rock'])
  } else if (playerChoice === 'paper' && computerChoice === 'scissors') {
    updateScore([1, 'You Lose! Scissors beats Paper'])
  } else if (playerChoice === 'scissors' && computerChoice === 'paper') {
    updateScore([0, 'You Win! Scissors beats paper'])
  } else if (playerChoice === 'scissors' && computerChoice === 'rock') {
    updateScore([1, 'You Lose! Rock beats Scissors'])
  } else if (playerChoice === 'rock' && computerChoice === 'scissors') {
    updateScore([0, 'You Win! Rock beats Scissors']);
  }
}

function gameFinished(winner) {
  document.querySelector('.result').style.display = 'flex';
  document.querySelector('.result__text').textContent = `The winner is ${winner}`;
  document.querySelector('.buttons__options').style.display = 'none';
}

function updateScore(winnerArr) {    
  document.querySelector('.result-text').textContent = winnerArr[1];
  if (winnerArr[0] === 2) {
    playerWonRounds++;
    computerWonRounds++;
  } else if (winnerArr[0] === 1) computerWonRounds++;
  else playerWonRounds++;

  document.querySelector('.score__player').firstElementChild.textContent = playerWonRounds;
  document.querySelector('.score__computer').firstElementChild.textContent = computerWonRounds;

  if (playerWonRounds === 5 && computerWonRounds === 5) {
    gameFinished('Draw');
  } else if (playerWonRounds === 5) {
    gameFinished('Player');
  } else if (computerWonRounds === 5) {
    gameFinished('Computer');
  }
}

function reset() {
  document.querySelector('.buttons__options').style.display = 'block';
  document.querySelector('.result').style.display = 'none';
  playerWonRounds = 0;
  computerWonRounds = 0;
  document.querySelector('.score__player').firstElementChild.textContent = playerWonRounds;
  document.querySelector('.score__computer').firstElementChild.textContent = computerWonRounds;
}

buttons.forEach(button => button.addEventListener('click', playRound));
document.querySelector('.btn-reset').addEventListener('click', reset);