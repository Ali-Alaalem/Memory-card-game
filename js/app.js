/*-------------- Constants -------------*/
const btn = document.querySelector("button");
const div = document.querySelector(".Container");
/*---------- Variables (state) ---------*/
let clickedCounter = 0;
let randomNum = 0;
let randomNumArr = [];
let img = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
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
function abbendChild() {
  for (let i = 0; i < img.length; i++) {
    img[i] = document.createElement("img");
    img[i].src = "./images/Q.jpeg";
    div.appendChild(img[i]);
  }
  clickedCounter++;
}

/*----------- Event Listeners ----------*/
document.addEventListener("keydown", handelKeyDown);
btn.addEventListener("click", abbendChild);
