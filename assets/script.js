// Here, are declared all the HTML objects.
const welcomeBox = document.querySelector(".welcome");
const quizZone = document.querySelector(".quizone");
const timerBox = document.querySelector(".timer");
const timer = document.querySelector(".time");
const startBtn = document.getElementById("startBtn");
const question = document.querySelector(".question");
const answer = document.querySelectorAll(".answer");
const confirmTrue = document.querySelector(".confirmTrue");
const confirmFalse = document.querySelector(".confirmFalse");
const scoreBox = document.querySelector(".scoreBox");
const scoreNum = document.querySelector(".scoreNum");
const scoreBonus = document.querySelector(".scoreSum");
const timesUp = document.querySelector(".timesUp");
const finish = document.querySelector(".finish");
const newScore = document.querySelector(".newScore");
const finishBtn = document.querySelector("#finishBtn");
const playerNameInput = document.querySelector("#userName");
const alert = document.querySelector(".alert");
const hsLink = document.querySelector(".highscores");
const hsBox = document.querySelector(".hsBox");
const resetHSBtn = document.querySelector("#resetHSBtn")
const newHSmsg = document.querySelector(".newHS")

// The following are the parameter and rules of the game. Both the timer and question length of the game are declared here.
// The other lets are esencial for the functionality of the game, and not meant to be edited. 
let timeLeft = 10; // Editable.
timer.innerHTML = timeLeft.toFixed(2);
let questNum = 0;
let score = 0;
scoreNum.innerHTML = score;
let quizLength = 10; // Editable.
let bonusBase = 0;
let playerName = "";
// This first highscore is declared before any function of the code, so that ROD's highscore acts as a benchmark for new players.  
let highScores = [{ p: "ROD", s: 20000 }]; // Editable.

// The following array is the for the Q&As of the game.
const QandAs = [
    {
        q: "Arrays in JavaScript can be used to store _____.",
        a: [
            { text: "Numbers and strings.", correct: false },
            { text: "Objects.", correct: false },
            { text: "Booleans.", correct: false },
            { text: "All of the above.", correct: true }
        ]
    }, {
        q: "The condition in an if / else statement is enclosed within _____.",
        a: [
            { text: "Quotes.", correct: false },
            { text: "Curly brackets.", correct: false },
            { text: "Parentheses.", correct: true },
            { text: "Square brackets.", correct: false }
        ]
    }, {
        q: "The keywords to declare a variable in JavaScript is ______.",
        a: [
            { text: "variable", correct: false },
            { text: "var", correct: true },
            { text: "let", correct: true },
            { text: "const", correct: false }
        ]
    }, {
        q: "What is the correct tag for defining a link in HTML?",
        a: [
            { text: "a", correct: true },
            { text: "p", correct: false },
            { text: "link", correct: false },
            { text: "li", correct: false }
        ]
    }, {
        q: "In CSS: which is the correct property used to change the background color?",
        a: [
            { text: "background:", correct: false },
            { text: "text-color:", correct: false },
            { text: "color:", correct: false },
            { text: "background-color:", correct: true }
        ]
    }, {
        q: "Which function is used to display a message in the console in JS?",
        a: [
            { text: "console.log()", correct: true },
            { text: "alert()", correct: false },
            { text: "document.write()", correct: false },
            { text: "print()", correct: false }
        ]
    }, {
        q: "Which HTML tag is used to create an unordered list?",
        a: [
            { text: "li", correct: false },
            { text: "ol", correct: false },
            { text: "ul", correct: true },
            { text: "list", correct: false }
        ]
    }, {
        q: "Which is the correct way to comment in JavaScript?",
        a: [
            { text: "/ This is a comment", correct: false },
            { text: "/* This is a comment */", correct: false },
            { text: "// This is a comment", correct: true },
            { text: "comment : This is a comment", correct: false }
        ]
    }, {
        q: "What's the main purpose of an external CSS file?",
        a: [
            { text: "To define the content of the page.", correct: false },
            { text: "To change the style of the page.", correct: true },
            { text: "To add interactivity to the page.", correct: false },
            { text: "None of the above.", correct: false }
        ]
    }, {
        q: "How do you get the length of a string in JavaScript?",
        a: [
            { text: "length()", correct: false },
            { text: "count()", correct: false },
            { text: "size()", correct: false },
            { text: ".length", correct: true }
        ]
    }, {
        q: "Which HTML tag is used to define a table?",
        a: [
            { text: "table", correct: true },
            { text: "tb", correct: false },
            { text: "t", correct: false },
            { text: "tbl", correct: false }
        ]
    }, {
        q: "Which CSS property is used to set the font size of an element?",
        a: [
            { text: "text-size:", correct: false },
            { text: "size:", correct: false },
            { text: "font-size:", correct: true },
            { text: "font-style:", correct: false }
        ]
    }, {
        q: "We execute a function after a certain delay with _______ in JavaScript?",
        a: [
            { text: "setTimeout()", correct: true },
            { text: "setInterval()", correct: false },
            { text: "setDelay()", correct: false },
            { text: "setTimer()", correct: false }
        ]
    }, {
        q: "In HTML, I use _______ to highlight my text in bold.",
        a: [
            { text: "strong", correct: true },
            { text: "bold", correct: false },
            { text: "bld", correct: false },
            { text: "b", correct: true }
        ]
    }, {
        q: "Which of the following keywords is used to create a function in JavaScript?",
        a: [
            { text: "function", correct: true },
            { text: "func", correct: false },
            { text: "for", correct: false },
            { text: "define", correct: false }
        ]
    }, {
        q: "Which of the following is used to select an element by id in JavaScript?",
        a: [
            { text: "getElementsByClass()", correct: false },
            { text: "getElementById()", correct: true },
            { text: "getElementsByTagName()", correct: false },
            { text: "querySelector()", correct: false }
        ]
    }, {
        q: "Which tag is used in HTML to add an image?",
        a: [
            { text: "image:", correct: false },
            { text: "img", correct: true },
            { text: "i", correct: false },
            { text: "photo", correct: false }
        ]
    }, {
        q: "How to change the HTML content of an element in JavaScript?",
        a: [
            { text: ".innerText", correct: false },
            { text: ".textContent", correct: false },
            { text: ".innerHTML", correct: true },
            { text: ".contentHTML", correct: false }
        ]
    }, {
        q: "Which CSS property is used to set the inner margin of an element?",
        a: [
            { text: "padding:", correct: true },
            { text: "margin:", correct: false },
            { text: "inner-margin:", correct: false },
            { text: "border:", correct: false }
        ]
    }, {
        q: "Which of the following is used to stop event propagation in JavaScript?",
        a: [
            { text: "event.stopPropagation()", correct: true },
            { text: "event.preventDefault()", correct: false },
            { text: "event.stopEvent()", correct: false },
            { text: "event.cancelEvent()", correct: false }
        ]
    }, {
        q: "Which HTML tag is used to create a level 1 heading?",
        a: [
            { text: "heading", correct: false },
            { text: "header", correct: false },
            { text: "head", correct: false },
            { text: "h1", correct: true }
        ]
    }, {
        q: "The decent way to add a comment in CSS is ____.",
        a: [
            { text: "/* This is a comment", correct: false },
            { text: "/* This is a comment */", correct: true },
            { text: "// This is a comment", correct: false },
            { text: "comment : This is a comment", correct: false }
        ]
    }, {
        q: "What's the main purpose of an external JS file?",
        a: [
            { text: "To define the content of the page.", correct: false },
            { text: "To change the style of the page.", correct: false },
            { text: "To add interactivity to the page.", correct: true },
            { text: "None of the above.", correct: false }
        ]
    }
];

// The following func, is to set the first highscore in the local storage (ROD's highscore).
// If the local storage is already full, it will udate the existent local highscores in the code.
const getHS = () => {
    if (localStorage.getItem("highscores") === null) {
        localStorage.setItem("highscores", JSON.stringify(highScores));

    } else {
        highScores = JSON.parse(localStorage.getItem("highscores"));
        highScores.sort((a, b) => b.s - a.s)
    };
};

// This func, renders the highscores on the highscores section.
const renderHS = () => {
    highScores.splice(10);

    for (i = 0; i < highScores.length; i++) {
        hsBox.appendChild(document.createElement("p"));
        hsBox.children[i + 2].innerHTML = `${highScores[i].p} ➖ ${highScores[i].s}`
    }
};

// The following line creates a new array of the sorted Q&As, so that the order will always be different.
let qandaSorted = QandAs.sort(() => Math.random() - .5);

// This one calls for the interval function that runs the timer of the game.
function countdown() {

    let counter = setInterval(function () {
        // The timer changes each .01 seconds, and each execution takes away that same amount from the timer, that displays 2 decimal digits.
        timeLeft -= .01;
        timer.innerHTML = timeLeft.toFixed(2);

        // The following lines change the adds or removes a class that changes the background color to red when there are less than 5 seconds left.
        if(timeLeft <= 5) {
            timerBox.classList.add("timeLow");
        } else {
            timerBox.classList.remove("timeLow");
        }
        
        // The following, stops the timer if all the questions are answered.
        if (questNum >= quizLength) {
            clearInterval(counter);
        };

        // This last part, stops the timer when it gets to 0 and calls the game ender function.
        // It also shows the message "TIME'S UP" by taking away the "hide" class from the HTML element.
        if(timeLeft <= 0) {
            clearInterval(counter);
            quizZone.classList.add("hide");
            timesUp.classList.remove("hide");
            setTimeout(gameEnd, 4000)
        };
    }, 10);
};

// This function, adds bonus points to the score for each second left in the timer if sll the questions are answered.
function bonusFunc() {
    // The bonus base is a multiplier that changes depending on the number of correct answers by the player.
    // The more right answers, the higher the bonus multiplier will be.
    // The bonus will be displayed on the UI with green numbers, by removing the "hide" class. 
    scoreBonus.classList.remove("hide");
    let bonusPoints = 0;
    scoreBonus.innerHTML = `+${bonusPoints}`;

    // Each loop of the interval, will reduce the timer and add bonus points until the timer gets to 0.
    let counter = setInterval(function () {
        
        if (timeLeft > 0) {
            timeLeft -= .1;
            timer.innerHTML = timeLeft.toFixed(2);
            bonusPoints += bonusBase*3;
            scoreBonus.innerHTML = `+${bonusPoints}`;
            score += bonusBase*3;
            scoreNum.innerHTML = score;
        };

        // After the time is depleated and the bonus points counted, the game ender function will be called after 4 seconds, to give the user time to read what's happening.
        if(timeLeft <= 0) {
            timeLeft = 0;
            timer.innerHTML = timeLeft.toFixed(2);
            clearInterval(counter);
            setTimeout(gameEnd, 4000);
        };
    }, 1);
};

// This bit, saves the new score in local storage.
const setNewHS = () => {
    let newScore = { p: playerName, s: score };
    highScores.push(newScore);
    highScores.sort((a, b) => b.s - a.s);
    localStorage.setItem("highscores", JSON.stringify(highScores));
};

// This function shows the highscores, after being called by a click on the highscores link.
// It also adds an event listener to the same link, so that it takes you back to home screen.
const openHS = () => {
    finish.classList.add("hide");
    welcomeBox.classList.add("hide");
    hsLink.innerHTML = "RETURN";
    hsBox.classList.remove("hide");
    hsLink.removeEventListener("click", openHS);
    hsLink.addEventListener("click", () => location.reload());
};

// This will again, reset the highscores by removing all the children <p> from the document and reseting the local storage with the default ROD's highscore. 
const resetHS = () => {
    highScores = [{ p: "ROD", s: 20000 }];
    localStorage.setItem("highscores", JSON.stringify(highScores));

    for (i = 2; i < hsBox.children.length; i++) {
        hsBox.children[i].remove();
    };
    
    renderHS();
};

// This is the game ender func, it will show and hide all the elements necesary so the the final score, the button to play again and the highscores link will be the only thing on the display.
const gameEnd = () => {
    hsLink.classList.remove("hidden");
    scoreBox.classList.add("hide");
    timerBox.classList.add("hidden");
    timerBox.classList.remove("timeLow");
    timerBox.innerHTML = timeLeft.toFixed(2);
    timesUp.classList.add("hide");
    finish.classList.remove("hide");
    newScore.innerHTML = score;

    // If the user achieves the highest score, a message will display.
    if (score > highScores[0].s) {
        newHSmsg.classList.remove("hide");
    }

    // This lines update the highscores and render them in the hs section.
    setNewHS();
    renderHS();
};

// This function renders new Q&As each time it's called. The n will be fed by the number of questions answered.
const renderQandAs = (n) => {
    question.innerHTML = qandaSorted[n].q
    

    for (i = 0; i < 4; i++) {
        answer[i].innerHTML = `☛ ${qandaSorted[n].a[i].text}`
        answer[i].dataset.truth = qandaSorted[n].a[i].correct
    };
};

// This function is called everytime a question is answered, so that you can't hover over the answers.
const hoverOff = () => {
    for (i = 0; i < 4; i++) {
        answer[i].classList.remove("active");
    }
};

// This function is called after the quiz is over by answering all the questions, to execute the bonus func. 
const gameClear = () => {
    quizZone.classList.add("hide");
    bonusFunc();
};

// The following will eavaluate the truthfullness of the answers, and it's called by a click event at each answer. 
const evaluator = (e) => {
    let attempt = e.target
    let result = attempt.dataset.truth
    // Each click in an answer whether it's true or false, will add to the number of questions counter.
    // The questNum is used by the timer counter, the renderQandAs func, and the evaluator to determine which question follows, and wether to end the game or keep going.
    questNum++;
    
    // This true part: adds points to the score; calls for the hoverOff func; adds +1 to the bonus base, so that the bonus can be calculated based on the num of correct answers; and removes event listeners for all the answers.
    if (result == 'true') {
        attempt.classList.add("correct");
        confirmTrue.classList.remove("hide");
        hoverOff();
        timeLeft += 5;
        score += 1000;
        bonusBase ++;
        scoreNum.innerHTML = score;
        
        for (i = 0; i < 4; i++) {
            answer[i].removeEventListener("click", evaluator);
        };
        
        // This helps to animate the bonus time "+5s" that appears each time you hit the right answer. 
        attempt.nextSibling.classList.remove("hidden");
        setTimeout(attempt.nextSibling.classList.add("hit"), 100);
        
        // This bit calls to end the game after 1 second if the last question of the quiz is answered. 
        if (questNum == quizLength) {
            setTimeout(gameClear, 1000);
        };
        
        // Calls for the next question.
        setTimeout(nextQuest, 1000);
    
        // This is what happens when you hit the wrong answer.
    } else {
        // It will display a message that it's wrong, it will change the color of the answer to red, and display the right answer in gray.
        attempt.classList.add("wrong");
        confirmFalse.classList.remove("hide");
        document.querySelector('[data-truth="true"]').classList.add("feedback");
        hoverOff();
        
        for (i = 0; i < 4; i++) {
            answer[i].removeEventListener("click", evaluator);
        };

        // Calls for the next question.
        setTimeout(nextQuest, 1000);
    };
};

// The most importan of this function is that it resets the properties for all the HTML elements, so that the next question can be clickable and all the animations are functional again.
// This also will render the next question and add the click events to each answer.
let nextQuest = () => {
    renderQandAs(questNum);

    for (i = 0; i < 4; i++) {
        answer[i].classList.remove("correct");
        answer[i].classList.remove("wrong");
        answer[i].classList.remove("feedback");
        answer[i].addEventListener("click", evaluator);
        answer[i].classList.add("active");
        answer[i].nextSibling.classList.remove("bonus");
        answer[i].nextSibling.classList.add("hidden");
        answer[i].nextSibling.classList.remove("hit");
        answer[i].nextSibling.classList.add("bonus");
    };

    confirmTrue.classList.add("hide");
    confirmFalse.classList.add("hide");
};

// The following starts the timer and renders the whole quiz interface.
const startGame = () => {
    // When the player doesn't provide a valid name, it will display a message and prevent the quiz to begin.
    if (playerNameInput.value == "") {
        alert.classList.remove("hidden");
        
    } else {
        hsLink.classList.add("hidden")
        welcomeBox.classList.add("hide");
        quizZone.classList.remove("hide");
        timerBox.classList.remove("hidden");
        scoreBox.classList.remove("hide");
        countdown();
        playerName = playerNameInput.value
    
        renderQandAs(questNum);
    
        for (i = 0; i < 4; i++) {
            answer[i].addEventListener("click", evaluator);
        }
    };
};

// All this activates the basic functionalities of the site.
getHS();
renderHS();

startBtn.addEventListener("click", startGame);
hsLink.addEventListener("click", openHS);
resetHSBtn.addEventListener("click", resetHS);
finishBtn.addEventListener("click", () => location.reload()); // When hiting the "GO AGAIN" button at the end of each game, the site reloads to the home page. 