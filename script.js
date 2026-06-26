
const feedbackMessage = document.getElementById("feedback-message"); [
    // === HTML QUESTIONS (1-12) ===
    {
        question: "What does HTML stand for?",
        answers: [{ text: "Hyper Text Markup Language", correct: true }, { text: "High Text Machine Language", correct: false }, { text: "Hyperlink and Text Management Language", correct: false }, { text: "Home Tool Markup Language", correct: false }]
    },
    {
        question: "Which HTML element is used to define the most important heading?",
        answers: [{ text: "<heading>", correct: false }, { text: "<h6>", correct: false }, { text: "<h1>", correct: true }, { text: "<head>", correct: false }]
    },
    {
        question: "What is the correct HTML element for inserting a line break?",
        answers: [{ text: "<break>", correct: false }, { text: "<lb>", correct: false }, { text: "<br>", correct: true }, { text: "<hr>", correct: false }]
    },
    {
        question: "Which attribute specifies alternative text for an image if it cannot be displayed?",
        answers: [{ text: "title", correct: false }, { text: "src", correct: false }, { text: "alt", correct: true }, { text: "link", correct: false }]
    },
    {
        question: "What is the correct HTML for creating a hyperlink?",
        answers: [{ text: "<a>http://google.com</a>", correct: false }, { text: "<a href='http://google.com'>Google</a>", correct: true }, { text: "<a name='http://google.com'>Google</a>", correct: false }, { text: "<link src='http://google.com'>Google</link>", correct: false }]
    },
    {
        question: "Which character is used to indicate an end tag in HTML?",
        answers: [{ text: "<", correct: false }, { text: "*", correct: false }, { text: "^", correct: false }, { text: "/", correct: true }]
    },
    {
        question: "How do you create an ordered list in HTML?",
        answers: [{ text: "<ul>", correct: false }, { text: "<list>", correct: false }, { text: "<ol>", correct: true }, { text: "<dl>", correct: false }]
    },
    {
        question: "Which HTML element is used to display a scalar measurement within a known range (like a gauge)?",
        answers: [{ text: "<gauge>", correct: false }, { text: "<range>", correct: false }, { text: "<meter>", correct: true }, { text: "<progress>", correct: false }]
    },
    {
        question: "Which HTML5 element defines independent, self-contained content like a blog post?",
        answers: [{ text: "<section>", correct: false }, { text: "<div>", correct: false }, { text: "<article>", correct: true }, { text: "<aside>", correct: false }]
    },
    {
        question: "What is the correct HTML element for playing audio files?",
        answers: [{ text: "<sound>", correct: false }, { text: "<audio>", correct: true }, { text: "<music>", correct: false }, { text: "<mp3>", correct: false }]
    },
    {
        question: "In HTML, form checkboxes are created using which input type?",
        answers: [{ text: "type='check'", correct: false }, { text: "type='box'", correct: false }, { text: "type='checkbox'", correct: true }, { text: "type='button'", correct: false }]
    },
    {
        question: "Which HTML element defines navigation links?",
        answers: [{ text: "<nav>", correct: true }, { text: "<navigate>", correct: false }, { text: "<links>", correct: false }, { text: "<menu>", correct: false }]
    },

    // === CSS QUESTIONS (13-25) ===
    {
        question: "What does CSS stand for?",
        answers: [{ text: "Creative Style Sheets", correct: false }, { text: "Cascading Style Sheets", correct: true }, { text: "Computer Style Sheets", correct: false }, { text: "Colorful Style Sheets", correct: false }]
    },
    {
        question: "Where in an HTML document is the correct place to refer to an external style sheet?",
        answers: [{ text: "In the <head> section", correct: true }, { text: "At the end of the document", correct: false }, { text: "In the <body> section", correct: false }, { text: "Inside the <html> tag", correct: false }]
    },
    {
        question: "Which HTML tag is used to define an internal style sheet?",
        answers: [{ text: "<css>", correct: false }, { text: "<script>", correct: false }, { text: "<style>", correct: true }, { text: "<link>", correct: false }]
    },
    {
        question: "Which CSS property changes the background color of an element?",
        answers: [{ text: "color", correct: false }, { text: "bgcolor", correct: false }, { text: "background-color", correct: true }, { text: "surface-color", correct: false }]
    },
    {
        question: "How do you select an element with the id 'header' in CSS?",
        answers: [{ text: ".header", correct: false }, { text: "#header", correct: true }, { text: "header", correct: false }, { text: "*header", correct: false }]
    },
    {
        question: "How do you select elements with the class name 'test' in CSS?",
        answers: [{ text: "#test", correct: false }, { text: "test", correct: false }, { text: ".test", correct: true }, { text: "*test", correct: false }]
    },
    {
        question: "Which CSS property controls the text size?",
        answers: [{ text: "text-style", correct: false }, { text: "text-size", correct: false }, { text: "font-size", correct: true }, { text: "font-weight", correct: false }]
    },
    {
        question: "What is the correct CSS property to make text bold?",
        answers: [{ text: "font-weight: bold;", correct: true }, { text: "text-style: bold;", correct: false }, { text: "font: bold;", correct: false }, { text: "style: bold;", correct: false }]
    },
    {
        question: "How do you make a list display its items horizontally instead of vertically?",
        answers: [{ text: "display: block;", correct: false }, { text: "display: inline;", correct: true }, { text: "list-style-type: horizontal;", correct: false }, { text: "align: horizontal;", correct: false }]
    },
    {
        question: "Which CSS property controls the space between the element's border and its inner content?",
        answers: [{ text: "margin", correct: false }, { text: "padding", correct: true }, { text: "border-spacing", correct: false }, { text: "spacer", correct: false }]
    },
    {
        question: "How do you apply shorthand margins in order: Top, Right, Bottom, Left?",
        answers: [{ text: "margin: 10px 5px 20px 1px;", correct: true }, { text: "margin: 10px 1px 5px 20px;", correct: false }, { text: "margin: top right bottom left;", correct: false }, { text: "margin: 10px 5px 1px 20px;", correct: false }]
    },
    {
        question: "What is the default value of the position property in CSS?",
        answers: [{ text: "relative", correct: false }, { text: "absolute", correct: false }, { text: "static", correct: true }, { text: "fixed", correct: false }]
    },
    {
        question: "Which CSS property stacks elements element-wise layer-wise?",
        answers: [{ text: "z-index", correct: true }, { text: "layer-index", correct: false }, { text: "stack", correct: false }, { text: "order", correct: false }]
    },

    // === JAVASCRIPT QUESTIONS (26-40) ===
    {
        question: "Inside which HTML element do we put JavaScript code?",
        answers: [{ text: "<js>", correct: false }, { text: "<javascript>", correct: false }, { text: "<script>", correct: true }, { text: "<code>", correct: false }]
    },
    {
        question: "How do you write 'Hello World' in an alert box using JavaScript?",
        answers: [{ text: "msgBox('Hello World');", correct: false }, { text: "alert('Hello World');", correct: true }, { text: "msg('Hello World');", correct: false }, { text: "alertBox('Hello World');", correct: false }]
    },
    {
        question: "How do you create a function in JavaScript?",
        answers: [{ text: "function myFunction()", correct: true }, { text: "function:myFunction()", correct: false }, { text: "create myFunction()", correct: false }, { text: "def myFunction()", correct: false }]
    },
    {
        question: "How do you call a function named 'myFunction'?",
        answers: [{ text: "call myFunction();", correct: false }, { text: "myFunction();", correct: true }, { text: "execute myFunction();", correct: false }, { text: "run myFunction();", correct: false }]
    },
    {
        question: "How do you write an IF statement in JavaScript?",
        answers: [{ text: "if i == 5 then", correct: false }, { text: "if (i == 5)", correct: true }, { text: "if i = 5", correct: false }, { text: "if i = 5 then", correct: false }]
    },
    {
        question: "How does a FOR loop start in JavaScript?",
        answers: [{ text: "for (i <= 5; i++)", correct: false }, { text: "for (let i = 0; i <= 5; i++)", correct: true }, { text: "for i = 1 to 5", correct: false }, { text: "for (let i = 0; i <= 5)", correct: false }]
    },
    {
        question: "How can you add a single-line comment in JavaScript?",
        answers: [{ text: "' This is a comment", correct: false }, { text: "", correct: false }, { text: "// This is a comment", correct: true }, { text: "/* This is a comment */", correct: false }]
    },
    {
        question: "What is the correct way to write a JavaScript array?",
        answers: [{ text: "let colors = ['red', 'green', 'blue']", correct: true }, { text: "let colors = (1:'red', 2:'green', 3:'blue')", correct: false }, { text: "let colors = 'red', 'green', 'blue'", correct: false }, { text: "let colors = {red, green, blue}", correct: false }]
    },
    {
        question: "How do you round the number 7.25 to the nearest integer in JavaScript?",
        answers: [{ text: "Math.rnd(7.25)", correct: false }, { text: "round(7.25)", correct: false }, { text: "Math.round(7.25)", correct: true }, { text: "Math.floor(7.25)", correct: false }]
    },
    {
        question: "Which operator is used to assign a value to a variable?",
        answers: [{ text: "*", correct: false }, { text: "-", correct: false }, { text: "x", correct: false }, { text: "=", correct: true }]
    },
    {
        question: "What will the following code return: Boolean(10 > 9)?",
        answers: [{ text: "NaN", correct: false }, { text: "false", correct: false }, { text: "true", correct: true }, { text: "undefined", correct: false }]
    },
    {
        question: "Which built-in JavaScript property returns the length of a string?",
        answers: [{ text: "length()", correct: false }, { text: "size()", correct: false }, { text: "index", correct: false }, { text: ".length", correct: true }]
    },
    {
        question: "Which keyword declares a block-scoped variable that cannot be reassigned?",
        answers: [{ text: "var", correct: false }, { text: "let", correct: false }, { text: "const", correct: true }, { text: "static", correct: false }]
    },
    {
        question: "What does DOM stand for in development framework modules?",
        answers: [{ text: "Data Object Mode", correct: false }, { text: "Document Object Model", correct: true }, { text: "Digital Option Matrix", correct: false }, { text: "Desktop Operational Management", correct: false }]
    },
    {
        question: "Which event occurs when a user clicks on an HTML element?",
        answers: [{ text: "onmouseover", correct: false }, { text: "onchange", correct: false }, { text: "onclick", correct: true }, { text: "onpress", correct: false }]
    },

    // === GIT & GENERAL WEB DEV QUESTIONS (41-50) ===
    {
        question: "Which Git command initialization creates a blank local repository?",
        answers: [{ text: "git start", correct: false }, { text: "git init", correct: true }, { text: "git create", correct: false }, { text: "git new", correct: false }]
    },
    {
        question: "What command stages all updated repository tracking changes in Git?",
        answers: [{ text: "git commit -a", correct: false }, { text: "git add .", correct: true }, { text: "git push", correct: false }, { text: "git save", correct: false }]
    },
    {
        question: "What does HTTP stand for?",
        answers: [{ text: "Hypertext Transfer Protocol", correct: true }, { text: "Hypertext Terminal Program", correct: false }, { text: "Hyperlink Transfer Process", correct: false }, { text: "Hosted Text Transfer Packet", correct: false }]
    },
    {
        question: "Which HTTP status code represents a completely successful server transaction response?",
        answers: [{ text: "404", correct: false }, { text: "500", correct: false }, { text: "200", correct: true }, { text: "301", correct: false }]
    },
    {
        question: "What does API stand for?",
        answers: [{ text: "Application Programming Interface", correct: true }, { text: "Applied Process Integration", correct: false }, { text: "Automated Program Information", correct: false }, { text: "Array Protocol Index", correct: false }]
    },
    {
        question: "What language data object format is standard for client-server payloads?",
        answers: [{ text: "JSON", correct: true }, { text: "XML", correct: false }, { text: "CSV", correct: false }, { text: "HTML", correct: false }]
    },
    {
        question: "What is the primary purpose of the 'viewport' meta tag in modern HTML templates?",
        answers: [{ text: "To increase rendering rendering benchmarks", correct: false }, { text: "To handle access authentication layers", correct: false }, { text: "To ensure proper adaptive scaling layout rules on mobile viewports", correct: true }, { text: "To record local search histories", correct: false }]
    },
    {
        question: "In CSS Flexbox layouts, which structural property explicitly handles horizontal alignment along the main axis?",
        answers: [{ text: "align-items", correct: false }, { text: "justify-content", correct: true }, { text: "flex-direction", correct: false }, { text: "align-content", correct: false }]
    },
    {
        question: "What does DNS stand for in server networking contexts?",
        answers: [{ text: "Data Network System", correct: false }, { text: "Domain Name System", correct: true }, { text: "Digital Name Server", correct: false }, { text: "Dynamic Network Service", correct: false }]
    },
    {
        question: "Which validation form parameter explicitly blocks submission flows unless data exists?",
        answers: [{ text: "validate", correct: false }, { text: "important", correct: false }, { text: "required", correct: true }, { text: "placeholder", correct: false }]
    }
];

let currentQuestionIndex = 0;
let score = 0;

// Gather UI Engine Elements
const questionElement = document.getElementById("question");
const answerButtonsElement = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");
const landingPageView = document.getElementById("landing-page-view");
const quizContainerView = document.getElementById("quiz-container-view");
const startGameBtn = document.getElementById("start-game-btn");
const navStartBtn = document.getElementById("nav-start-btn");

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
    if (feedbackMessage) feedbackMessage.classList.add("hide");function resetState() {
    nextButton.classList.add("hide");
    if (feedbackMessage) feedbackMessage.classList.add("hide"); // Hide message for new question
    while(answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild(answerButtonsElement.firstChild);
    }
}
    while(answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild(answerButtonsElement.firstChild);
    }
}

function selectAnswer(e) {
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    

    feedbackMessage.classList.remove("hide");
    
    if(isCorrect) {
        score++;
        selectedBtn.style.border = "5px solid #26890c"; 
        

        feedbackMessage.innerText = "✨ Correct! Awesome job!";
        feedbackMessage.className = "feedback-text correct"; 
    } else {
        selectedBtn.style.border = "5px solid #e21b3c"; 
        selectedBtn.style.opacity = "0.3"; 
        
        
        feedbackMessage.innerText = "❌ Oops! That's incorrect.";
        feedbackMessage.className = "feedback-text wrong";
    }
    
    Array.from(answerButtonsElement.children).forEach(button => {
        button.disabled = true;
        if (button.dataset.correct === "true") {
            button.style.opacity = "1"; 
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
        questionElement.innerHTML = `<div class='score-text'>🏆 Complete! 🏆</div>You scored ${score} out of ${questions.length}!`;
        nextButton.innerHTML = "Play Again";
        nextButton.classList.remove("hide");
        currentQuestionIndex = -1; 
    }
});

// Navigation Engine Controller Logic
function switchToQuizMode() {
    landingPageView.classList.add("hide");
    quizContainerView.classList.remove("hide");
    startQuiz(); // This systematically triggers the showQuestion loop
}

if (startGameBtn) startGameBtn.addEventListener("click", switchToQuizMode);
if (navStartBtn) navStartBtn.addEventListener("click", switchToQuizMode);