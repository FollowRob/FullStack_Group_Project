async function fetchCorrectAnswer() {
    try {
        let currentQuestionId = quizContainer.getAttribute("data-current-question")
        let response = await fetch(`api/check-answer/${currentQuestionId}`);

        if (!response.ok) throw new Error(`Failed to fetch answer. ${response.url}`);
        
        let correctAnswer = await response.json();
        return correctAnswer
    
    } catch (error) {
    console.error('Error fetching answer:', error);
    }
}