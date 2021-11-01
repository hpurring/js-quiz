var quizContainer = document.getElementById('quiz');
var submitButton = document.getElementById('submit');
var resultsContainer = document.getElementById('results');
var end = document.getElementById('endquiz');  
var questionIndex = 0;
var quizScore = 0;

var questions = [
    {
        question: "1. Inside which HTML element do we put the JavaScript?",
        answers: ["js", "scripting", "javascript", "script"],
        correctAnswer: "script"
    },

    {
        question: "2. What does event.preventDefault() do?",
        answers: ["It stops the browser from reloading the page upon a form submission.", "It stops the browser from allowing new events to occur.", "It causes the browser to exclude CSS stylings.", "It disables all media queries."],
        correctAnswer: "It stops the browser from reloading the page upon a form submission."
    },

    {
        question: "3. Which statement correctly stores data into the Web Storage API?",
        answers: ["localStorage.getItem('lunch, 'sandwich');", "localStorage.setItem('lunch, 'sandwich');", "getItem.localStorage('lunch, 'sandwich');", "setItem.localStorage('lunch, 'sandwich');"],
        correctAnswer: "localStorage.setItem('lunch, 'sandwich');"
    },

    {
        question: "4. Which of the following is NOT a reason to validate a user's responses?",
        answers: ["Offers the user an opportunity to enter a correct response.", "Reduces bogus answers getting stored in the database.", "Improves the user experience.", "Increases the overall quality of the user data."],
        correctAnswer: "Improves the user experience."
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
var timeLeft = 30;
function countdown() {
    var timeInterval = setInterval(function handleInterval() {
        if (timeLeft >= 1) {
            timeLeft = timeLeft - 1;
            timerEl.textContent = timeLeft;
        } else {
            function stopTimer() {
            clearInterval(timeInterval);
            timerEl.remove();
            }
        }
    }, 1000);
};


function getQuestion() {

    quizContainer.style = "";
    //this loop will go through all the answers from the first question initially as questionIndex being 0 
    

    var question = questions[questionIndex].question;
    var answers = questions[questionIndex].answers; 

    document.getElementById("question").textContent = question;
    var name = "radio";
    for (var opt in answers) {
        var radioEl = document.createElement("input");
        radioEl.type = "radio";          
        radioEl.value = answers[opt];
          radioEl.name = name;
          //document.body.appendChild(radioEl);
          document.getElementById("answers").appendChild(radioEl);
          var label = document.createElement("Label");
          label.innerHTML = answers[opt];
          //document.body.appendChild(label);
          document.getElementById("answers").appendChild(label);
          //document.body.appendChild(document.createElement("br"));
          linebreak = document.createElement("br");
          label.appendChild(linebreak);
          //document.body.appendChild(submitButton);
          document.getElementById("answers").appendChild(submitButton);
          
    
        submitButton.onclick = function() {
            document.getElementById("answers").innerHTML = "";
            if (quizContainer.style.display !== 'none') {
                quizContainer.style.display = 'none';
            };
            questionClick = function() {
                if (radioEl.value !== questions.correctAnswer) {
                    timeLeft -= 5;
                } else {
                    timeLeft += 5;
                }
                
                if (questionIndex < questions.length - 1) {
                    questionIndex += 1;
                    getQuestion();    
                } else if (timeLeft === 0) {
                    endQuiz();
                } else {
                    endQuiz();
                }
            };
           questionClick();          
        }; 
               
       
    };

};


function endQuiz() {
    timerEl.remove();
    if (end.style.display !== 'block') {
        end.style.display = 'block';
        document.getElementById("question").textContent = question;
        } else {
            end.style.display = 'none';
        };

    document.getElementById("finalscore").innerHTML = timeLeft;
    var endQuizSubmit = document.getElementById("endquizsubmit");
    var initials = document.getElementById("initials");
    endQuizSubmit.onclick = function() {
        localStorage.setItem("initials", initials.value);
        localStorage.setItem("score", timeLeft);
    };
};

var getHighScores = document.getElementById("get-high-scores");
var showScores = document.getElementById("highscores");
getHighScores.onclick = function() {
    if (showScores.style.display !== 'block') {
        showScores.style.display = 'block';
    } else {
        showScores.style.display = 'none';
    };
    if (welcome.style.display !== 'none') {
        welcome.style.display = 'none';
    } else {
        welcome.style.display = 'none';
    };
    if (end.style.display !== 'none') {
        end.style.display = 'none';
    } else {
        end.style.display = 'none';
    };

    var scoresList = localStorage.getItem("initials", "score");
    document.getElementById("scoreslist").innerHTML = scoresList;

    var newStartBtn = document.getElementById('new-start-btn');
    newStartBtn.onclick = function() {  
        if (showScores.style.display !== 'none') {
            showScores.style.display = 'none';
            countdown();
            getQuestion();
        } else {
            showScores.style.display = 'block';
        }
    };
};
        



startQuiz();