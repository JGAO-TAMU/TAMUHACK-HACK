
function checkQuestion1() {
    let selectedOption = document.querySelector('input[name="question1"]:checked');
    let resultElement = document.getElementById("result1");
    if (selectedOption && selectedOption.value === "Black") {
        // Correct 
        updateScore(score);
    } else {
        // Incorrect (dosnt do anything)
        resultElement.textContent = "Nope!";
    }
}

function checkQuestion2() {

    let selectedOption = document.querySelector('input[name="question2"]:checked');
    let resultElement = document.getElementById("result2");
    if (selectedOption && selectedOption.value === "Golden") {
        // Correct 
        updateScore(score);
    } else {
        // Incorrect 
        resultElement.textContent = "Nope!";
    }
}

function checkQuestion3() {
    let selectedOption = document.querySelector('input[name="question3"]:checked');
    let resultElement = document.getElementById("result3");
    if (selectedOption && selectedOption.value === "Cheetah") {
        // Correct 
        updateScore(score);
    } else {
        // Incorrect 
        resultElement.textContent = "Nope!";
    }
}

function checkQuestion4() {
    let selectedOption = document.querySelector('input[name="question4"]:checked');
    let resultElement = document.getElementById("result4");
    if (selectedOption && selectedOption.value === "Jupiter") {
        // Correct 
        updateScore(score);
    } else {
        // Incorrect 
        resultElement.textContent = "Nope!";
    }
}

function checkQuestion5() {
    let selectedOption = document.querySelector('input[name="question5"]:checked');
    let resultElement = document.getElementById("result5");
    if (selectedOption && selectedOption.value === "Sulfuric Acid") {
        // Correct 
        updateScore(score);
    } else {
        // Incorrect 
        resultElement.textContent = "Nope!";
    }
}


function checkQuestion6() {
    let selectedOption = document.querySelector('input[name="question6"]:checked');
    let resultElement = document.getElementById("result6");
    if (selectedOption && selectedOption.value === "Tokyo") {
        // Correct 
        updateScore(score);
    } else {
        // Incorrect 
        resultElement.textContent = "Nope!";
    }
}

