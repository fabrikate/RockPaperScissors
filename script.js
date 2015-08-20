$(document).ready(function() {
	var picks = ['Rock', 'Paper', 'Scissors'];
	var playerScore = 0;
	var computerScore = 0;
	var $computerScoreEl = $('#compScore');
	var $playerScoreEl = $('#playerScore');


	// player makes a choice
	function playerPick() {
		$('#playAction').on('click', 'img', function(e) {
			player = e.target.dataset.name;
			$('#displayPlayerPick').html(player);
			computer = computerPick();
			comparePicks(player, computer);
		})
	}

	playerPick();

	// computer makes a random choice
	function computerPick() {
		var randomNum = Math.floor(Math.random() * (picks.length));
		$('#displayComputerPick').html(picks[randomNum]);
		computer = picks[randomNum];
		return computer;
	}

	// compare the two picks and updat the winner
	function comparePicks(person, comp) {
		if (person === comp) {
			$('#tie').html('Tie!');
			$('#tie').fadeOut(2000);
		}
		else if (person === 'Rock' && comp === 'Scissors') {
			playerScore ++;
			$playerScoreEl.html(playerScore);
		}
		else if (person === 'Rock' && comp === 'Paper') {
			computerScore++;
			$computerScoreEl.html(computerScore);
		}
		else if (person === 'Paper' && comp === 'Rock') {
			playerScore ++;
			$playerScoreEl.html(playerScore);
		}
		else if (person ==='Paper' && comp ==='Scissors') {
			computerScore++;
			$computerScoreEl.html(computerScore);
		}
		else if (person === 'Scissors' && comp === 'Rock') {
			playerScore ++;
			$playerScoreEl.html(playerScore);
		}
		else if ( person === 'Scissors' && comp === 'Paper') {
			computerScore++;
			$computerScoreEl.html(computerScore);
		}
		else {
			console.log('Something is wrong');
		}
	};

	//add a resetButton to reset the scores

	// need to add a button in jQ
	function resetButton() {
		var button = $('button');
		button.html('Reset Scores');
		$('#playAction').on('click', 'button', function() {
			computerScore = 0;
			$computerScoreEl.html(computerScore);
			playerScore = 0;
			$playerScoreEl.html(playerScore);
		});
	}

	resetButton();
})

