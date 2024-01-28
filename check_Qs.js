

function checkQuestion1() {
    let selectedOption = document.querySelector('input[name="question1"]:checked');
    let resultElement = document.getElementById("result1");
    if (selectedOption && selectedOption.value === "Black") {
        // Correct 
        resultElement.textContent = "Correct!";
    } else {
        // Incorrect 
        resultElement.textContent = "Nope!";
    }
}

function checkQuestion2() {

    let selectedOption = document.querySelector('input[name="question2"]:checked');
    let resultElement = document.getElementById("result2");
    if (selectedOption && selectedOption.value === "Golden") {
        // Correct 
        resultElement.textContent = "Correct!";
    } else {
        // Incorrect 
        resultElement.textContent = "Nope!";
    }
}


