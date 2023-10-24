// function to save player names into local Storage

var userDetail = /* JSON.parse(localStorage.getItem('localDetails'))  */ [];
if (localStorage.localDetails) {
  var oldDetails = JSON.parse(localStorage.getItem("localDetails"));
  userDetail = oldDetails;
  display();
}

// userDetail =  JSON.parse(localStorage.getItem('localScore'))
function saveNames() {
  if (userNameInput.value == "") {
    changeNameAlertTxt.innerHTML = `<i class="fas fa-warning" id="faWarning"></i> Kindly enter your name below and hit "Save changes" button to save your name or hit "Close" icon to continue using default name`;
  } else if (userNameInput.value != "") {
    changeNameAlertTxt.innerHTML = ``;
    var updatedDetails = {
      myName: userNameInput.value,
      computerName: computerNameInput.value,
    };

    userDetail = [updatedDetails];

    localStorage.setItem("localDetails", JSON.stringify(userDetail));
    changeNameModal.style.display = "none";
  }
  display();
}

// Function that get or display userName and ComputerName

// userDetail = JSON.parse(localStorage.getItem("localDetails"));
function display() {
  for (let index = 0; index < userDetail.length; index++) {
    welcomeName.innerHTML = `${userDetail[index].myName}`;
  }
}

// function to set loading timeout

function next() {
  if (welcomeName.innerHTML == "") {
    Swal.fire({
      title:
        'Kindly register your name before continuing. <br/> Click the "SETTINGS" button below, and from the options, <br/> click the "Change Names" button, and then save the changes.',
      showClass: {
        popup: "animate__animated animate__fadeInDown",
      },
      hideClass: {
        popup: "animate__animated animate__fadeOutUp",
      },
      customClass: {
        title: "my-popup-title",
      },
    });
  } else {
    oldScore = JSON.parse(localStorage.getItem("localScore"));
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
  myModal.style.display = "none";
}
function closeSaveNameModal() {
  changeNameModal.style.display = "none";
  rulesModal.style.display = "none";
}
window.onclick = function (event) {
  if (event.target == changeNameModal) {
    changeNameModal.style.display = "none";
  }
};

// function to show rules of the game

function rules() {
  rulesModal.style.display = "block";
  myModal.style.display = "none";
}
function resetGame() {
  Swal.fire({
    title: "Are you sure you want to reset the Game?",
    text: "You won't be able to revert this!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Yes",
  }).then((result) => {
    if (result.isConfirmed) {
      localStorage.removeItem("youValue");
      localStorage.removeItem("meValue");
      localStorage.removeItem("localDetails");
      localStorage.removeItem("localScore");
      localStorage.setItem("backgroundColor", "rgb(0, 0, 42)");
      localStorage.removeItem("computerRound");
      localStorage.removeItem("userRound");
      localStorage.removeItem("totalRound");
      localStorage.removeItem("userImage");
      localStorage.removeItem("computerImage");
      location.reload();
      
      // Show the success message
      Swal.fire("Reset!", "Game reset.", "success");
    }
  });
}


function advanced() {
  Swal.fire({
    title: "Advanced Level Coming Soon",
    showClass: {
      popup: "animate__animated animate__fadeInDown",
    },
    hideClass: {
      popup: "animate__animated animate__fadeOutUp",
    },
    customClass: {
      title: "my-popup-title",
    },
  });
}

document.addEventListener("DOMContentLoaded", () => {
  // Retrieve the selected background color from localStorage, or use the default color
  const selectedBackgroundColor =
    localStorage.getItem("backgroundColor") || "rgb(0, 0, 42)";
  document.querySelector(".main").style.backgroundColor =
    selectedBackgroundColor;
});

function configuration() {
  Swal.fire({
    title: "Select Background Color",
    html: `
    <div style="text-align: center;">
    <button class="color-button" onclick="changeBackgroundColor('rgb(0, 0, 42')" style="background-color: rgb(0, 0, 42); color: white;">Default</button>
    <button class="color-button" onclick="changeBackgroundColor('red')" style="background-color: red; color: white;">Red</button>
    <button class="color-button" onclick="changeBackgroundColor('blue')" style="background-color: blue; color: white;">Blue</button>
    <button class="color-button" onclick="changeBackgroundColor('green')" style="background-color: green; color: white;">Green</button>
    <button class="color-button" onclick="changeBackgroundColor('yellow')" style="background-color: yellow; color: black;">Yellow</button>
    <button class="color-button" onclick="changeBackgroundColor('orange')" style="background-color: orange; color: black;">Orange</button>
    <button class="color-button" onclick="changeBackgroundColor('purple')" style="background-color: purple; color: white;">Purple</button>
    <button class="color-button" onclick="changeBackgroundColor('black')" style="background-color: black; color: white;">Black</button>
    <button class="color-button" onclick="changeBackgroundColor('pink')" style="background-color: pink; color: black;">Pink</button>
    <button class="color-button" onclick="changeBackgroundColor('gray')" style="background-color: gray; color: white;">Gray</button>
  </div>
<button id="okButton" onclick="confirmBackgroundColor()">OK</button>
`,

    showConfirmButton: false, // Hide the default "OK" button
    backdrop: `
      rgba(0,0,123,0.4)
      url("/images/nyan-cat.gif")
      left top
      no-repeat
    `,
  });
}

function changeBackgroundColor(color) {
  document.querySelector(".main").style.backgroundColor = color;
  localStorage.setItem("backgroundColor", color); // Store the selected background color in localStorage
  document.getElementById("okButton").style.display = "block"; // Show the "OK" button
}

function confirmBackgroundColor() {
  Swal.close(); // Close the dialog
}
