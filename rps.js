$(document).ready(function(){
	
	// Computer chooses rock, paper, or scissors
	var computerChoice = Math.random();
	
	if (computerChoice <0.34){
		computerChoice = "rock";
	}else if(computerChoice <=0.67){
		computerChoice = "paper";
	}else{
		computerChoice = "scissors";
	}
	
	// Assign a winner based on user choice and computer choice
	function compare (choice1, choice2){
		if (choice1 === choice2){
			$("<h2 class='tie'>You chose the same thing as the internet.  It's a tie!</h2>").appendTo('div.text');
			$("div#pictures").hide();
			$("#tie").slideDown(1000);
			$(".hidden-button").show();
		} else if (choice1 ===  "rock" && choice2 === "paper") {
			$("<h2 class='lose'>Paper covers rock.  You lose!</h2>").appendTo('div.text');
			$("div#pictures").hide();
			$("#paper").slideDown(1000);
			$(".hidden-button").show();
		} else if (choice1 === "rock" && choice2 === "scissors") {
			$("<h2 class='win'>Rock smashes scissors.  You win!</h2>").appendTo('div.text');
			$("div#pictures").hide();
			$("#rock").slideDown(1000);
			$(".hidden-button").show();
		} else if (choice1 === "paper" && choice2 === "rock") {
			$("<h2 class='win'>Paper covers rock.  You win!</h2>").appendTo('div.text');
			$("div#pictures").hide();
			$("#paper").slideDown(1000);
			$(".hidden-button").show();
		} else if (choice1 === "paper" && choice2 === "scissors") {
			$("<h2 class='lose'>Scissors cut paper.  You lose!</h2>").appendTo('div.text');
			$("div#pictures").hide();
			$("#scissors").slideDown(1000);
			$(".hidden-button").show();
		} else if (choice1 === "scissors" && choice2 === "paper") {
			$("<h2 class='win'>Scissors cut paper.  You win!</h2>").appendTo('div.text');
			$("div#pictures").hide();
			$("#scissors").slideDown(1000);
			$(".hidden-button").show();
		} else if (choice1 === "scissors" && choice2 === "rock"){
			$("<h2 class='lose'>Rock smashes scissors.  You lose!</h2>").appendTo('div.text');
			$("div#pictures").hide();
			$("#rock").slideDown(1000);
			$(".hidden-button").show();
			}
		}

	//get user input and compare choices
	$( "img" ).click(function() {
		userChoice = $(this).attr('id');
		compare(userChoice, computerChoice);
	});
});