// Find and select the buttons from the DOM
let quizContainer = document.querySelector(".quiz-container")
let choiceButtons = document.querySelectorAll("#question-choices button");
let checkAnswerButton = document.getElementById("check-answer-button");

let selectedChoice = "";

// Function to retrieve specific choice of the selected button
let selectChoice = (e) => {
    selectedChoice = e.target.getAttribute("data-choice-key");
};

// Function to check selected choice against actual answer
async function checkAnswer() {
    let correctAnswer = await fetchCorrectAnswer()
    let result = selectedChoice === correctAnswer

    alert(`${result ? "You got it correct!" : "You got it incorrect :("}
        your answer: ${selectedChoice}, correct answer: ${correctAnswer}`);
};

// Add event listeners
choiceButtons.forEach(button => button.addEventListener("click", selectChoice));
checkAnswerButton.addEventListener("click", checkAnswer);