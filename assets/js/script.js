//
//my selector variables
let intro= document.getElementById('intro');
console.log('intro:' + intro);
let introBlurb = document.querySelector('.intro--blurb');
//introBlurb.setAttribute = ['class', 'hidden'];
//introBlurb.classList.add('hidden');
let startButton = document.getElementById('start-btn');
startButton.textContent= 'Start';
startButton.style.color= 'white';
let questionContainer = document.getElementById('question-container');
//let introContainer = intro.childNodes;
let introContainer = intro.children;
console.log('introContainer: ' + introContainer);

//introContainer.setAttribute = ('class', 'hidden');

//my questions
let quizQuestions = [
    {
        question: "What keywords do you use to declare a variable in JavaScript?",
        answers: ["let", "const", "var", "all of the above"],
        correctAnswer: "all of the above"
    },
    {
        question:"Which operator compares both value and type of data?",
        answers: ["==", "", "===", ""],
        correctAnswer: "==="
    },
    {
        question:"Which HTML element is used to link the JavaScript file?",
        answers: ["<js>", "<javascript>", "<script>", "none of the above"],
        correctAnswer: "<script>"
    },
    {
        question: "How do you add a comment in JavaScript",
        answers: ["//comment", "'comment'", "<comment>", "<!--comment--!>"],
        correctAnswer: "//comment"
    },
    {
        question: "How do you write an array?",
        answers: ["let numbers=['1', '2']", "", "", ""],
        correctAnswer: "",
    }
]

//Function to hide the introduction screen
function hideStartScreen() {
    //intro.classList.add('hidden');
    intro.style.display = 'none';
    for(var i=0; i<introContainer.length; i++) {
         //introContainer[i].style.display = 'none';
         //introContainer[i].setAttribute = ['class', 'hidden'];
         introContainer[i].classList.add('hidden');
}
}
function startGame() {
    hideStartScreen()
    questionContainer.classList.remove('hidden');
}
//Add event listener to start button, hides the intro
startButton.addEventListener("click", startGame);
//start button > timer starts (visual in right corner)
// start button -- code that shows first question
//timer made with setInterval?

// present question, generate content to represent answer / maybe score?
//questions in array? iterate through questions
// upon answer, give next question
//if incorrect, subtract time from clock as penalty
//if there are still questions, else statement

//when all questions are answered or the timer runs out,


// the game is over and initials can be logged to save high score
//save to local storage and print to page?
//button to return to start