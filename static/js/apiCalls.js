async function fetchQuestionData(path, id) {
    try {
        let response = await fetch(`${path}/${id}`);
        if (!response.ok) throw new Error(`Failed to fetch answer.`);
        return await response.json();
    } catch (error) {
    console.error('Error fetching answer:', error);
    }
}

async function fetchCorrectAnswer() {
    let currentQuestionId = quizContainer.getAttribute("data-current-question");
    let correctAnswerObject = await fetchQuestionData('api/check-answer', currentQuestionId);
    let correctAnswer = correctAnswerObject.answer
    return correctAnswer;
}