var score = 0; // Initialize score
var problemSolving_score = 0; // Points for problem-solving skills
var perseverance_score = 0; // Points for perseverance
var creativity_score = 0; // Points for creativity
var observation_score = 0; // Points for observation skills
var technical_score = 0; // Points for technical interest
var numerical_score = 0; // Points for numerical skills
var curiosity_score = 0; // Points for curiosity

var science_score = 0; //category scores
var technology_score = 0; 
var engineering_score = 0; 
var math_score = 0; 

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
        bestSubject();
        show_results();
    }
}

function bestSubject() {
    // Example formula for calculating a Science score
    science_score = curiosity_score + perseverance_score + observation_score + creativity_score;
    technology_score = curiosity_score + problemSolving_score + technical_score; //do not confuse with technical_score
    engineering_score = problemSolving_score + observation_score + technical_score + numerical_score;
    math_score = problemSolving_score + perseverance_score + numerical_score;
    if (science_score > technology_score && science_score > engineering_score && science_score > math_score) {
        best_subject = "Science";
    }
    else if (technology_score > science_score && technolgy_score > engineering_score && technolgy_score > math_score) {
        best_subject = "Technology";
    }
    else if (engineering_score > science_score && engineering_score > technology_score && engineering_score > math_score) {
        best_subject = "Engineering";
    }
    else if (math_score > science_score && math_score > technology_score && math_score > engineering_score) {
        best_subject = "Math";
    }
    else { //implement a tiebreaker? or just avoid this case? or special message?
        best_subject = "No best subject";
    }
    return best_subject;
}

/*
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

*/
function show_results() {
    //last_question_number = 6;
    //document.getElementById("question" + last_question_number).textContent = 'bababoey';
    document.getElementById("question" + last_question_number).style.display = 'none';
    document.getElementById('results').style.display = 'block';
    document.getElementById('results-best').textContent = 'Overall pick: ' + best_subject;
    document.getElementById('results-science').textContent = 'Science score: ' + science_score;
    document.getElementById('results-technology').textContent = 'Technology score: ' + technology_score;
    document.getElementById('results-engineering').textContent = 'Engineering score: ' + engineering_score;
    document.getElementById('results-math').textContent = 'Math score: ' + math_score;
}   


function checkQuestion1() { //problem question

    let selectedOption = document.querySelector('input[name="question2"]:checked');
    //let resultElement = document.getElementById("result2");
    if (selectedOption && selectedOption.value === "EnjoyChallenge") {
        
        problemSolving_score += 3;
        technical_score += 1;
        perseverance_score += 1;
        creativity_score += 2;
    } 
    else if (selectedOption && selectedOption.value === "TryThenMoveOn") {
         
        problemSolving_score += 2;
        technical_score += 1;
        creativity_score += 1;
    }
    else if (selectedOption && selectedOption.value === "PreferEasyPuzzles") {
        problemSolving_score += 1;
    }

}

function checkQuestion2() { //perseverance question
    let selectedOption = document.querySelector('input[name="question1"]:checked');
    //let resultElement = document.getElementById("result1");
    if (selectedOption && selectedOption.value === "EnjoyLongProjects") {
        perseverance_score += 3;
        problemSolving_score += 2;
    } 
    else if (selectedOption && selectedOption.value === "OkayWithLongProjects") {
        perseverance_score += 1;
        problemSolving_score += 2;
    }
    else if (selectedOption && selectedOption.value === "PreferQuickTasks") {
        problemSolving_score += 1;
    }
}

function checkQuestion3() { //creative question
    let selectedOption = document.querySelector('input[name="question3"]:checked');
    //let resultElement = document.getElementById("result3");
    if (selectedOption && selectedOption.value === "CreateSomethingNew") {
         
        creativity_score += 3;
        observation_score += 1;
        
    } 
    else if (selectedOption && selectedOption.value === "UseAsIntended") {
        observation_score += 2;
        technical_score += 1;
        
    }
    else if (selectedOption && selectedOption.value === "NotSure") {
        // Incorrect?
    }
}

function checkQuestion4() { //creativity question
    let selectedOption = document.querySelector('input[name="question4"]:checked');
    let resultElement = document.getElementById("result4");
    if (selectedOption && selectedOption.value === "Innovative") {
        creativity_score += 3;
        observation_score += 1;
        problemSolving_score += 1;
        technical_score += 1;
    } 
    else if (selectedOption && selectedOption.value === "Traditional") {
        observation_score += 2;
        technical_score += 2;
        problemSolving_score += 1;
    }
    else if (selectedOption && selectedOption.value === "AskForHelp") {
        problemSolving_score += 1;
        perseverance_score += 1;
    }

}

function checkQuestion5() { //chemical question
    let selectedOption = document.querySelector('input[name="question5"]:checked');
    //let resultElement = document.getElementById("result5");
    if (selectedOption && selectedOption.value === "Sulfuric Acid") {
        // Correct 
        numerical_score += 1;
        technical_score += 1;

    }
}


function checkQuestion6() { //capital question
    let selectedOption = document.querySelector('input[name="question6"]:checked');
    //let resultElement = document.getElementById("result6");
    if (selectedOption && selectedOption.value === "Tokyo") {
        // Correct 
        perseverance_score += 1;
    } 
}



