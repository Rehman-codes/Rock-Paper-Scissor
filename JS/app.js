// ++++++++++++++++++++++++++++++[User-1-Data]++++++++++++++++++++++++++++++
let rockButtonUser1 = document.getElementById("rock-button-user-1");
let paperButtonUser1 = document.getElementById("paper-button-user-1");
let scissorButtonUser1 = document.getElementById("scissor-button-user-1");

let selectedButton1 = document.getElementById("selected-button-user-1");
let userScore1 = document.getElementById("user-1-score");

let score1 = 0;
let selection1 = null;
// --------------------------------------------------------------
let reset = document.getElementById("reset-button");
// --------------------------------------------------------------

// ++++++++++++++++++++++++++++++[User-2-Data]++++++++++++++++++++++++++++++
let playButtonUser2 = document.getElementById("play-button-user-2");
let endPlayButtonUser2 = document.getElementById("end-play-button-user-2");

let selectedButton2 = document.getElementById("selected-button-user-2");
let userScore2 = document.getElementById("user-2-score");

let playContinueButton = document.getElementById("play-continue-button");
let score2 = 0;
let selection2 = null;
let winnerScore = 0;
// ************************************************************************

// --------------------------------------------------------------
let Score = document.getElementById("score");
let Winner = document.getElementById("Winner");
//--------------------------------------------------------------

let user1 = {
  turn: true,
  score: userScore1,
  selectedOption: selection1,
};

let user2 = {
  turn: false,
  score: userScore2,
  selectedOption: selection2,
};

// ----------------------------------------------------------------------------------

//-------------------------------------------------------------------------------------USER-1
rockButtonUser1.addEventListener("click", function () {
  selectedButton1.style.backgroundImage = "url('/assets/rock.png')";
  selection1 = "rock";
});

paperButtonUser1.addEventListener("click", function () {
  selectedButton1.style.backgroundImage = "url('/assets/paper.png')";
  selectedButton1.style.backgroundColor = "#edf2f4";
  selectedButton1.style.backgroundSize = "70px 70px";
  selectedButton1.style.backgroundRepeat = "no-repeat";
  selectedButton1.style.backgroundPosition = "center";
  selection1 = "paper";
});

scissorButtonUser1.addEventListener("click", function () {
  selectedButton1.style.backgroundImage = "url('/assets/scissor.png')";
  selectedButton1.style.backgroundColor = "#edf2f4";
  selectedButton1.style.backgroundSize = "70px 70px";
  selectedButton1.style.backgroundRepeat = "no-repeat";
  selectedButton1.style.backgroundPosition = "center";
  selection1 = "scissor";
});

//-------------------------------------------------------------------------------------USER-2
playButtonUser2.addEventListener("click", function () {
  let randomNumber = Math.floor(Math.random() * 10) + 1;

  if (randomNumber <= 4) {
    selectedButton2.style.backgroundImage = "url('/assets/rock.png')";
    selection2 = "rock";
  } else if (randomNumber > 4 && randomNumber <= 7) {
    selectedButton2.style.backgroundImage = "url('/assets/paper.png')";
    selectedButton2.style.backgroundColor = "#edf2f4";
    selectedButton2.style.backgroundSize = "70px 70px";
    selectedButton1.style.backgroundRepeat = "no-repeat";
    selectedButton2.style.backgroundPosition = "center";
    selection2 = "paper";
  } else {
    selectedButton2.style.backgroundImage = "url('/assets/scissor.png')";
    selectedButton2.style.backgroundColor = "#edf2f4";
    selectedButton2.style.backgroundSize = "70px 70px";
    selectedButton2.style.backgroundRepeat = "no-repeat";
    selectedButton2.style.backgroundPosition = "center";
    selection2 = "scissor";
  }
  if (selection1 == null) {
    console.log("select an option");
  } else if (selection1 == selection2) {
    console.log("same");
  } else if (selection1 == "rock" && selection2 == "scissor") {
    score1++;
    userScore1.innerText = score1;
  } else if (selection1 == "rock" && selection2 == "paper") {
    score2++;
    userScore2.innerText = score2;
  } else if (selection1 == "paper" && selection2 == "rock") {
    score1++;
    userScore1.innerText = score1;
  } else if (selection1 == "paper" && selection2 == "scissor") {
    score2++;
    userScore2.innerText = score2;
  } else if (selection1 == "scissor" && selection2 == "paper") {
    score1++;
    userScore1.innerText = score1;
  } else if (selection1 == "scissor" && selection2 == "rock") {
    score2++;
    userScore2.innerText = score2;
  }
});

endPlayButtonUser2.addEventListener("click", function () {
  if (score1 > score2) {
    Score.innerText = score1;
    Winner.innerText = "Human";
    playContinueButton.innerText = "CONTINUE";
  } else if (score1 < score2) {
    Score.innerText = score2;
    Winner.innerText = "Computer";
  } else {
    Score.innerText = "0";
    Winner.innerText = "None";
  }
});

reset.addEventListener("click", function () {
  window.location.reload();
});
