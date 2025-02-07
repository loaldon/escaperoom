$(".theme_button").on("click",themeChange);
$(".diff_button").on("click",diffChange);

resetVars();

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

function beginCheck() {
    let desc = $("#begin-requirements");
    if (theme === 0 && difficulty === 0) {
        desc.text("Please select a theme and difficulty.");
    } else if (difficulty === 0) {
        desc.text("Please select a difficulty.");
    } else if (theme === 0) {
        desc.text("Please select a theme.");
    } else {
        desc.remove();
        let begin = $(".begin_button");
        begin.removeAttr("disabled");
        begin.text("Start");
    }
}

function resetVars() {
    theme = 0;
    difficulty = 0;
    localStorage.removeItem("theme");
    localStorage.removeItem("difficulty");
}