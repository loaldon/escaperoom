$("#difficulty").html("Difficulty: " + difficulty);
$("#theme").html("Theme: " + theme);

let hints = 0;

let questions = ["question 1", "question 2", "question 3", "question 4", "question 5", "question 6", "question 7", "question 8", "question 9", "question 10"];
let currentQuestion = "";

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

let hintButton = $("#hint");

hintButton.on('click', sendHint);

function answerQuestion() {
    event.preventDefault();
    resetHints();
    updateQuestions();
}

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

function sendHint() {
    let target = $("#show-hint");
    updateHints(hints + 1);
    target.text("Hint " + hints + " shown!");
}

function resetHints() {
    let target = $("#show-hint");
    target.text("");
    hintButton.removeAttr("disabled");
    updateHints(0);
}

function updateQuestions() {
    if (questions.length !== 0) {
        currentQuestion = questions.shift();
        $("#question-desc").html(currentQuestion);
    } else {
        window.location.href="completion.html";
    }
}
updateQuestions();