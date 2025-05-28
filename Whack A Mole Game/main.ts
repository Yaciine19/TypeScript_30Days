const holes = document.querySelectorAll(".hole") as NodeListOf<HTMLDivElement>;
const scoreBoard = document.querySelector("h1 .score") as HTMLSpanElement;
const moles = document.querySelectorAll(".mole") as NodeListOf<HTMLDivElement>;

let lastHole: HTMLDivElement;
let timeUp = false;
let score = 0;

function randomTime(min: number, max: number) {
  return Math.round(Math.random() * (max - min) + min);
}

function randomHole(holes: NodeListOf<HTMLDivElement>) {
  const idx = Math.floor(Math.random() * holes.length);
  const hole = holes[idx];

  if (lastHole === hole) {
    return randomHole(holes);
  }

  lastHole = hole;
  return hole;
}

function peep() {
  const time = randomTime(200, 1000);
  const hole = randomHole(holes);
  hole.classList.add("up");

  setTimeout(() => {
    hole.classList.remove("up");
    if (!timeUp) peep();
  }, time);
}

function startGame() {
  scoreBoard.textContent = (0).toString();
  timeUp = false;
  score = 0;
  peep();
  setTimeout(() => {
    timeUp = true;
  }, 10000);
}

function bonk(this: HTMLDivElement, e: MouseEvent) {
  if (!e.isTrusted) return; //Cheater!

  score++;
  this.classList.remove("up");
  scoreBoard.textContent = `${score}`;
}

moles.forEach((mole) => mole.addEventListener("click", bonk));
