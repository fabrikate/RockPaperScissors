var picks = ['','Rock', 'Paper', 'Scissors','Rock', 'Paper', 'Scissors'];
var playerScore = 0;
var computerScore = 0;


// player makes a choice
function playerPick() {
	var img = document.querySelectorAll('img');
	for(var i = 0; i < img.length; i++) {
		img[i].addEventListener('click', function(e) {
			player = e.target.dataset.name;
			document.getElementById('displayPlayerPick').innerHTML = player;
			computer = computerPick();
			comparePicks(player, computer);
		})
	}
}

playerPick();

// computer makes a random choice
function computerPick() {
	var randomNum = Math.floor(Math.random() * (picks.length -1)) +1;
	document.getElementById('displayComputerPick').innerHTML = picks[randomNum];
	computer = picks[randomNum];
	return computer;
}

function comparePicks(person, comp) {
	if (person === comp) {
		computerScore++
		document.getElementById('compScore').innerHTML = computerScore;
	}
	else if (person === 'Rock' && comp === 'Scissors') {
		playerScore ++;
		document.getElementById('playerScore').innerHTML = playerScore;
	}
	else if (person === 'Rock' && comp === 'Paper') {
		computerScore++;
		document.getElementById('compScore').innerHTML = computerScore;
	}
	else if (person === 'Paper' && comp === 'Rock') {
		playerScore ++;
		document.getElementById('playerScore').innerHTML = playerScore;
	}
	else if (person ==='Paper' && comp ==='Scissors') {
		computerScore++;
		document.getElementById('compScore').innerHTML = computerScore;
	}
	else if (person === 'Scissors' && comp === 'Rock') {
		playerScore ++;
		document.getElementById('playerScore').innerHTML = playerScore;
	}
	else if ( person === 'Scissors' && comp === 'Paper') {
		computerScore++;
		document.getElementById('compScore').innerHTML = computerScore;
	}
	else {
		console.log('Something is wrong')
	}
}

function resetButton() {
	var button = document.createElement('button');
	button.innerHTML= 'Reset Scores'
	document.getElementById('playAction').appendChild(button);
	button.addEventListener('click', function() {
		computerScore = 0;
		document.getElementById('compScore').innerHTML = computerScore;
		playerScore = 0;
		document.getElementById('playerScore').innerHTML = playerScore;
	})
}

resetButton();
