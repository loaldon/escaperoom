let difficulty = 0 ;
//0 for none, 1 for beginner, 2 for intermediate, 3 for advanced
let theme = 0;
//0 for none, 1 for hacker, 2 for time traveler, 3 for AI lab

$(".theme_button").on("click",themeChange);
$(".diff_button").on("click",diffChange);


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
    beginCheck();
}

function beginCheck() {
    if (theme !== 0 && difficulty !== 0) {
        let begin = $(".begin_button");
        begin.removeAttr("disabled");
        begin.addClass("active");
        begin.text("Start");
    }
}