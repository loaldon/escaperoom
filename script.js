var difficulty = 0 ;
//0 for none, 1 for beginner, 2 for intermediate, 3 for advanced
var theme = 0;
//0 for none, 1 for hacker, 2 for time traveler, 3 for AI lab

$(".theme_button").on("click",themeChange);
$(".diff_button").on("click",diffChange);


function themeChange() {
    let button = $(this);
    $(".theme_button.active").removeClass("active");
    button.addClass("active");
    if (button.text() === "Hacker Mission") {
        theme = 1;
    } else if (button.text() === "Time Traveler") {
        theme = 2;
    } else if (button.text() === "AI Lab Escape") {
        theme = 3;
    }
    beginCheck();
}

function diffChange() {
    let button = $(this);
    $(".diff_button.active").removeClass("active");
    button.addClass("active");
    if (button.text() === "Beginner") {
        difficulty = 1;
    } else if (button.text() === "Intermediate") {
        difficulty = 2;
    } else if (button.text() === "Advanced") {
        difficulty = 3;
    }
    beginCheck();
}

function beginCheck() {
    if (theme !== 0 && difficulty !== 0) {
        var begin = $(".begin_button");
        begin.removeAttr("disabled");
        begin.addClass("active");
        begin.text("Start");
    }
}