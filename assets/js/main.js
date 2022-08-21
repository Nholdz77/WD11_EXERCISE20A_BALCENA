const paperButton = document.querySelector("#paperBtn");
paperButton.addEventListener("click", paperFunction);

function paperFunction() {
  const playerImg = document.querySelector("#imageOne");
  const playText1 = document.querySelector("#playerbox");
  playerImg.src = "assets/img/3.jpg";
  playText1.innerHTML = "Paper";
}

const rockButton = document.querySelector("#rockBtn");
rockButton.addEventListener("click", rockFunction);

function rockFunction() {
  const playerImg = document.querySelector("#imageOne");
  const playText1 = document.querySelector("#playerbox");
  playerImg.src = "assets/img/2.jpg";
  playText1.innerHTML = "Rock";
}

const scissorButton = document.querySelector("#scissorBtn");
scissorButton.addEventListener("click", scissorFunction);

function scissorFunction() {
  const playerImg = document.querySelector("#imageOne");
  const playText1 = document.querySelector("#playerbox");
  playerImg.src = "assets/img/4.jpg";
  playText1.innerHTML = "Scissor";
}

const playerClick = document.querySelector("#clickPlay");
playerClick.addEventListener("click", randomFunction);
playerClick.addEventListener("click", resultFunction);

function resultFunction() {
  let playText1 = document.querySelector("#playerbox");
  let playText2 = document.querySelector("#playerbox2");
  let playResult = document.querySelector("#gameResult");

  if (playText1.innerHTML == "Paper" && playText2.innerHTML == "Paper") {
    playResult.innerHTML = "It's a Draw! Play Again";
  } else if (playText1.innerHTML == "Rock" && playText2.innerHTML == "Rock") {
    playResult.innerHTML = "It's a Draw! Play Again";
  } else if (
    playText1.innerHTML == "Scissor" &&
    playText2.innerHTML == "Scissor"
  ) {
    playResult.innerHTML = "It's a Draw! Play Again";
  } else if (
    playText1.innerHTML == "Paper" &&
    playText2.innerHTML == "Scissor"
  ) {
    playResult.innerHTML = "1Player is Lost! Play Again";
  } else if (playText1.innerHTML == "Paper" && playText2.innerHTML == "Rock") {
    playResult.innerHTML = "1Player is the Winner! Play Again";
  } else if (
    playText1.innerHTML == "Scissor" &&
    playText2.innerHTML == "Rock"
  ) {
    playResult.innerHTML = "1Player is Lost! Play Again";
  } else if (
    playText1.innerHTML == "Scissor" &&
    playText2.innerHTML == "Paper"
  ) {
    playResult.innerHTML = "1Player is the Winner! Play Again";
  } else if (playText1.innerHTML == "Rock" && playText2.innerHTML == "Paper") {
    playResult.innerHTML = "1Player is Lost! Play Again";
  } else if (
    playText1.innerHTML == "Rock" &&
    playText2.innerHTML == "Scissor"
  ) {
    playResult.innerHTML = "1Player is the Winner! Play Again";
  }
}

function randomFunction() {
  const playerImg1 = document.querySelector("#imageTwo");
  const playText2 = document.querySelector("#playerbox2");
  randomizedNumber = Math.floor(Math.random() * 3 + 1);

  if (randomizedNumber == 1) {
    playerImg1.src = "assets/img/2.jpg";
    playText2.innerHTML = "Rock";
  } else if (randomizedNumber == 2) {
    playerImg1.src = "assets/img/3.jpg";
    playText2.innerHTML = "Paper";
  } else if (randomizedNumber == 3) {
    playerImg1.src = "assets/img/4.jpg";
    playText2.innerHTML = "Scissor";
  }
}
