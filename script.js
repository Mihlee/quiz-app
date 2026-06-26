// ==========================================
// 1. DATA PACK: 30 CORE QUESTIONS WITH EXPLANATIONS
// ==========================================
const questions = [
    // === HTML QUESTIONS (1-10) ===
    {
        question: "What does HTML stand for?",
        answers: [
            { text: "Hyper Text Markup Language", correct: true },
            { text: "High Text Machine Language", correct: false },
            { text: "Hyperlink and Text Management Language", correct: false },
            { text: "Home Tool Markup Language", correct: false }
        ],
        explanation: "HTML stands for Hyper Text Markup Language. It is the standard markup language used to build the foundational layout structure of all web pages."
    },
    {
        question: "Which HTML element is used to define the most important heading?",
        answers: [
            { text: "<heading>", correct: false },
            { text: "<h6>", correct: false },
            { text: "<h1>", correct: true },
            { text: "<head>", correct: false }
        ],
        explanation: "The <h1> tag defines the highest level, most important heading on a web page. Search engines prioritize it to index the main subject of your layout."
    },
    {
        question: "What is the correct HTML element for inserting a line break?",
        answers: [
            { text: "<break>", correct: false },
            { text: "<lb>", correct: false },
            { text: "<br>", correct: true },
            { text: "<hr>", correct: false }
        ],
        explanation: "The <br> tag represents a line break. It is an empty element, meaning it does not require a matching closing tag."
    },
    {
        question: "Which attribute specifies alternative text for an image if it cannot be displayed?",
        answers: [
            { text: "title", correct: false },
            { text: "src", correct: false },
            { text: "alt", correct: true },
            { text: "link", correct: false }
        ],
        explanation: "The 'alt' attribute provides an alternative description. It helps visually impaired users via screen readers and shows up if an image fails to load."
    },
    {
        question: "What is the correct HTML for creating a hyperlink?",
        answers: [
            { text: "<a>http://google.com</a>", correct: false },
            { text: "<a href='http://google.com'>Google</a>", correct: true },
            { text: "<a name='http://google.com'>Google</a>", correct: false },
            { text: "<link src='http://google.com'>Google</link>", correct: false }
        ],
        explanation: "Hyperlinks use the anchor <a> tag with the 'href' (hypertext reference) attribute assigned to hold the target destination URL string."
    },
    {
        question: "Which character is used to indicate an end tag in HTML?",
        answers: [
            { text: "<", correct: false },
            { text: "*", correct: false },
            { text: "^", correct: false },
            { text: "/", correct: true }
        ],
        explanation: "A forward slash (/) is placed inside tag brackets right before the element name to form an explicit structural closing tag (like </div>)."
    },
    {
        question: "How do you create an ordered list in HTML?",
        answers: [
            { text: "<ul>", correct: false },
            { text: "<list>", correct: false },
            { text: "<ol>", correct: true },
            { text: "<dl>", correct: false }
        ],
        explanation: "An ordered (numbered) list uses the <ol> tag wrapper. Bulleted lists use the unordered <ul> tag wrapper instead."
    },
    {
        question: "Which HTML element is used to display a scalar measurement within a known range (like a gauge)?",
        answers: [
            { text: "<gauge>", correct: false },
            { text: "<range>", correct: false },
            { text: "<meter>", correct: true },
            { text: "<progress>", correct: false }
        ],
        explanation: "The <meter> tag defines a fractional scalar measurement within a static range. It is ideal for disk storage spaces or fuel gauges."
    },
    {
        question: "Which HTML5 element defines independent, self-contained content like a blog post?",
        answers: [
            { text: "<section>", correct: false },
            { text: "<div>", correct: false },
            { text: "<article>", correct: true },
            { text: "<aside>", correct: false }
        ],
        explanation: "The <article> element is a semantic component built for content that can stand completely on its own, like forum entries or newspaper articles."
    },
    {
        question: "Which HTML element defines navigation links?",
        answers: [
            { text: "<nav>", correct: true },
            { text: "<navigate>", correct: false },
            { text: "<links>", correct: false },
            { text: "<menu>", correct: false }
        ],
        explanation: "The semantic <nav> tag flags an primary section of links explicitly intended to guide visitors across core application routes."
    },

    // === CSS QUESTIONS (11-20) ===
    {
        question: "What does CSS stand for?",
        answers: [
            { text: "Creative Style Sheets", correct: false },
            { text: "Cascading Style Sheets", correct: true },
            { text: "Computer Style Sheets", correct: false },
            { text: "Colorful Style Sheets", correct: false }
        ],
        explanation: "CSS stands for Cascading Style Sheets. The 'Cascading' aspect means rules apply downwards from parents to children according to specificity weights."
    },
    {
        question: "Where in an HTML document is the correct place to refer to an external style sheet?",
        answers: [
            { text: "In the <head> section", correct: true },
            { text: "At the end of the document", correct: false },
            { text: "In the <body> section", correct: false },
            { text: "Inside the <html> tag", correct: false }
        ],
        explanation: "External style rules should be bound inside the document <head> wrapper using <link> tags so layout parameters resolve before elements print."
    },
    {
        question: "Which HTML tag is used to define an internal style sheet?",
        answers: [
            { text: "<css>", correct: false },
            { text: "<script>", correct: false },
            { text: "<style>", correct: true },
            { text: "<link>", correct: false }
        ],
        explanation: "Internal stylesheet blocks are authored directly within individual HTML pages using opening and closing <style> element containers."
    },
    {
        question: "Which CSS property changes the background color of an element?",
        answers: [
            { text: "color", correct: false },
            { text: "bgcolor", correct: false },
            { text: "background-color", correct: true },
            { text: "surface-color", correct: false }
        ],
        explanation: "The 'background-color' property sets an element's backdrop color. The plain 'color' property alters text character colors instead."
    },
    {
        question: "How do you select an element with the id 'header' in CSS?",
        answers: [
            { text: ".header", correct: false },
            { text: "#header", correct: true },
            { text: "header", correct: false },
            { text: "*header", correct: false }
        ],
        explanation: "In CSS syntax, a hashtag (#) targets unique element ID matches, whereas a dot (.) maps elements grouped under a shared class attribute."
    },
    {
        question: "How do you select elements with the class name 'test' in CSS?",
        answers: [
            { text: "#test", correct: false },
            { text: "test", correct: false },
            { text: ".test", correct: true },
            { text: "*test", correct: false }
        ],
        explanation: "The period dot (.) selector finds elements containing that matching class name globally across your document markup tree."
    },
    {
        question: "Which CSS property controls the text size?",
        answers: [
            { text: "text-style", correct: false },
            { text: "text-size", correct: false },
            { text: "font-size", correct: true },
            { text: "font-weight", correct: false }
        ],
        explanation: "The 'font-size' property adjusts the scale of text. It accepts values in units like pixels (px), ems (em), or responsive rems."
    },
    {
        question: "What is the correct CSS property to make text bold?",
        answers: [
            { text: "font-weight: bold;", correct: true },
            { text: "text-style: bold;", correct: false },
            { text: "font: bold;", correct: false },
            { text: "style: bold;", correct: false }
        ],
        explanation: "To alter character thickness, use 'font-weight'. Assigning it to 'bold' changes standard character strokes to a thicker layout variant."
    },
    {
        question: "Which CSS property controls the space between the element's border and its inner content?",
        answers: [
            { text: "margin", correct: false },
            { text: "padding", correct: true },
            { text: "border-spacing", correct: false },
            { text: "spacer", correct: false }
        ],
        explanation: "Per the CSS Box Model, 'padding' defines the inner space between text content and its bounding border. 'margin' handles blank gaps *outside* borders."
    },
    {
        question: "What is the default value of the position property in CSS?",
        answers: [
            { text: "relative", correct: false },
            { text: "absolute", correct: false },
            { text: "static", correct: true },
            { text: "fixed", correct: false }
        ],
        explanation: "All layout markup defaults to a position of 'static'. Content flows exactly as it is ordered within the HTML document sequence."
    },

    // === JAVASCRIPT QUESTIONS (21-30) ===
    {
        question: "Inside which HTML element do we put JavaScript code?",
        answers: [
            { text: "<js>", correct: false },
            { text: "<javascript>", correct: false },
            { text: "<script>", correct: true },
            { text: "<code>", correct: false }
        ],
        explanation: "The <script> tag handles client-side script code execution. It can hold logic lines directly or point to external asset files."
    },
    {
        question: "How do you write 'Hello World' in an alert box using JavaScript?",
        answers: [
            { text: "msgBox('Hello World');", correct: false },
            { text: "alert('Hello World');", correct: true },
            { text: "msg('Hello World');", correct: false },
            { text: "alertBox('Hello World');", correct: false }
        ],
        explanation: "The built-in global window routine 'alert()' triggers a basic browser message popup block overlay containing your string parameter."
    },
    {
        question: "How do you create a function in JavaScript?",
        answers: [
            { text: "function myFunction()", correct: true },
            { text: "function:myFunction()", correct: false },
            { text: "create myFunction()", correct: false },
            { text: "def myFunction()", correct: false }
        ],
        explanation: "Functions are declared using the 'function' keyword, followed by a unique task name string and parameter tracking parenthesis lines."
    },
    {
        question: "How do you call a function named 'myFunction'?",
        answers: [
            { text: "call myFunction();", correct: false },
            { text: "myFunction();", correct: true },
            { text: "execute myFunction();", correct: false },
            { text: "run myFunction();", correct: false }
        ],
        explanation: "To invoke an established logical container routine, state its exact name string followed immediately by execution parenthesis lines."
    },
    {
        question: "How do you write an IF statement in JavaScript?",
        answers: [
            { text: "if i == 5 then", correct: false },
            { text: "if (i == 5)", correct: true },
            { text: "if i = 5", correct: false },
            { text: "if i = 5 then", correct: false }
        ],
        explanation: "Conditional execution flows test boolean evaluation equations encapsulated within round tracking brackets: `if (condition)`."
    },
    {
        question: "How does a FOR loop start in JavaScript?",
        answers: [
            { text: "for (i <= 5; i++)", correct: false },
            { text: "for (let i = 0; i <= 5; i++)", correct: true },
            { text: "for i = 1 to 5", correct: false },
            { text: "for (let i = 0; i <= 5)", correct: false }
        ],
        explanation: "Standard counting loops manage parameter scopes using initialization variables, loop runtime constraints, and increment updates: `for(let i=0; i<=5; i++)`."
    },
    {
        question: "How can you add a single-line comment in JavaScript?",
        answers: [
            { text: "' This is a comment", correct: false },
            { text: "", correct: false },
            { text: "// This is a comment", correct: true },
            { text: "/* This is a comment */", correct: false }
        ],
        explanation: "Two forward slash characters (`//`) command compilation engines to fully overlook text configurations following them on that explicit line."
    },
    {
        question: "What is the correct way to write a JavaScript array?",
        answers: [
            { text: "let colors = ['red', 'green', 'blue']", correct: true },
            { text: "let colors = (1:'red', 2:'green', 3:'blue')", correct: false },
            { text: "let colors = 'red', 'green', 'blue'", correct: false },
            { text: "let colors = {red, green, blue}", correct: false }
        ],
        explanation: "Arrays organize ordered list indexes inside square literal brackets `[]` with each value entry split by a comma separator."
    },
    {
        question: "Which operator is used to assign a value to a variable?",
        answers: [
            { text: "*", correct: false },
            { text: "-", correct: false },
            { text: "x", correct: false },
            { text: "=", correct: true }
        ],
        explanation: "A single equals sign (`=`) acts as the value assignment operator. Comparison checks require double (`==`) or triple (`===`) equals signs instead."
    },
    {
        question: "Which keyword declares a block-scoped variable that cannot be reassigned?",
        answers: [
            { text: "var", correct: false },
            { text: "let", correct: false },
            { text: "const", correct: true },
            { text: "static", correct: false }
        ],
        explanation: "The constant keyword (`const`) bounds variable pointers securely inside explicit execution contexts, preventing accidental variable reassignments."
    }
];

// ==========================================
// 2. STATE & ENGINE ELEMENT DEFINITIONS
// ==========================================
let currentQuestionIndex = 0;
let score = 0;

let questionElement;
let answerButtonsElement;
let nextButton;
let landingPageView;
let quizContainerView;
let feedbackMessage;
let homeLogoBtn; // Added target tracking variable

function initializeHTMLElements() {
    questionElement = document.getElementById("question");
    answerButtonsElement = document.getElementById("answer-buttons");
    nextButton = document.getElementById("next-btn");
    landingPageView = document.getElementById("landing-page-view");
    quizContainerView = document.getElementById("quiz-container-view");
    feedbackMessage = document.getElementById("feedback-message");
    homeLogoBtn = document.getElementById("home-logo-btn"); // Link the home title button

    if (nextButton) {
        nextButton.replaceWith(nextButton.cloneNode(true)); 
        nextButton = document.getElementById("next-btn"); 
        nextButton.addEventListener("click", handleNextButtonClick);
    }

    // Attach click handler to the home icon title to jump back instantly
    if (homeLogoBtn) {
        homeLogoBtn.addEventListener("click", returnToHomePage);
    }
}

// ==========================================
// 3. CORE QUIZ ENGINE LOGIC
// ==========================================
function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    if (nextButton) nextButton.innerHTML = "Next Question";
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
    if (nextButton) nextButton.classList.add("hide");
    if (feedbackMessage) feedbackMessage.classList.add("hide");
    while(answerButtonsElement && answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild(answerButtonsElement.firstChild);
    }
}

function selectAnswer(e) {
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    const currentQuestion = questions[currentQuestionIndex];
    
    if (feedbackMessage) {
        feedbackMessage.classList.remove("hide");
    }
    
    if(isCorrect) {
        score++;
        selectedBtn.style.border = "5px solid #26890c"; 
        if (feedbackMessage) {
            feedbackMessage.innerHTML = `
                <div style="font-size: 20px; font-weight: bold; color: #26890c; margin-bottom: 4px; text-transform: none; letter-spacing: normal;">✨ Correct! Awesome job!</div>
            `;
            feedbackMessage.className = "feedback-text correct";
        }
    } else {
        selectedBtn.style.border = "5px solid #e21b3c"; 
        selectedBtn.style.opacity = "0.3"; 
        
        const correctAnswerObj = currentQuestion.answers.find(ans => ans.correct === true);
        
        if (feedbackMessage) {
            const safeAnswerText = correctAnswerObj.text.replace(/</g, "&lt;").replace(/>/g, "&gt;");
            const safeExplanation = currentQuestion.explanation.replace(/</g, "&lt;").replace(/>/g, "&gt;");

            feedbackMessage.innerHTML = `
                <div style="font-size: 20px; font-weight: bold; color: #e21b3c; margin-bottom: 4px; text-transform: none; letter-spacing: normal;">❌ Incorrect</div>
                <div style="font-size: 16px; font-weight: bold; color: #333; margin-bottom: 10px; text-transform: none; letter-spacing: normal;">
                    Correct Answer: <span style="color: #26890c; background-color: #e6f4ea; padding: 3px 8px; border-radius: 4px; font-weight: bold; display: inline-block;">${safeAnswerText}</span>
                </div>
                <p style="font-size: 14px; font-weight: normal; color: #555; line-height: 1.5; max-width: 600px; margin: 0 auto; text-transform: none; letter-spacing: normal;">
                    ${safeExplanation}
                </p>
            `;
            feedbackMessage.className = "feedback-text wrong";
        }
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
    
    if (nextButton) nextButton.classList.remove("hide");
}

// ==========================================
// 4. ACTION LISTENERS & SCREEN MANAGER
// ==========================================
function handleNextButtonClick() {
    currentQuestionIndex++;
    
    if (currentQuestionIndex < questions.length && currentQuestionIndex >= 0) {
        showQuestion();
    } else {
        resetState();
        questionElement.innerHTML = `
            <div class='score-text' style="font-size: 26px; font-weight: bold; margin-bottom: 15px;">🏆 Complete! 🏆</div>
            <div style="font-size: 18px; margin-bottom: 10px;">You scored <b>${score}</b> out of ${questions.length}!</div>
            <div style="font-size: 16px; color: #555; margin-top: 15px;">Thanks for playing 🏠 <b>DevQUIZ</b>!</div>
        `;
        nextButton.innerHTML = "Play Again";
        nextButton.classList.remove("hide");
        currentQuestionIndex = -1; 
    }
}

// New handler to cleanly drop the active quiz states and flip back to home
function returnToHomePage() {
    resetState();
    if (landingPageView && quizContainerView) {
        quizContainerView.classList.add("hide");
        landingPageView.classList.remove("hide");
    }
}

function switchToQuizMode() {
    initializeHTMLElements(); 
    
    if (landingPageView && quizContainerView) {
        landingPageView.classList.add("hide");
        quizContainerView.classList.remove("hide");
        startQuiz(); 
    }
}

window.addEventListener("DOMContentLoaded", () => {
    // Make sure elements lock target parameters early for smooth navigation flows
    initializeHTMLElements();

    const startBtn = document.getElementById("start-game-btn");
    const topNavBtn = document.getElementById("nav-start-btn");
    
    if (startBtn) startBtn.addEventListener("click", switchToQuizMode);
    if (topNavBtn) topNavBtn.addEventListener("click", switchToQuizMode);
});