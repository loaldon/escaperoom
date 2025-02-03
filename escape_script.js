$("#difficulty").html("Difficulty: " + difficulty);
$("#theme").html("Theme: " + theme);

let hints = 3;

let questions =[];
if (theme === 1) {
    //add questions to the array i guess
    console.log(questions);
}

$("#hint").on('click', {value: hints-1}, updateHints);

function answerQuestion() {
    event.preventDefault();
    updateHints(3);
}

function updateHints(value) {
    hints = value;
    let item = $("hints");
    if (value === 3) {
        item.text("Hint 1/3");
    }else if (value === 2) {
        item.text("Hint 2/3");
    } else if (value === 1) {
        item.text("Hint 3/3");
    } else {
        item.text("Out of hints!");
        item.attr("disabled", true);
    }
}