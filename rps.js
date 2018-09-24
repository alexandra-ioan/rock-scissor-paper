const buttons = document.querySelectorAll('button');
const results = document.querySelector('#result');
const score = document.querySelector('#score');
const winner = document.querySelector('#winner');

let playerScore = 0, computerScore = 0;

buttons.forEach((button) =>
{

	button.addEventListener('click', (e) =>{
		if(playerScore < 5 && computerScore < 5){
			results.textContent = playRound(button.id, computerPlay());
			score.textContent = displayScore();
		}

	})
});

function computerPlay()
{
	let randomNumber = Math.floor(Math.random() * 3);
	if(randomNumber==0)
		return "rock";
	else if (randomNumber==1)
		return "paper";
	return "scissors";
}

function displayScore()
{
	if(computerScore==5 || playerScore==5)
		winner.textContent = displayWinner();
	return "You: " + playerScore + " points \nComputer: " + computerScore + " points";
}

function displayWinner()
{
	if(playerScore > computerScore)
		return("CONGRATULATIONS! You won the game!");
	else return ("You lost! Try again :P")
}

function playRound(playerSelection, computerSelection)
{
	if(playerSelection=="rock")
	{
		if(computerSelection=="rock")
		{
			return "Tie! Rock vs Rock";
		}
		else if(computerSelection=="scissors")
		{
			playerScore++;
			return "You Win! Rock beats Scissors";
		}
		else
		{
			computerScore++;
			return "You Lose! Paper beats Rock"
		}
	}
	else if(playerSelection == "paper")
	{
		if(computerSelection == "rock")
		{
			playerScore++;
			return "You Win! Paper beats Rock";
		}
		else if(computerSelection == "scissors")
		{
			computerScore++;
			return "You Lose! Scissors beats Paper";
		}
		else
		{
			return "Tie! Paper vs Paper"
		}
	}
	else
	{
		if(computerSelection == "rock")
		{
			computerScore++;
			return "You Lose! Rock beats Scissors";
		}
		else if(computerSelection == "scissors")
		{
			return "Tie! Scissors  vs Scissors";
		}
		else
		{
			playerScore++;
			return "You Win! Scissors beats Paper"
		}
	}
}