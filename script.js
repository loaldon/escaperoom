$(".theme_button").on("click",themeChange);
$(".diff_button").on("click",diffChange);
resetVars();

//Allows the theme buttons to change the current theme.
function themeChange() {
    let button = $(this);
    let desc = $("#theme-description");
    $(".theme_button.active").removeClass("active");
    button.addClass("active");

    if (button.text() === "Hacker Mission") {
        theme = 1;
        desc.text("Solve coding puzzles to infiltrate a secured system.");
    } else if (button.text() === "Time Traveler") {
        theme = 2;
        desc.text("Stabilize the timeline by finding and fixing glitches.");
    } else if (button.text() === "AI Lab Escape") {
        theme = 3;
        desc.text("The AI system has gone rogue and taken over the lab! Debug it in order to regain control and escape.");
    }
    localStorage.setItem("theme", theme);
    beginCheck();
}

//Allows the difficulty buttons to change the current difficulty.
function diffChange() {
    let button = $(this);
    let desc = $("#difficulty-description");
    $(".diff_button.active").removeClass("active");
    button.addClass("active");
    if (button.text() === "Beginner") {
        difficulty = 1;
        desc.text("Tasks are multiple choice, hints are more detailed, and the time limit is longer.");
    } else if (button.text() === "Intermediate") {
        difficulty = 2;
        desc.text("Standard time limit, hints, and task difficulty.");
    } else if (button.text() === "Advanced") {
        difficulty = 3;
        desc.text("Free response tasks, less detailed hints, and shorter time limit.");
    }
    localStorage.setItem("difficulty", difficulty);
    beginCheck();
}

//Checks if theme and difficulty are selected.
//If they are, enable the start button.
//Else, show which requirements still need to be met.
function beginCheck() {
    let begin = $("#begin_button");
    if (theme === 0 && difficulty === 0) {
        begin.attr("title", "Please select a theme and difficulty.");
    } else if (difficulty === 0) {
        begin.attr("Title", "Please select a difficulty.");
    } else if (theme === 0) {
        begin.attr("Title", "Please select a theme.");
    } else {
        begin.attr("title", "Click to begin!");
        begin.children().removeAttr("disabled");
        begin.children().text("Start");
    }
}

//Initializes the theme and difficulty values. This way, the start page is always blank
//and beginCheck() always works as intended.
function resetVars() {
    theme = 0;
    difficulty = 0;
    localStorage.removeItem("theme");
    localStorage.removeItem("difficulty");
}