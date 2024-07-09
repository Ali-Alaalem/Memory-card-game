/*-------------- Constants -------------*/
const easybtn = document.querySelector("#Easy");
const midbtn = document.querySelector("#Mid");
const hardbtn = document.querySelector("#Hard");
const startbtn = document.querySelector("#start");
const div = document.querySelector(".Container");
const message = document.querySelector("p");
const timer = document.querySelector("#timer");
const reset = document.querySelector("#reset");
const light = document.querySelector("#dark");
let mario = new Audio("mario.mp3");
let wrong = new Audio("wrong.mp3");
let victory = new Audio("victory.mp3");

/*---------- Variables (state) ---------*/
let randomNum = 0;
let turnCount = 0;
let Fclick;
let Sclick;
let same = 0;
let differnt = 0;
let keyDown = false;
let easyClicked = false;
let midClicked = false;
let hardClicked = false;
let isProcessing = false;
let gameStarted = false;
let currentImage;
let interval;
let timercount = 0;
let choiceaArr = [];
let randomNumArr = [];
let easyimg = [1, 2, 3, 4, 5, 6];
let midimg = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
let hardimg = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18];
/*----- Cached Element References  -----*/

/*-------------- Functions -------------*/
function handelKeyDown() {
  if (
    !gameStarted &&
    (easyClicked === true || midClicked === true || hardClicked === true)
  ) {
    keyDown = true;
    gameStarted = true;

    message.innerText =
      "If you do 4 wrong matching or The Time's Up The Game Will Over";
    interval = setInterval(timerCalc, 1000);
    randomNumGenerater();
    imgChanger();
    R1 = Math.floor(Math.random() * 2 + 1);

    if (R1 === 1) {
      for (let i = 0; i < choiceaArr.length; i++) {
        document.querySelectorAll("img")[i].src =
          "./images/fruit/" + choiceaArr[i] + ".jpeg";
      }
    } else if (R1 === 2) {
      for (var i = 0; i < choiceaArr.length; i++) {
        document.querySelectorAll("img")[i].src =
          "./images/animal/" + choiceaArr[i] + ".jpeg";
      }
    }
    setTimeout(returner, 3000);
  }
}
function randomNumGenerater() {
  if (easyClicked === false && midClicked === true && hardClicked === false) {
    randomNumArr = [];
    while (randomNumArr.length < 12) {
      randomNum = Math.floor(Math.random() * 12 + 1);

      if (!randomNumArr.includes(randomNum)) {
        randomNumArr.push(randomNum);
      }
    }
  } else if (
    easyClicked === false &&
    midClicked === false &&
    hardClicked === true
  ) {
    randomNumArr = [];
    while (randomNumArr.length < 18) {
      randomNum = Math.floor(Math.random() * 18 + 1);

      if (!randomNumArr.includes(randomNum)) {
        randomNumArr.push(randomNum);
      }
    }
  } else if (
    easyClicked === true &&
    midClicked === false &&
    hardClicked === false
  ) {
    randomNumArr = [];
    while (randomNumArr.length < 6) {
      randomNum = Math.floor(Math.random() * 6 + 1);

      if (!randomNumArr.includes(randomNum)) {
        randomNumArr.push(randomNum);
      }
    }
  }
}
function easyabbendChild() {
  timer.innerText = "120";
  timercount = 120;
  if (easyClicked === false) {
    removeAllImage();
    for (let i = 0; i < easyimg.length; i++) {
      easyimg[i] = document.createElement("img");
      easyimg[i].src = "./images/Q.jpg";
      easyimg[i].id = i + 1;
      easyimg[i].addEventListener("click", swaper);
      div.appendChild(easyimg[i]);
    }
    easyClicked = true;
    midClicked = false;
    hardClicked = false;
    clearInterval(interval);
    keyDown = false;
    gameStarted = false;
  }
}
function midabbendChild() {
  timer.innerText = "100";
  timercount = 100;
  if (midClicked === false) {
    removeAllImage();
    for (let i = 0; i < midimg.length; i++) {
      midimg[i] = document.createElement("img");
      midimg[i].src = "./images/Q.jpg";
      midimg[i].id = i + 1;
      midimg[i].addEventListener("click", swaper);
      div.appendChild(midimg[i]);
    }
    midClicked = true;
    easyClicked = false;
    hardClicked = false;
    clearInterval(interval);
    keyDown = false;
    gameStarted = false;
  }
}
function hardabbendChild() {
  timer.innerText = "80";
  timercount = 80;
  if (hardClicked === false) {
    removeAllImage();
    for (let i = 0; i < hardimg.length; i++) {
      hardimg[i] = document.createElement("img");
      hardimg[i].src = "./images/Q.jpg";
      hardimg[i].id = i + 1;
      hardimg[i].addEventListener("click", swaper);
      div.appendChild(hardimg[i]);
    }
    hardClicked = true;
    easyClicked = false;
    midClicked = false;
    clearInterval(interval);
    keyDown = false;
    gameStarted = false;
  }
}
function removeAllImage() {
  while (div.firstChild) {
    div.removeChild(div.firstChild);
  }
}
function returner() {
  for (let i = 0; i < choiceaArr.length; i++) {
    document.querySelectorAll("img")[i].src = "./images/Q.jpg";
  }
}
function imgChanger() {
  choiceaArr = [];
  for (var i = 0; i < randomNumArr.length; i++) {
    switch (randomNumArr[i]) {
      case 1:
      case 2:
        choiceaArr.push(1);
        break;
      case 3:
      case 4:
        choiceaArr.push(2);
        break;
      case 5:
      case 6:
        choiceaArr.push(3);
        break;
      case 7:
      case 8:
        choiceaArr.push(4);
        break;
      case 9:
      case 10:
        choiceaArr.push(5);
        break;
      case 11:
      case 12:
        choiceaArr.push(6);
        break;
      case 13:
      case 14:
        choiceaArr.push(7);
        break;
      case 15:
      case 16:
        choiceaArr.push(8);
        break;
      case 17:
      case 18:
        choiceaArr.push(9);
    }
  }
}
function swaper(event) {
  if (isProcessing) return;
  isProcessing = true;
  currentImage = event.target.id;
  if (keyDown) {
    mario.play();
    if (turnCount === 0) {
      Fclick = currentImage;
      if (R1 === 1) {
        document.querySelectorAll("img")[Fclick - 1].src =
          "./images/fruit/" + choiceaArr[Fclick - 1] + ".jpeg";
      } else if (R1 === 2) {
        document.querySelectorAll("img")[Fclick - 1].src =
          "./images/animal/" + choiceaArr[Fclick - 1] + ".jpeg";
      }
      turnCount++;
      isProcessing = false;
    } else if (turnCount === 1) {
      Sclick = currentImage;
      if (R1 === 1) {
        document.querySelectorAll("img")[Sclick - 1].src =
          "./images/fruit/" + choiceaArr[Sclick - 1] + ".jpeg";
      } else if (R1 === 2) {
        document.querySelectorAll("img")[Sclick - 1].src =
          "./images/animal/" + choiceaArr[Sclick - 1] + ".jpeg";
      }

      if (
        choiceaArr[Fclick - 1] === choiceaArr[Sclick - 1] &&
        Fclick !== Sclick
      ) {
        turnCount = 0;
        Fclick = 0;
        Sclick = 0;
        same++;
        isProcessing = false;
      } else {
        if (Fclick !== Sclick) {
          wrong.play();
          differnt++;
          message.innerText = `Wrong Count = ${differnt}`;
        }
        setTimeout(function () {
          document.getElementById(Fclick).src = "./images/Q.jpg";
          document.getElementById(Sclick).src = "./images/Q.jpg";
          turnCount = 0;
          Fclick = 0;
          Sclick = 0;
          isProcessing = false;
        }, 800);
      }
      if (same === choiceaArr.length / 2) {
        message.innerText = "You win";
        victory.play();
        clearInterval(interval);
        setTimeout(function () {
          handelReset();
        }, 3000);
      } else if (differnt === 4) {
        message.innerText = `The wrong Counter Hit ${differnt} You lost`;
        setTimeout(function () {
          handelReset();
        }, 2000);
      }
    }
  }
}
function timerCalc() {
  if (keyDown === true && differnt !== 4) {
    if (timercount > 0) {
      timercount--;
      timer.innerText = timercount;
    } else {
      timer.innerText = "Time's Up";
      clearInterval(interval);
    }
    if (timercount === 0) {
      message.innerText = `The Times Up You lost`;
      setTimeout(function () {
        handelReset();
      }, 15000);
    }
  }
}
function handelReset() {
  randomNum = 0;
  turnCount = 0;
  Fclick;
  Sclick;
  same = 0;
  differnt = 0;
  keyDown = false;
  easyClicked = false;
  midClicked = false;
  hardClicked = false;
  isProcessing = false;
  gameStarted = false;
  currentImage;
  interval;
  timercount = 0;
  choiceaArr = [];
  randomNumArr = [];
  timer.innerText = " ";
  message.innerText =
    "Increase The Difficulty first If You Want Then Press Any Key to Start";
  removeAllImage();
}
function handellight() {
  document.querySelector("body").classList.toggle("sun");
  document.querySelector("h1").classList.toggle("sun");
  document.querySelector("p").classList.toggle("sun");
  document.querySelector("#timer").classList.toggle("sun");
}
/*----------- Event Listeners ----------*/
document.addEventListener("keydown", handelKeyDown);
easybtn.addEventListener("click", easyabbendChild);
midbtn.addEventListener("click", midabbendChild);
hardbtn.addEventListener("click", hardabbendChild);
reset.addEventListener("click", handelReset);
light.addEventListener("click", handellight);
