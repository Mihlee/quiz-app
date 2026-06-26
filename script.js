const questions = [
    {
        question: "Which video game character is known as the 'Ghost of Sparta'?",
        answers: [{ text: "Master Chief", correct: false }, { text: "Kratos", correct: true }, { text: "Doom Slayer", correct: false }, { text: "Link", correct: false }]
    },
    {
        question: "What is the most-streamed song on Spotify of all time?",
        answers: [{ text: "Shape of You - Ed Sheeran", correct: false }, { text: "Blinding Lights - The Weeknd", correct: true }, { text: "Stay - Kid LAROI", correct: false }, { text: "Believer - Imagine Dragons", correct: false }]
    },
    {
        question: "How many elements are currently on the Periodic Table?",
        answers: [{ text: "112", correct: false }, { text: "118", correct: true }, { text: "120", correct: false }, { text: "108", correct: false }]
    },
    {
        question: "In Minecraft, what do Creepers turn into if struck by lightning?",
        answers: [{ text: "Super Creepers", correct: false }, { text: "Charged Creepers", correct: true }, { text: "Mutant Creepers", correct: false }, { text: "Ender Creepers", correct: false }]
    },
    {
        question: "Which country consumes the most chocolate per capita?",
        answers: [{ text: "Belgium", correct: false }, { text: "Switzerland", correct: true }, { text: "USA", correct: false }, { text: "Germany", correct: false }]
    },
    {
        question: "What is the rarest blood type in humans?",
        answers: [{ text: "O Negative", correct: false }, { text: "AB Negative", correct: true }, { text: "B Positive", correct: false }, { text: "A Negative", correct: false }]
    },
    {
        question: "Which of the following is NOT a house in Hogwarts?",
        answers: [{ text: "Hufflepuff", correct: false }, { text: "Dragonclaw", correct: true }, { text: "Slytherin", correct: false }, { text: "Ravenclaw", correct: false }]
    },
    {
        question: "What was the first movie to gross over $2 billion dollars?",
        answers: [{ text: "Avengers: Endgame", correct: false }, { text: "Avatar", correct: true }, { text: "Titanic", correct: false }, { text: "Star Wars: The Force Awakens", correct: false }]
    },
    {
        question: "What animal has the highest blood pressure?",
        answers: [{ text: "Blue Whale", correct: false }, { text: "Giraffe", correct: true }, { text: "Elephant", correct: false }, { text: "Flea", correct: false }]
    },
    {
        question: "Which social media app popularized the short-form video trend first?",
        answers: [{ text: "TikTok", correct: false }, { text: "Vine", correct: true }, { text: "Instagram Reels", correct: false }, { text: "Snapchat", correct: false }]
    },
    {
        question: "What is the only mammal capable of true flight?",
        answers: [{ text: "Flying Squirrel", correct: false }, { text: "Bat", correct: true }, { text: "Sugar Glider", correct: false }, { text: "Pigeon", correct: false }]
    },
    {
        question: "How many hearts does an octopus have?",
        answers: [{ text: "1", correct: false }, { text: "3", correct: true }, { text: "2", correct: false }, { text: "8", correct: false }]
    },
    {
        question: "Which planet in our solar system spins backwards (clockwise)?",
        answers: [{ text: "Mars", correct: false }, { text: "Venus", correct: true }, { text: "Jupiter", correct: false }, { text: "Neptune", correct: false }]
    },
    {
        question: "In what year was the first iPhone released?",
        answers: [{ text: "2005", correct: false }, { text: "2007", correct: true }, { text: "2009", correct: false }, { text: "2006", correct: false }]
    },
    {
        question: "What is the name of the dynamic island nation in the anime 'One Piece'?",
        answers: [{ text: "Wano Country", correct: true }, { text: "Konoha", correct: false }, { text: "Marley", correct: false }, { text: "Soul Society", correct: false }]
    }
    // YOU CAN ADD 35 MORE QUESTIONS HERE FOLLOWING THE EXACT SAME FORMAT!
];

let currentQuestionIndex = 0;
let score = 0;

const questionElement = document.getElementById("question");
const answerButtonsElement = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next Question";
    showQuestion();
}

function showQuestion() {
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    questionElement.innerText = `Q${currentQuestionIndex + 1}: ${currentQuestion.question}`;

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
        selectedBtn.style.border = "5px solid #26890c"; // Bright green outline
    } else {
        selectedBtn.style.border = "5px solid #e21b3c"; // Bright red outline
        selectedBtn.style.opacity = "0.3"; 
    }
    
    // Fade out other non-selected items to highlight the true answer
    Array.from(answerButtonsElement.children).forEach(button => {
        button.disabled = true;
        if (button.dataset.correct === "true") {
            button.style.opacity = "1"; // Keep correct answer highlighted
            button.style.border = "5px solid #26890c";
        } else if (button !== selectedBtn) {
            button.style.opacity = "0.2";
        }
    });
    
    nextButton.classList.remove("hide");
}

nextButton.addEventListener("click", () => {
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        resetState();
        questionElement.innerHTML = `<div class='score-text'>🏆 Game Over! 🏆</div>You scored ${score} out of ${questions.length}!`;
        nextButton.innerHTML = "Play Again";
        nextButton.classList.remove("hide");
        currentQuestionIndex = -1; 
    }
});

startQuiz();