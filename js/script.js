var score = 0;
(bestTime = Infinity), (gameTime = 30);
var gameActive = true;
var startTime;
var timeLeft = gameTime;
function moveShape() {
  if (!gameActive) return;
  var left = Math.random() * 300;
  var top = Math.random() * 300;
  var height = Math.random() * 100 + 100;
  var width = Math.random() * 200 + 100;
  var r = Math.random() * 255;
  var g = Math.random() * 255;
  var b = Math.random() * 255;
  var borderRadius = Math.random() * 100;
  document.getElementById("shape").style.height = height + "px";
  document.getElementById("shape").style.width = width + "px";
  document.getElementById("shape").style.left = left + "px";
  document.getElementById("shape").style.borderRadius = borderRadius + "%";
  document.getElementById("shape").style.top = top + "px";
  document.getElementById("shape").style.display = "block";
  document.getElementById("shape").style.background = "rgb(" + r + "," + g + "," + b + ")";
  startTime = new Date().getTime();
}
moveShape();
document.getElementById("shape").onclick = function () {
  if (!gameActive) return;
  document.getElementById("shape").style.display = "none";
  var clickedTime = new Date().getTime();
  var TimeTaken = (clickedTime - startTime) / 1000;
  if (TimeTaken < bestTime) {
    bestTime = TimeTaken;
  }
  score++;
  document.getElementById("score").innerHTML =
    "Score: " + score + " | Best Time: " + bestTime + "s";
  document.getElementById("shape").style.display = "none";
  moveShape();
};
function startGame() {
  score = 0;
  gameActive = true;
  timeLeft = gameTime;
  document.getElementById("score").innerHTML = "Score: 0 | Best Time: --";

  moveShape();
  var countDown = setInterval(() => {
    if (timeLeft > 0) {
      timeLeft--;
      document.getElementById("timer").innerHTML =
        "Time Left: " + timeLeft + "s";
    } else {
      clearInterval(countDown);
      gameActive = false;
      alert("Game Over! Your Score: " + score);
      document.getElementById("shape").style.display = "none";
    }
  }, 1000);
}
startGame();
