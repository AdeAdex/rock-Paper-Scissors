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
    disp4.innerHTML = ``;
    img1.src = "pic/rock.svg";
    img2.src = "pic/paper.gif";
    computerResult += 1;
    computerScore.value = computerResult;
    dist.style.right = "0";
    ani();
  } else if (computerValue == `scissors`) {
    disp3.innerHTML = `${userValue} crushes ${computerValue}`;
    disp4.innerHTML = ``;
    img1.src = "pic/rock.svg";
    img2.src = "pic/scissors.gif";
    userResult += 1;
    myScore.value = userResult;
    dist.style.right = "";
    ani();
  }
  //   display();
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
    disp4.innerHTML = ``;
    img1.src = "pic/paper.gif";
    img2.src = "pic/rock.svg";
    userResult += 1;
    myScore.value = userResult;
    dist.style.right = "";
    ani();
  } else if (computerValue == `scissors`) {
    disp3.innerHTML = `${userValue} cut by ${computerValue}`;
    disp4.innerHTML = ``;
    img1.src = "pic/paper.gif";
    img2.src = "pic/scissors.gif";
    computerResult += 1;
    computerScore.value = computerResult;
    dist.style.right = "0";
    ani();
  }
  //   display();
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
    disp4.innerHTML = ``;
    img1.src = "pic/scissors.gif";
    img2.src = "pic/rock.svg";
    computerResult += 1;
    computerScore.value = computerResult;
    dist.style.right = "0";
    ani();
  } else if (computerValue == `paper`) {
    disp3.innerHTML = `${userValue} cut ${computerValue}`;
    disp4.innerHTML = ``;
    img1.src = "pic/scissors.gif";
    img2.src = "pic/paper.gif";
    userResult += 1;
    myScore.value = userResult;
    dist.style.right = "";
    ani();
  }
  //   display();
  soundPlay();
  allUserScore();
}


// All Sound Function that is triggered when either the user or computer wins and also works for TotalClick
userDetail = JSON.parse(localStorage.getItem("localDetails"));

function soundPlay() {
  totalClick += 1;
  totalClickResult.innerHTML = totalClick;
  for (let index = 0; index < userDetail.length; index++) {
    disp.innerHTML = `${userDetail[index].myName} PICKED`;
    disp2.innerHTML = `${userDetail[index].computerName} PICKED`;

    // Check if totalClick is 5
    if (totalClick === 5) {
      if (computerScore.value > myScore.value) {
        disp4.innerHTML = `${userDetail[index].computerName} wins`;
        you.value++;
        winSound.play();
        mainContainer.style.backgroundImage =
                "url('pic/firework-6-unscreen.gif')";
      } else if (myScore.value > computerScore.value) {
        disp4.innerHTML = `${userDetail[index].myName} wins`;
        me.value++;
        winSound.play();
        mainContainer.style.backgroundImage =
                "url('pic/firework-6-unscreen.gif')";
      } else {
        disp4.innerHTML = `${userDetail[index].myName} and ${userDetail[index].computerName} draw`;
        drawSound.play();
      }

      // Reset counts
      totalClick = 0;
      userResult = 0;
      computerResult = 0;

      return;
    } else {
      clickSound.play();
      mainContainer.style.backgroundImage = "url('')";
    }
  }

  localStorage.setItem("localScore", JSON.stringify(userScore));
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



// Function that triggered plus 1 animation 

// const dist = document.getElementById("dist");
function ani() {
  dist.classList.remove("animation");
  setTimeout(function () {
    dist.classList.add("animation");
  }, 10);
}
