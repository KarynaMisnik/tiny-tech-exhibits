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
