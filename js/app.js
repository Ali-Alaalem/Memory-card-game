/*-------------- Constants -------------*/
const easybtn = document.querySelector("#Easy");
const midbtn = document.querySelector("#Mid");
const hardbtn = document.querySelector("#Hard");
const div = document.querySelector(".Container");
const message = document.querySelector("p");
/*---------- Variables (state) ---------*/
let randomNum = 0;
let easyClicked = false;
let midClicked = false;
let hardClicked = false;
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
}

function randomNumGenerater() {
  if (clickedCounter === 1) {
    while (randomNumArr.length < 20) {
      randomNum = Math.floor(Math.random() * 20 + 1);

      if (!randomNumArr.includes(randomNum)) {
        randomNumArr.push(randomNum);
      }
    }
  } else if (clickedCounter === 2) {
    while (randomNumArr.length < 30) {
      randomNum = Math.floor(Math.random() * 30 + 1);

      if (!randomNumArr.includes(randomNum)) {
        randomNumArr.push(randomNum);
      }
    }
  } else if (clickedCounter === 0) {
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

/*----------- Event Listeners ----------*/
document.addEventListener("keydown", handelKeyDown);
easybtn.addEventListener("click", easyabbendChild);
midbtn.addEventListener("click", midabbendChild);
hardbtn.addEventListener("click", hardabbendChild);
