// function to set loading timeout

function next() {
  oldScore =  JSON.parse(localStorage.getItem('localScore'))
  playBtn.disabled = true;
  loading.innerHTML = `
                        <div class="loading-container" type="button" disabled>
                            <span class="spinner-border spinner-border-lg" role="status" aria-hidden="true" id="spinnerBorder"></span>
                            <h3 id="waitTxt">Game Loading, Please wait...</h3>
                        </div>
                        <div class="progress">
                            <div id="myBar" class="progress-bar" role="progressbar" aria-label="Example with label" style="width: 0%;" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100">0%</div>
                        </div>
                    `;
  let waitingTime = setInterval(function () {
    if (true) {
      window.location.href = "rockPaperScissorsGame.html";
      // clearInterval(waitingTime);
    } else {
    }
  }, 5000);
  move();
}



// function to save player names into local Storage


var userDetail = []
if (localStorage.localDetails) {
    var oldDetails =  JSON.parse(localStorage.getItem('localDetails'))
    userDetail = oldDetails
}

function saveNames() {
  if (userNameInput.value == "") {
    changeNameAlertTxt.innerHTML = `<i class="fas fa-warning" id="faWarning"></i> Kindly enter your name below and hit "Save changes" button to save your name or hit "Close" icon to continue using default name`;
  } else if (userNameInput.value != "") {
    changeNameAlertTxt.innerHTML = ``
    var allPlayers = {
      myName : userNameInput.value,
      computerName : computerNameInput.value,
  }
  userDetail.push(allPlayers);
  localStorage.setItem('localDetails', JSON.stringify(userDetail))
  welcomeName.innerHTML = allPlayers.myName;
  changeNameModal.style.display = "none";
  }
  oldDetails =  JSON.parse(localStorage.getItem('localDetails'))
}


// function to make progress bar width 

function move() {
  var elem = document.getElementById("myBar");
  var width = 0;
  var id = setInterval(frame, 40);
  function frame() {
    if (width >= 100) {
      clearInterval(id);
    } else if (width >= 50 && width < 100) {
      waitTxt.innerHTML = `Initializing Screen`;
      spinnerBorder.style.color = "green";
      width++;
      elem.style.width = width + "%";
      elem.innerHTML = width * 1 + "%";
    } else {
      width++;
      elem.style.width = width + "%";
      elem.innerHTML = width * 1 + "%";
    }
  }
}





// function to close SaveNameModal

function openSaveNameModal() {
  changeNameModal.style.display = "block";
  myModal.style.display = "none"
}
function closeSaveNameModal() {
  changeNameModal.style.display = "none";
  rulesModal.style.display = "none"
}
window.onclick = function(event) {
  if (event.target == changeNameModal) {
    changeNameModal.style.display = "none";
  }
}



// function to show rules of the game

function rules() {
  rulesModal.style.display = "block"; 
  myModal.style.display = "none"
}