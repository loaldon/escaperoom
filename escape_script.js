$("#difficulty").html("Difficulty: " + difficulty);
$("#theme").html("Theme: " + theme);

//Stores the number of hints used per question.
let hints = 0;
//Array that stores all upcoming questions.
let questions = ["question 1", "question 2", "question 3", "question 4", "question 5", "question 6", "question 7", "question 8", "question 9", "question 10"];
//Stores the current question.
let currentQuestion = "";

//Set questions depending on theme
//TODO: Actually make this work
if (theme === 1) {
    //theme is Hacker
    console.log(questions);
} else if (theme === 2) {
    //theme is Time
    console.log(questions);
} else if (theme === 3) {
    //theme is AI Lab
    console.log(questions);
}

//Save the hint button to a variable for easy access.
let hintButton = $("#hint");
hintButton.on('click', sendHint);

//Initialize quiz
updateQuestions();

//When form is submitted, run code.
//TODO: Make it check answers to see if they're correct.
function answerQuestion() {
    event.preventDefault();
    resetHints();
    updateQuestions();
}

//Updates the hint button to reflect the number of hints used
//and makes it stop working when all hints are used.
function updateHints(value) {
    hints = value;
    if (value === 0) {
        hintButton.text("Hint 1/3");
    }else if (value === 1) {
        hintButton.text("Hint 2/3");
    } else if (value === 2) {
        hintButton.text("Hint 3/3");
    } else {
        hintButton.text("Out of hints!");
        hintButton.attr("disabled", true);
    }
}
//Actually sends a hint.
//TODO: Make hints actually apply to questions. Use ChatGPT because that's a requirement.
function sendHint() {
    let target = $("#show-hint");
    updateHints(hints + 1);
    target.text("Hint " + hints + " shown!");
}
//Resets the hint system.
function resetHints() {
    let target = $("#show-hint");
    target.text("");
    hintButton.removeAttr("disabled");
    updateHints(0);
}
//Moves on to the next question. Previous question is lost.
function updateQuestions() {
    if (questions.length !== 0) {
        currentQuestion = questions.shift();
        $("#question-desc").html(currentQuestion);
    } else {
        window.location.href="completion.html";
    }
    updateAnswers();
}
//Sets answers to correspond to questions.
function updateAnswers() {
    let target = $("#answer");
    let output = "";
    if (difficulty === 1) {
        output = "<input type=\"radio\" name='answer' id='answer1' value='answer1'/> <label for='answer1'>Answer 1</label><br>";
        output += "<input type=\"radio\" name='answer' id='answer2' value='answer2'/> <label for='answer2'>Answer 2</label><br>";
        output += "<input type=\"radio\" name='answer' id='answer3' value='answer3'/> <label for='answer3'>Answer 3</label><br>";
        output += "<input type=\"radio\" name='answer' id='answer4' value='answer4'/> <label for='answer4'>Answer 4</label><br>";
    } else if (difficulty === 2) {
        output = "<label for='answer'>Fill in </label> <input type='text' name='answer'> <label for='answer'> Blank</label>";
    } else if (difficulty === 3) {
        output = "<input type='text' name='answer'>";
    }
    target.html(output);
}
