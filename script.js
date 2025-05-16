const gameArea = document.getElementById("game-area");
const scoreDisplay = document.getElementById("score");
let score = 0;

function spawnCircle() {
  const circle = document.createElement("div");
  circle.classList.add("circle");

  const x = Math.random() * 450;
  const y = Math.random() * 450;
  circle.style.left = `${x}px`;
  circle.style.top = `${y}px`;

  circle.onclick = () => {
    score++;
    scoreDisplay.textContent = score;
    circle.remove();
    spawnCircle(); // next circle
  };

  gameArea.appendChild(circle);
}

// Start game
spawnCircle();
