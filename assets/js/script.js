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
let timerContainer = document.getElementById('timer-container');
let answerButton = document.getElementById('answer-btn');
//introContainer.setAttribute = ('class', 'hidden');
let questionContent = document.getElementById('question-content');
let answersContainer= document.getElementById('answers-container');
let endgameContainer = document.getElementById('endgame-container');
let saveButton= document.getElementById('save-button');
let scoreContent= document.getElementById('score-content');
let inputName = document.getElementById('initials');
let scoresContainer= document.getElementById('scorescreen-container');
//questionContent.textContent = "test";
//my questions
let quizQuestions = [
    {
        question: "What keywords do you use to declare a variable in JavaScript?",
        answers: ["let", "const", "var", "all of the above"],
        correctAnswer: "all of the above"
    },
    {
        question:"Which operator compares both value and type of data?",
        answers: ["==", "!=", "===", "="],
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
        answers: ["let numbers=['1', '2']", "fhdfghf", "hdghg", "ghfhg"],
        correctAnswer: "let numbers=['1', '2']",
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
//timer function
let secondsLeft=60;
let timerContent = document.createElement('p');
timerContent.classList.add('timer--align')
function setTime() {
    let timerInterval = setInterval(function(){
        secondsLeft--;
        timerContainer.appendChild(timerContent).textContent = secondsLeft;

        if(secondsLeft === 0) {
            clearInterval(timerInterval);
            finalScreen();
            //function to end game, log and store score
            console.log("time's up");
        }
    }, 1000);
}

//function to start game

//Add event listener to start button, hides the intro
startButton.addEventListener("click", startGame);

//question varables
let currentQuestionI = 0;
let finalQuestion = quizQuestions.length;
let score=0;

//function to present questions
function questionCycle() {
    if (currentQuestionI === finalQuestion) {
        //end function for final score
        finalScreen();
        return;
    } else if (secondsLeft === 0) {
    //end function for final score
    clearInterval(timerInterval);
    finalScreen();
    } else {
    //function to iterate through question array
    answersContainer.innerHTML= "";
    let currentQuestion = quizQuestions[currentQuestionI];
    questionContent.textContent = currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        //answerButton.textContent = answer;
        let button = document.createElement('button');
        button.classList.add('answer-btn');
        button.textContent = answer;
        answersContainer.appendChild(button)
        

        button.addEventListener('click', function() {
            if (answer == currentQuestion.correctAnswer) {
                secondsLeft;
                score++;
                console.log("correct choice");
                console.log(score);
            } else {
                secondsLeft -= 10;
                score--;
                console.log("incorrect choice");
                console.log(score);
            }
            currentQuestionI++;
            questionCycle();
        })
    })

}}
console.log(score);
function startGame() {
    hideStartScreen()
    questionContainer.style.display = 'flex';
    //questionContainer.classList.remove('hidden');
    setTime();
    questionCycle();
    //timer to iterate through questions object/array (questionCycle)
}
function finalScreen() {
    questionContainer.style.display= 'none';
    endgameContainer.style.display= 'flex';
    localStorage.setItem('score', score);
    console.log("total score = " + score);
    scoreContent.textContent = "Your last saved score is " + localStorage.getItem('score') + " points!";
}

//console.log("total score = " + totalScore);
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