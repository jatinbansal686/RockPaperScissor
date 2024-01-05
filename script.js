let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".mainImg");
let msg = document.querySelector("#msg");
let user_score = document.querySelector("#userScore");
let comp_score = document.querySelector("#compScore");

const genCompChoice = () => {
  const options = ["rock", "paper", "scissor"];
  const ranidx = Math.floor(Math.random() * 3);
  return options[ranidx];
};

const drawGame = () => {
  console.log("Game is Draw!");
  msg.innerText = "Game was draw. Try again!";
  msg.style.backgroundColor = "rgb(15, 15, 54)";
};
const showwinner = (userWin, compChoice, userChoice) => {
  if (userWin) {
    console.log("You Wins!");
    msg.innerText = `You Wins! ${userChoice} beats ${compChoice}`;
    msg.style.backgroundColor = "green";
    userScore++;
    user_score.innerText = userScore;
  } else {
    console.log("You Lose!");
    msg.innerText = `You Lost! ${compChoice} beats ${userChoice}`;
    msg.style.backgroundColor = "red";
    compScore++;
    comp_score.innerText = compScore;
  }
};

const playGame = (userChoice) => {
  console.log("user choise = ", userChoice);

  const compChoice = genCompChoice();
  console.log("comp choise = ", compChoice);

  if (userChoice === compChoice) {
    drawGame();
  } else {
    let userWin = true;
    if (userChoice === "rock") {
      // paper scissor
      userWin = compChoice === "paper" ? false : true;
    } else if (userChoice === "paper") {
      //scissor rock
      userWin = compChoice === "scissor" ? false : true;
    } else {
      //paper rock
      userWin = compChoice === "rock" ? false : true;
    }
    showwinner(userWin, compChoice, userChoice);
  }
};

choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const userChoice = choice.getAttribute("id");
    playGame(userChoice);
  });
});
