// Find and select the buttons from the DOM
let choiceButtons = document.querySelectorAll("#question-choices button");
let checkAnswerButton = document.getElementById("check-answer-button");

let selectedChoice = "";

// Function to retrieve specific choice of the selected button
let selectChoice = (e) => {
    selectedChoice = e.target.getAttribute("data-choice-key");
    alert(selectedChoice);
};

// Function to check selected choice against actual answer
let checkAnswer = (e) => {
    let answer = e.target.getAttribute("data-correct-answer");
    
    if (selectedChoice === "") {
        alert("You didn't select a choice!");
    } else if (selectedChoice === answer) {
        alert("You got it right!");
    } else {
        alert(`Wrong! The correct answer was ${answer}`);
    }
};

// Add event listeners
choiceButtons.forEach(button => button.addEventListener("click", selectChoice));
checkAnswerButton.addEventListener("click", checkAnswer);