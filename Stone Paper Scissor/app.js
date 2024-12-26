let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

const drawGame = () => {
	msg.innerText = "Game was Draw. Play again";
	msg.style.backgroundColor = "#081b31";
};

let showWinner = (userWin, userChoice, compChoice) => {
	if (userWin) {
		userScore++;
		userScorePara.innerText = userScore;
		msg.innerText = `You win! ${userChoice} beats ${compChoice}`;
		msg.style.backgroundColor = "green";
	} else {
		compScore++;
		compScorePara.innerText = compScore;
		msg.innerText = `You lost! ${compChoice} beats ${userChoice}`;
		msg.style.backgroundColor = "red";
	}
};

const genCompChoice = (userChoice) => {
	// rock paper scissor
	const options = ["stone", "paper", "scissors"];
	const randIdx = Math.floor(Math.random() * 3);
	return options[randIdx];
};

const playGame = (userChoice) => {
	//generate computer choice- modular way of programming
	const compChoice = genCompChoice();

	if (userChoice === compChoice) {
		//draw
		drawGame();
	} else {
		let userWin = true;
		if (userChoice === "rock") {
			//scissors, paper
			userWin = compChoice === "paper" ? false : true;
		} else if (userChoice === "paper") {
			//scissors, paper
			userWin = compChoice === "scissors" ? false : true;
		} else {
			userWin = compChoice === "rock" ? false : true;
		}

		showWinner(userWin, userChoice, compChoice);
	}
};

choices.forEach((choice) => {
	choice.addEventListener("click", () => {
		const userChoice = choice.getAttribute("id");
		playGame(userChoice);
	});
});
