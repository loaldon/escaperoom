$("#difficulty").html("Difficulty: " + difficulty);
$("#theme").html("Theme: " + theme);

let hints = 0;

let questions =[];
if (theme === 1) {
    //add questions to the array i guess
    console.log(questions);
}

let hintButton = $("#hint");

hintButton  .on('click', sendHint);

function answerQuestion() {
    event.preventDefault();
    resetHints();
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