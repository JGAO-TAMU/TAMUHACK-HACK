function showNextQuestion(currentQuestionNumber) {
    var currentQuestion = document.getElementById('question' + currentQuestionNumber);
    var currentNButton = document.getElementById('next-button' + currentQuestionNumber);
    //currentSButton = document.getElementById('submit-button' + currentQuestionNumber);
    var nextQuestion = document.getElementById('question' + (currentQuestionNumber + 1));
    var nextNButton = document.getElementById('next-button' + (currentQuestionNumber +1));
    //var nextSButton = document.getElementById('submit-button' + (currentQuestionNumber+1));
    if (nextQuestion) {
        currentQuestion.style.display = 'none';
        currentNButton.style.display = 'none';
        //currentSButton.style.display = 'none';
        nextQuestion.style.display = 'block';
        nextNButton.style.display = 'block';
        //nextSButton.style.display = 'block';
    } else {
        alert("Quiz over! (should be a redirect to the results page)");
    }
}