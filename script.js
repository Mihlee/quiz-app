const questions = [
    {
        question: "What does HTML stand for?",
        answers: [
            { text: "Hyper Text Markup Language", correct: true },
            { text: "Home Tool Markup Language", correct: false },
            { text: "Hyperlinks and Text Movie Language", correct: false }
        ]
    },
    {
        question: "Which language is used for styling web pages?",
        answers: [
            { text: "HTML", correct: false },
            { text: "CSS", correct: true },
            { text: "JavaScript", correct: false }
        ]
    }
];

let currentQuestionIndex = 0;
let score = 0;

const questionElement = document.getElementById("question");
const answerButtonsElement = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

function showQuestion() {
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    questionElement.innerText = currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerText = answer.text;
        button.classList.add("btn");
        if(answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
        answerButtonsElement.appendChild(button);
    });
}

function resetState() {
    nextButton.classList.add("hide");
    while(answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild(answerButtonsElement.firstChild);
    }
}

function selectAnswer(e) {
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if(isCorrect) {
        score++;
        selectedBtn.style.backgroundColor = "#2bc448"; // Green for correct
    } else {
        selectedBtn.style.backgroundColor = "#e84a4a"; // Red for incorrect
    }
    
    // Disable buttons after selection
    Array.from(answerButtonsElement.children).forEach(button => {
        button.disabled = true;
    });
    
    nextButton.classList.remove("hide");
}

nextButton.addEventListener("click", () => {
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        // Show final score
        resetState();
        questionElement.innerText = `You scored ${score} out of ${questions.length}!`;
        nextButton.innerHTML = "Play Again";
        nextButton.classList.remove("hide");
        currentQuestionIndex = -1; // Reset loop for replay
    }
});

// Start the app!
startQuiz();