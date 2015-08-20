var picks = ['Rock', 'Paper', 'Scissors'];
var playerScore = 0;
var computerScore = 0;
var computerScoreEl = document.getElementById('compScore');
var playerScoreEl = document.getElementById('playerScore');


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
	var randomNum = Math.floor(Math.random() * (picks.length));
	document.getElementById('displayComputerPick').innerHTML = picks[randomNum];
	computer = picks[randomNum];
	return computer;
}

// compare the two picks and updat the winner
function comparePicks(person, comp) {
	if (person === comp) {
		document.getElementById('tie').innerHTML = 'Tie!';
	}
	else if (person === 'Rock' && comp === 'Scissors') {
		playerScore ++;
		playerScoreEl.innerHTML = playerScore;
	}
	else if (person === 'Rock' && comp === 'Paper') {
		computerScore++;
		computerScoreEl.innerHTML = computerScore;
	}
	else if (person === 'Paper' && comp === 'Rock') {
		playerScore ++;
		playerScoreEl.innerHTML = playerScore;
	}
	else if (person ==='Paper' && comp ==='Scissors') {
		computerScore++;
		computerScoreEl.innerHTML = computerScore;
	}
	else if (person === 'Scissors' && comp === 'Rock') {
		playerScore ++;
		playerScoreEl.innerHTML = playerScore;
	}
	else if ( person === 'Scissors' && comp === 'Paper') {
		computerScore++;
		computerScoreEl.innerHTML = computerScore;
	}
	else {
		console.log('Something is wrong');
	}
};

//add a resetButton to reset the scores
function resetButton() {
	var button = document.createElement('button');
	button.innerHTML= 'Reset Scores';
	document.getElementById('playAction').appendChild(button);
	button.addEventListener('click', function() {
		computerScore = 0;
		computerScoreEl.innerHTML = computerScore;
		playerScore = 0;
		playerScoreEl.innerHTML = playerScore;
	})
}

resetButton();
