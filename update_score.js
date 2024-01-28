let score = 0; // Initialize score

function updateScore(currentscore) {
    score = currentscore + 1;
    document.getElementById('score').textContent = 'Score: ' + score;
}