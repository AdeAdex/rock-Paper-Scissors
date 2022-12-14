// Function that get or display userName and ComputerName

var userDetail = JSON.parse(localStorage.getItem("localDetails"));
function display() {
  for (let index = 0; index < userDetail.length; index++) {
    disp.innerHTML = `${userDetail[index].myName} PICKED`;
    disp2.innerHTML = `${userDetail[index].computerName} PICKED`;
    // disp4.innerHTML = `${userDetail[index].computerName} win`
  }
}




// Function that set both userScore and computerScore into the localStorage

var userScore = [];
if (localStorage.localScore) {
  var oldScore = JSON.parse(localStorage.getItem("localScore"));
  userScore = oldScore;
}

function allUserScore() {
  var allScores = {
    myScore: myScore.value,
    computerScore: computerScore.value,
  };
  userScore.push(allScores);
  localStorage.setItem("localScore", JSON.stringify(userScore));
}




// Function that triggered Rock button

let userResult = 0;
let computerResult = 0;
let totalClick = 0;
let winSound = new Audio("win.wav");
let drawSound = new Audio("draw.mp3");
let clickSound = new Audio("click.wav");
let backgroundMusic = new Audio("i-promised.mp3");
function rock() {
  var userValue = "rock";
  var options = ["rock", "paper", "scissors"];
  var random = Math.floor(Math.random() * 3);
  var computerValue = options[random];
  if (userValue == computerValue) {
    disp3.innerHTML = `its ${userValue} and ${computerValue}`;
    disp4.innerHTML = `its a tie`;
    img1.src = "pic/rock.svg";
    img2.src = "pic/rock.svg";
  } else if (computerValue == `paper`) {
    disp3.innerHTML = `${userValue} cover by ${computerValue}`;
    img1.src = "pic/rock.svg";
    img2.src = "pic/paper.gif";
    computerResult += 1;
    computerScore.value = computerResult;
    myScore.value = userResult;
  } else if (computerValue == `scissors`) {
    disp3.innerHTML = `${userValue} crushes ${computerValue}`;
    img1.src = "pic/rock.svg";
    img2.src = "pic/scissors.gif";
    userResult += 1;
    myScore.value = userResult;
  }
  display();
  soundPlay();
  allUserScore();
}





// Function that triggered Paper button

function paper() {
  var userValue = "paper";
  var options = ["rock", "paper", "scissors"];
  var random = Math.floor(Math.random() * 3);
  var computerValue = options[random];
  if (userValue == computerValue) {
    disp3.innerHTML = `${userValue} and ${computerValue}`;
    disp4.innerHTML = `its a tie`;
    img1.src = "pic/paper.gif";
    img2.src = "pic/paper.gif";
  } else if (computerValue == `rock`) {
    disp3.innerHTML = `${userValue} cover ${computerValue}`;
    img1.src = "pic/paper.gif";
    img2.src = "pic/rock.svg";
    userResult += 1;
    userScore.value = userResult;
  } else if (computerValue == `scissors`) {
    disp3.innerHTML = `${userValue} cut by ${computerValue}`;
    img1.src = "pic/paper.gif";
    img2.src = "pic/scissors.gif";
    computerResult += 1;
    computerScore.value = computerResult;
  }
  display();
  soundPlay();
  allUserScore();
}





// Function that triggered scissors button

function scissors() {
  var userValue = "scissors";
  var options = ["rock", "paper", "scissors"];
  var random = Math.floor(Math.random() * 3);
  var computerValue = options[random];
  if (userValue == computerValue) {
    disp3.innerHTML = `${userValue} and ${computerValue}`;
    disp4.innerHTML = `its a tie`;
    img1.src = "pic/scissors.gif";
    img2.src = "pic/scissors.gif";
  } else if (computerValue == `rock`) {
    disp3.innerHTML = `${userValue} crushed by ${computerValue} `;
    disp4.innerHTML = `computer win`;
    img1.src = "pic/scissors.gif";
    img2.src = "pic/rock.svg";
    computerResult += 1;
    computerScore.value = computerResult;
  } else if (computerValue == `paper`) {
    disp3.innerHTML = `${userValue} cut ${computerValue}`;
    disp4.innerHTML = `you win`;
    img1.src = "pic/scissors.gif";
    img2.src = "pic/paper.gif";
    userResult += 1;
    userScore.value = userResult;
  }
  display();
  soundPlay();
  allUserScore();
}




// All Sound Function that is triggered when either user or computer wins and also work for TotalClick

var userDetail = JSON.parse(localStorage.getItem("localDetails"));
function soundPlay() {
  totalClick += 1;
  totalClickResult.innerHTML = totalClick;
  if (totalClick === 5 && computerScore.value > myScore.value) {
    disp4.innerHTML = `${allPlayers.myName} Win`;
    winSound.play();
    mainContainer.style.backgroundImage = "url('pic/congrats3.gif')";
    return (totalClick = 0);
    // return computerScore = 0
  } else if (totalClick === 5 && myScore.value > computerScore.value) {
    disp4.innerHTML = `${allPlayers.myName} Win`;
    winSound.play();
    mainContainer.style.backgroundImage = "url('pic/congrats3.gif')";
    return (totalClick = 0);
  } else {
    clickSound.play();
    mainContainer.style.backgroundImage = "url('')";
  }
}



//Sound Function that is triggered onload of the page

function playMusic() {
  backgroundMusic.play();
}





// Function that triggered both PlayMusic and stopMusic

function stopMusic(x) {
  x.classList.toggle("fa-volume-high");
  if (x.classList.toggle("fa-volume-xmark") == true) {
    backgroundMusic.pause();
    //backgroundMusic.currentTime = 0;
  } else {
    backgroundMusic.play();
  }
}


