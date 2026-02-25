// Find and select the buttons from the DOM
let quizContainer = document.querySelector(".quiz-container")
let choiceButtons = document.querySelectorAll("#question-choices button");
let checkAnswerButton = document.getElementById("check-answer-button");

let selectedChoice = "";

// Function to retrieve specific choice of the selected button
let selectChoice = (e) => {
    selectedChoice = e.target.getAttribute("data-choice-key");
    alert(selectedChoice);
};

// Function to check selected choice against actual answer
let checkAnswer = async (e) => {
    try {
        let currentQuestionId = quizContainer.getAttribute("data-current-question")
        let response = await fetch(`api/check-answer/${currentQuestionId}`);
        if (!response.ok) throw new Error(`Failed to fetch answer. ${response.url}`);
            let correct_answer = await response.json();
            let answer_check_result = correct_answer===selectedChoice
        
        alert(`(Test) correct answer is ${correct_answer}. ${answer_check_result? "Correct":"Incorrect"}`);
  } catch (error) {
    console.error('Error fetching answer:', error);
  }
};

// Add event listeners
choiceButtons.forEach(button => button.addEventListener("click", selectChoice));
checkAnswerButton.addEventListener("click", checkAnswer);