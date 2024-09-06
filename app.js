// script.js
let score = 0;
let timeLeft = 10;
let isGameRunning = false;

const clickButton = document.getElementById('click-button');
const timerDisplay = document.getElementById('timer');
const scoreDisplay = document.getElementById('score');
const startButton = document.getElementById('start-button');

// Start game function
function startGame() {
    score = 0;
    timeLeft = 10;
    isGameRunning = true;
    
    clickButton.disabled = false;
    clickButton.textContent = "Click Me!";
    scoreDisplay.textContent = `Score: ${score}`;
    timerDisplay.textContent = `Time Left: ${timeLeft}s`;
    
    const countdownInterval = setInterval(() => {
        timeLeft--;
        timerDisplay.textContent = `Time Left: ${timeLeft}s`;

        if (timeLeft <= 0) {
            clearInterval(countdownInterval);
            endGame();
        }
    }, 1000);
}

// End game function
function endGame() {
    isGameRunning = false;
    clickButton.disabled = true;
    clickButton.textContent = "Game Over!";
    alert(`Time's up! You clicked the button ${score} times.`);
}

// Button click handler
clickButton.addEventListener('click', () => {
    if (isGameRunning) {
        score++;
        scoreDisplay.textContent = `Score: ${score}`;
    }
});

// Start button handler
startButton.addEventListener('click', () => {
    if (!isGameRunning) {
        startGame();
    }
});
