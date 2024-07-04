/*-------------- Constants -------------*/
const easybtn = document.querySelector("#Easy");
const midbtn = document.querySelector("#Mid");
const hardbtn = document.querySelector("#Hard");
const div = document.querySelector(".Container");
const message = document.querySelector("p");
/*---------- Variables (state) ---------*/
let randomNum = 0;
let turnCount = 0;
let Fclick;
let Sclick;
let same = 0;
let easyClicked = false;
let midClicked = false;
let hardClicked = false;
let choiceaArr = [];
let randomNumArr = [];
let easyimg = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let midimg = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
];
let hardimg = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22,
  23, 24, 25, 26, 27, 28, 29, 30,
];
/*----- Cached Element References  -----*/

/*-------------- Functions -------------*/
function handelKeyDown() {
  randomNumGenerater();
  imgChanger();
  R1 = Math.floor(Math.random() * 2 + 1); // Generate R1 in the global scope

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

function returner() {
  for (let i = 0; i < choiceaArr; i++) {
    document.querySelectorAll("img")[i].src = "Q.jpeg";
  }
}

for (let i = 0; i < choiceaArr; i++) {
  document.querySelectorAll("img")[i].addEventListener("click", swaper);
}

function swaper() {
  let currentImage = this;

  if (turnCount === 0) {
    Fclick = currentImage.id;
    if (R1 === 1) {
      document.querySelectorAll("img")[Fclick - 1].src =
        "./fruit/" + choiceaArr[Fclick - 1] + ".jpeg";
    } else if (R1 === 2) {
      document.querySelectorAll("img")[Fclick - 1].src =
        "./animal/" + choiceaArr[Fclick - 1] + ".jpeg";
    }
    C++;
  } else if (turnCount === 1) {
    Sclick = currentImage.id;
    if (R1 === 1) {
      document.querySelectorAll("img")[Sclick - 1].src =
        "./fruit/" + choiceaArr[Sclick - 1] + ".jpeg";
    } else if (R1 === 2) {
      document.querySelectorAll("img")[Sclick - 1].src =
        "./animal/" + choiceaArr[Sclick - 1] + ".jpeg";
    }
    if (choiceaArr[Fclick - 1] === choiceaArr[Sclick - 1]) {
      C = 0;
      Fclick = 0;
      Sclick = 0;
      same++;
    } else {
      setTimeout(function () {
        document.getElementById(Fclick).src = "Q.jpeg";
        document.getElementById(Sclick).src = "Q.jpeg";
        C = 0;
        Fclick = 0;
        Sclick = 0;
      }, 1000);
    }
  }
}

function randomNumGenerater() {
  if (easyClicked === false && midClicked === true && hardClicked === false) {
    randomNumArr = [];
    while (randomNumArr.length < 20) {
      randomNum = Math.floor(Math.random() * 20 + 1);

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
    while (randomNumArr.length < 30) {
      randomNum = Math.floor(Math.random() * 30 + 1);

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
    while (randomNumArr.length < 10) {
      randomNum = Math.floor(Math.random() * 10 + 1);

      if (!randomNumArr.includes(randomNum)) {
        randomNumArr.push(randomNum);
      }
    }
  }
}
function easyabbendChild() {
  if (easyClicked === false) {
    removeAllImage();
    for (let i = 0; i < easyimg.length; i++) {
      easyimg[i] = document.createElement("img");
      easyimg[i].src = "./images/Q.jpeg";
      div.appendChild(easyimg[i]);
    }
    easyClicked = true;
    midClicked = false;
    hardClicked = false;
  }
}
function midabbendChild() {
  if (midClicked === false) {
    removeAllImage();
    for (let i = 0; i < midimg.length; i++) {
      midimg[i] = document.createElement("img");
      midimg[i].src = "./images/Q.jpeg";
      div.appendChild(midimg[i]);
    }
    midClicked = true;
    easyClicked = false;
    hardClicked = false;
  }
}
function hardabbendChild() {
  if (hardClicked === false) {
    removeAllImage();
    for (let i = 0; i < hardimg.length; i++) {
      hardimg[i] = document.createElement("img");
      hardimg[i].src = "./images/Q.jpeg";
      div.appendChild(hardimg[i]);
    }
    hardClicked = true;
    easyClicked = false;
    midClicked = false;
  }
}

function removeAllImage() {
  while (div.firstChild) {
    div.removeChild(div.firstChild);
  }
}
function imgChanger() {
  if (randomNumArr.length === 10) {
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
      }
    }
  } else if (randomNumArr.length === 20) {
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
          break;
        case 19:
        case 20:
          choiceaArr.push(10);
          break;
      }
    }
  } else if (randomNumArr.length === 30) {
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
          break;
        case 19:
        case 20:
          choiceaArr.push(10);
          break;
        case 21:
        case 22:
          choiceaArr.push(11);
          break;
        case 23:
        case 24:
          choiceaArr.push(12);
          break;
        case 25:
        case 26:
          choiceaArr.push(13);
          break;
        case 27:
        case 28:
          choiceaArr.push(14);
          break;
        case 29:
        case 30:
          choiceaArr.push(15);
          break;
      }
    }
  }
}

/*----------- Event Listeners ----------*/
document.addEventListener("keydown", handelKeyDown);
easybtn.addEventListener("click", easyabbendChild);
midbtn.addEventListener("click", midabbendChild);
hardbtn.addEventListener("click", hardabbendChild);
