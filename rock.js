$(document).ready(function(){
	var humanChoice, computerChoice = 0;

	var humanScore = 0;
	var computerScore = 0;
	// 0 = rock
	// 1 = scissors
	// 2 = paper





	$('#btnRock').click(function() {
		humanChoice = 0;
		computerChoice = Math.floor(Math.random()*3);
		$('#txtResults').html("Computer chose " + computerChoice + " Human chose " + humanChoice);
		$('#imgHumanChoice').css('background-image', 'url(rock.png)');
		checkForWinner();


	});


	$('#btnScissors').click(function() {
		humanChoice = 1;
		computerChoice = Math.floor(Math.random()*3);
		$('#txtResults').html("Computer chose " + computerChoice + " Human chose " + humanChoice);
		$('#imgHumanChoice').css('background-image', 'url(scissors.png)');
		checkForWinner();




	});



	$('#btnPaper').click(function() {
		humanChoice = 2;
		computerChoice = Math.floor(Math.random()*3);
		$('#txtResults').html("Computer chose " + computerChoice + " Human chose " + humanChoice);
		$('#imgHumanChoice').css('background-image', 'url(paper.png)');
		checkForWinner();
	
	});


	function checkForWinner () {

		if (computerChoice == 0) {
			$('#imgComputerChoice').css('background-image', 'url(rock.png)');		
		}
		else if (computerChoice == 1) {
			$('#imgComputerChoice').css('background-image', 'url(scissors.png)');		
		}
		else if (computerChoice == 2) {
			$('#imgComputerChoice').css('background-image', 'url(paper.png)');		
		}

		if (computerChoice == humanChoice) {
			// tie. nobody wins
			$('#txtResults').html('Both chose the same item.  Nobody wins');
		} 
		else if (computerChoice == 0 && humanChoice == 1) {
			$('#txtResults').html('Computer chose rock. Human chose scissors. Rock crushes scisssors.  Computer wins!');
			computerScore++;
		} 
		else if (computerChoice == 0 && humanChoice == 2) {
			$('#txtResults').html('Computer chose rock. Human chose paper. Paper covers rock.  Human wins!');
			humanScore++;	
		} 

		else if (computerChoice == 1 && humanChoice == 0) {
			$('#txtResults').html('Computer chose scissors. Human chose rock. Rock smashes scissors.  Human wins!');
			humanScore++;	
		} 

		else if (computerChoice == 1 && humanChoice == 2) {
			$('#txtResults').html('Computer chose scissors. Human chose paper. Scissors cuts paper.  Computer wins!');
			computerScore++;	
		} 

		else if (computerChoice == 2 && humanChoice == 0) {
			$('#txtResults').html('Computer chose paper. Human chose rock. Paper covers rock.  Computer wins!');
			computerScore++;	
		} 

		else if (computerChoice == 2 && humanChoice == 1) {
			$('#txtResults').html('Computer chose paper. Human chose scissors. Scissors cuts paper.  Human wins!');
			humanScore++;	
		} 
	 
		$('#txtScore').html('Score: Computer ' + computerScore + ' Human ' + humanScore);
	}


});