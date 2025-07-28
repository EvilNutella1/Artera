let score = 0;
let gameStarted = false;

function startNutellaGame() {
    if (gameStarted) return; // verhindern, dass mehrfach gestartet wird
    gameStarted = true;

    const emoji = document.getElementById("nutellaEmoji");
    const scoreDisplay = document.getElementById("score");

    emoji.style.display = "inline-block";
    scoreDisplay.style.display = "block";

    moveNutellaRandomly();

    emoji.addEventListener("click", () => {
        score++;
        scoreDisplay.textContent = `Score: ${score}`;
        moveNutellaRandomly();
    });
}

function moveNutellaRandomly() {
    const emoji = document.getElementById("nutellaEmoji");
    const maxX = window.innerWidth - 50;
    const maxY = window.innerHeight - 50;

    const x = Math.random() * maxX;
    const y = Math.random() * maxY;

    emoji.style.left = x + "px";
    emoji.style.top = y + "px";
}