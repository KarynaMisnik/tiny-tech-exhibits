/* !!! SOLO PROJECT, SCORE TABLE !!! */

let HomeResult = document.getElementById("HomeResult");
let HomeScore = 0;
let GuestResult = document.getElementById("GuestResult");
let GuestScore = 0;

setInterval(function () {
  let n1 = parseInt(HomeResult.textContent);
  let n2 = parseInt(GuestResult.textContent);

  if (n1 > n2) {
    HomeResult.classList.add("highlight");
    GuestResult.classList.remove("highlight");
  } else if (n1 < n2) {
    HomeResult.classList.remove("highlight");
    GuestResult.classList.add("highlight");
  } else {
    HomeResult.classList.remove("highlight");
    GuestResult.classList.remove("highlight");
  }
}, 1000);

function homePlusOne() {
  HomeScore = HomeScore + 1;
  HomeResult.innerText = HomeScore;
}

function homePlusTwo() {
  HomeScore = HomeScore + 2;
  HomeResult.innerText = HomeScore;
}

function homePlusThree() {
  HomeScore = HomeScore + 3;
  HomeResult.innerText = HomeScore;
}

function guestPlusOne() {
  GuestScore = GuestScore + 1;
  GuestResult.innerText = GuestScore;
}

function guestPlusTwo() {
  GuestScore = GuestScore + 2;
  GuestResult.innerText = GuestScore;
}

function guestPlusThree() {
  GuestScore = GuestScore + 3;
  GuestResult.innerText = GuestScore;
}

function resetHomeScore() {
  HomeResult.innerText = 0;
  HomeScore = 0;
}

function resetGuestScore() {
  GuestResult.innerText = 0;
  GuestScore = 0;
}
/* !!! SOLO PROJECT, SCORE TABLE ENDS !!! */

/* !!! COUNTER !!! */
let saveEl = document.getElementById("save-el");
let countEl = document.getElementById("count-el");
let count = 0;

function increment() {
  count += 1;
  countEl.textContent = count;
}

function save() {
  let categoryStr = document.getElementById("category").value;
  alert(categoryStr);
  let countStr = count + " - ";
  saveEl.textContent += countStr + " " + categoryStr + " ";
  countEl.textContent = 0;
  count = 0;
}
/* !!! COUNTER ENDS !!! */

/* !!! PASSWORD GENERATOR !!! */
let randLetter = document.getElementById("pwd");
let button = document.getElementById("GenerateEigth");
let buttonTwo = document.getElementById("GenerateTen");
let buttonThree = document.getElementById("GenerateFifteen");
let buttonFour = document.getElementById("GenerateTwenty");

const letters = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
  "@",
  "#",
  "$",
  "%",
  "^",
  "&",
  "*",
  "(",
  ")",
  "_",
  "-",
  "+",
  "=",
  "{",
  "[",
  "}",
  "]",
  ",",
  "|",
  ":",
  ";",
  "<",
  ">",
  ".",
  "?",
  "/",
  "~",
  "`",
  "!",
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
];

function pswSizeEight() {
  button.addEventListener("click", function () {
    let randomLetters = [];

    let copy = letters.slice();
    while (randomLetters.length < 8) {
      let index = Math.floor(Math.random() * copy.length);
      randomLetters.push(copy.splice(index, 1)[0]);
      randLetter.textContent = randomLetters.join("");
    }
  });
}

function pswSizeTen() {
  buttonTwo.addEventListener("click", function () {
    let randomLetters = [];

    let copy = letters.slice();
    while (randomLetters.length < 10) {
      let index = Math.floor(Math.random() * copy.length);
      randomLetters.push(copy.splice(index, 1)[0]);
      randLetter.textContent = randomLetters.join("");
    }
  });
}

function pswSizeFifteen() {
  buttonThree.addEventListener("click", function () {
    let randomLetters = [];

    let copy = letters.slice();
    while (randomLetters.length < 15) {
      let index = Math.floor(Math.random() * copy.length);
      randomLetters.push(copy.splice(index, 1)[0]);
      randLetter.textContent = randomLetters.join("");
    }
  });
}

function pswSizeTwenty() {
  buttonFour.addEventListener("click", function () {
    let randomLetters = [];

    let copy = letters.slice();
    while (randomLetters.length < 20) {
      let index = Math.floor(Math.random() * copy.length);
      randomLetters.push(copy.splice(index, 1)[0]);
      randLetter.textContent = randomLetters.join("");
    }
  });
}
/* !!! PASSWORD GENERATOR ENDS !!! */

/* !!! ORWELL  !!! */

var iris = document.getElementsByClassName("iris");
document.onmousemove = function () {
  var x = (event.clientX * 100) / window.innerWidth + "%";
  var y = (event.clientY * 100) / window.innerHeight + "%";
  for (var i = 0; i < 1; i++) {
    iris[i].style.left = x;
    iris[i].style.top = y;
    iris[i].style.transform = "translate(-" + x + ",-" + y + ")";
  }
};

/* !!! ORWELL ENDS !!! */

/* !!! TYPING MACHINE EFFECT !!! */

const textDisplay = document.getElementById("text");
const phrases = ["Hello World!", "It is my Tiny Tech Playground"];
let i = 0;
let j = 0;
let currentPhrase = [];
let isDeleting = false;
let isEnd = false;

function loop() {
  isEnd = false;
  textDisplay.innerHTML = currentPhrase.join("");

  if (i < phrases.length) {
    if (!isDeleting && j <= phrases[i].length) {
      currentPhrase.push(phrases[i][j]);
      j++;
      textDisplay.innerHTML = currentPhrase.join("");
    }

    if (isDeleting && j <= phrases[i].length) {
      currentPhrase.pop(phrases[i][j]);
      j--;
      textDisplay.innerHTML = currentPhrase.join("");
    }

    if (j == phrases[i].length) {
      isEnd = true;
      isDeleting = true;
    }

    if (isDeleting && j === 0) {
      currentPhrase = [];
      isDeleting = false;
      i++;

      if (i === phrases.length) {
        i = 0;
      }
    }
  }
  const spedUp = Math.random() * (100 - 50) + 50;
  const normalSpeed = Math.random() * (300 - 200) + 200;
  const time = isEnd ? 4000 : isDeleting ? spedUp : normalSpeed;
  setTimeout(loop, time);
}

loop();
/* !!! TYPING MACHINE EFFECT ENDS !!! */
