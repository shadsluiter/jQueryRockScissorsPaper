$(document).ready( function() {
	var computerChoice = 0;
	var humanChoice = 0;
	var humanScore = 0;
	var computerScore = 0;

	//  0 = rock
	//  1 = scissors
	//  2 = paper

	$('#btnRock').click( function(){
		humanChoice = 0;
		computerChoice = Math.floor(Math.random()  * 3);
		chooseWinner (computerChoice, humanChoice);
	});

	$('#btnScissors').click( function(){
		humanChoice = 1;
		computerChoice = Math.floor(Math.random()  * 3);
		chooseWinner (computerChoice, humanChoice);
	});

	$('#btnPaper').click( function(){
		humanChoice = 2;
		computerChoice = Math.floor(Math.random()  * 3);
		chooseWinner (computerChoice, humanChoice);
	});


	function chooseWinner(c,h) {
		//  0 = rock
		//  1 = scissors
		//  2 = paper

		if ( c == h) {
			$('#txtResults').html('You both chose the same item.  Try again.');
			if (humanChoice == 0 ) {
				$('#imgComputerChoice').css('background-image','url(rock.png)');
				$('#imgHumanChoice').css('background-image','url(rock.png)');
			}
			else if (humanChoice == 1 ) {
				$('#imgComputerChoice').css('background-image','url(scissors.png)');
				$('#imgHumanChoice').css('background-image','url(scissors.png)');
			}
			if (humanChoice == 2 ) {
				$('#imgComputerChoice').css('background-image','url(paper.png)');
				$('#imgHumanChoice').css('background-image','url(paper.png)');
			}




		}
		else if ( c == 0 && h == 1) {	
			$('#imgComputerChoice').css('background-image','url(rock.png)');
			$('#imgHumanChoice').css('background-image','url(scissors.png)');
			
			$('#txtResults').html('Computer chose rock. You chose scissors.  Rock crushes scissors.  Computer wins.');
			computerScore++;
			$('#txtScore').html('Score: Human ' + humanScore + ' Computer ' + computerScore);
		}
		
		else if ( c == 0 && h == 2) {
			$('#imgComputerChoice').css('background-image','url(rock.png)');
			$('#imgHumanChoice').css('background-image','url(paper.png)');	
			$('#txtResults').html('Computer chose rock. You chose paper.  Paper covers rock.  You win.');
			humanScore++;
			$('#txtScore').html('Score: Human ' + humanScore + ' Computer ' + computerScore);
		}

		else if ( c == 1 && h == 0) {	
			$('#imgComputerChoice').css('background-image','url(scissors.png)');
			$('#imgHumanChoice').css('background-image','url(rock.png)');
			$('#txtResults').html('Computer chose scissors. You chose rock.  Rock crushes scissors.  You win.');
			humanScore++;
			$('#txtScore').html('Score: Human ' + humanScore + ' Computer ' + computerScore);
		}

		else if ( c == 1 && h == 2) {	
			$('#imgComputerChoice').css('background-image','url(scissors.png)');
			$('#imgHumanChoice').css('background-image','url(paper.png)');
			$('#txtResults').html('Computer chose scissors. You chose paper.  Paper covers rock.  Computer wins.');
			computerScore++;
			$('#txtScore').html('Score: Human ' + humanScore + ' Computer ' + computerScore);
		}

		else if ( c == 2 && h == 0) {
			$('#imgComputerChoice').css('background-image','url(paper.png)');
			$('#imgHumanChoice').css('background-image','url(rock.png)');	
			$('#txtResults').html('Computer chose paper. You chose rock.  Paper covers rock.  Computer wins.');
			computerScore++;
			$('#txtScore').html('Score: Human ' + humanScore + ' Computer ' + computerScore);
		}

		else if ( c == 2 && h == 1) {	
			$('#imgComputerChoice').css('background-image','url(paper.png)');
			$('#imgHumanChoice').css('background-image','url(scissors.png)');
			$('#txtResults').html('Computer chose paper. You chose scissors.  Scissors cuts paper.  You win.');
			humanScore++;
			$('#txtScore').html('Score: Human ' + humanScore + ' Computer ' + computerScore);
		}
	}
});