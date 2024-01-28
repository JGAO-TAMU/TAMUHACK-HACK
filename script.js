var score = 0; // Initialize score
var animal_score = 0; //for getting animal questions correct (subject 1)   
var science_score = 0; //for getting science questions correct (subject 2)
var geography_score = 0; //for getting geography questions correct (subject 3)
var health_score = 0; //for getting health questions correct (subject 4)
var math_score = 0; //for getting math questions correct (subject 5)
var best_subject = -1; //best score out of the subjects
var last_question_number = 6; //last question number ***CHANGE THIS IF YOU ADD MORE QUESTIONS***

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

        //alert("Quiz over! (should be a redirect to the results page)");
        show_results();
    }
}


function updateScore() {
    score += 1;
    document.getElementById('score').textContent = 'Score: ' + score;
}

function updateAnimal() {
    animal_score += 1;
}

function updateScience() {
    science_score += 1;
}

function updateGeography() {
    geography_score += 1;
}


function show_results() {
    //last_question_number = 6;
    //document.getElementById("question" + last_question_number).textContent = 'bababoey';
    document.getElementById("question" + last_question_number).style.display = 'none';
    document.getElementById('results').style.display = 'block';
    document.getElementById('results-total').textContent = 'Total score: ' + score;
    document.getElementById('results-animal').textContent = 'Animal score: ' + animal_score;
    document.getElementById('results-science').textContent = 'Science score: ' + science_score;
    document.getElementById('results-geography').textContent = 'Geography score: ' + geography_score;
}


function checkQuestion1() { //cat question
    let selectedOption = document.querySelector('input[name="question1"]:checked');
    let resultElement = document.getElementById("result1");
    if (selectedOption && selectedOption.value === "Black") {
        // Correct 
        updateScore();
        updateAnimal();
    } else {
        // Incorrect (dosnt do anything)
        resultElement.textContent = "Nope!";
    }
}

function checkQuestion2() { //dog question

    let selectedOption = document.querySelector('input[name="question2"]:checked');
    let resultElement = document.getElementById("result2");
    if (selectedOption && selectedOption.value === "Golden") {
        // Correct 
        updateScore();
        updateAnimal();
    } else {
        // Incorrect 
        resultElement.textContent = "Nope!";
    }
}

function checkQuestion3() { //cheetah question
    let selectedOption = document.querySelector('input[name="question3"]:checked');
    let resultElement = document.getElementById("result3");
    if (selectedOption && selectedOption.value === "Cheetah") {
        // Correct 
        updateScore();
        updateAnimal();
    } else {
        // Incorrect 
        resultElement.textContent = "Nope!";
    }
}

function checkQuestion4() { //planet question
    let selectedOption = document.querySelector('input[name="question4"]:checked');
    let resultElement = document.getElementById("result4");
    if (selectedOption && selectedOption.value === "Jupiter") {
        // Correct 
        updateScore();
        updateScience();
    } else {
        // Incorrect 
        resultElement.textContent = "Nope!";
    }
}

function checkQuestion5() { //chemical question
    let selectedOption = document.querySelector('input[name="question5"]:checked');
    let resultElement = document.getElementById("result5");
    if (selectedOption && selectedOption.value === "Sulfuric Acid") {
        // Correct 
        updateScore();
        updateScience();
    } else {
        // Incorrect 
        resultElement.textContent = "Nope!";
    }
}


function checkQuestion6() { //capital question
    let selectedOption = document.querySelector('input[name="question6"]:checked');
    let resultElement = document.getElementById("result6");
    if (selectedOption && selectedOption.value === "Tokyo") {
        // Correct 
        updateScore();
        updateGeography();
    } else {
        // Incorrect 
        resultElement.textContent = "Nope!";
    }
}

