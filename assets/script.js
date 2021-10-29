var quizContainer = document.getElementById('quiz');
var submitButton = document.getElementById('submit');
var resultsContainer = document.getElementById('results');
var highScores = document.getElementById('highScores');

var questions = [
    {
        question: "1. Inside which HTML element do we put the JavaScript?",
        answers: ["js", "scripting", "javascript", "script"],
        correctAnswer: 4
    },

    {
        question: "2. What does event.preventDefault() do?",
        answers: ["It stops the browser from reloading the page upon a form submission.", "It stops the browser from allowing new events to occur.", "It causes the browser to exclude CSS stylings.", "It disables all media queries."],
        correctAnswer: 1
    },

    {
        question: "3. Which statement correctly stores data into the Web Storage API?",
        answers: ["localStorage.getItem('lunch, 'sandwich');", "localStorage.setItem('lunch, 'sandwich');", "getItem.localStorage('lunch, 'sandwich');", "setItem.localStorage('lunch, 'sandwich');"],
        correctAnswer: 2
    },

    {
        question: "4. Which of the following is NOT a reason to validate a user's responses?",
        answers: ["Offers the user an opportunity to enter a correct response.", "Reduces bogus answers getting stored in the database.", "Improves the user experience.", "Increases the overall quality of the user data."],
        correctAnswer: 3
    },
]

function startQuiz() {
    var welcome = document.getElementById('welcome');
    var startBtn = document.getElementById('start-btn');

    startBtn.onclick = function() {        
        if (welcome.style.display !== 'none') {
            welcome.style.display = 'none';
            countdown();
            getQuestion();
        } else {
            welcome.style.display = 'block';
        }
    };
}

var timerEl = document.getElementById('countdown');
function countdown() {
    var timeLeft = 30;
    var timeInterval = setInterval(function handleInterval() {
        if (timeLeft >= 1) {
            timeLeft = timeLeft - 1;
            timerEl.textContent = timeLeft;
        } else {
            function myStopFunction() {
            clearInterval(timeInterval);
            timerEl.remove();
            }
        }
    }, 1000);
}


function getQuestion() {
    

    for (var i = 0; i < questions.length; i++) {  
        var question = questions[i].question;
        var answers = questions[i].answers;   
        document.write(question);
        document.body.appendChild(document.createElement("br"));
        var name = "radio"+i; 
        for (var opt in answers) {
        var radioEl = document.createElement("input");
          radioEl.type = "radio";          
          radioEl.value = answers[opt];
          radioEl.name = name;
          document.body.appendChild(radioEl);
          var label = document.createElement("Label");
          label.innerHTML = answers[opt];
          document.body.appendChild(label);
          document.body.appendChild(document.createElement("br"));
        }

        var questionIndex = -1;

        if (questionIndex < (questions.length - 1)) {
            var nextButton = document.createElement("input");
            nextButton.type = "button";
            nextButton.value = "Next question";
            nextButton.addEventListener('click', getQuestion, questionClick);
            document.body.appendChild(nextButton);
           }

        document.body.appendChild(document.createElement("br"));
    
        }

    // }
    // grab questions array
    // set each of the choices with a forEach function 
    //     create button within forEach function
    //     set text content to choices in questions array
    //     add event listener to each of the choices questionClick
    // append to screen 

}

function questionClick() {
    if (userAnswer !== currentQuestion.correctAnswer) {
        timerEl - 5;
    }
};

startQuiz();