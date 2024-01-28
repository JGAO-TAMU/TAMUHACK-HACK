function showNextQuestion(currentQuestionNumber) {
    var currentQuestion = document.getElementById('question' + currentQuestionNumber);
    currentNButton = document.getElementById('next-button' + currentQuestionNumber);
    currentSButton = document.getElementById('submit-button' + currentQuestionNumber);
    var nextQuestion = document.getElementById('question' + (currentQuestionNumber + 1));
    var nextNButton = document.getElementById('next-button' + currentQuestionNumber);
    var nextSButton = document.getElementById('submit-button' + currentQuestionNumber);
    if (nextQuestion) {
        currentQuestion.style.display = 'none';
        currentNButton.style.display = 'none';
        currentSButton.style.display = 'none';
        nextQuestion.style.display = 'block';
        nextNButton.style.display = 'block';
        nextSButton.style.display = 'block';
    } else {
        alert("Quiz over!");
    }
}