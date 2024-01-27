
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('submit-button').addEventListener('click', checkAnswerForQuestion1);
});
function checkAnswerForQuestion1() {
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


