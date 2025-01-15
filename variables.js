let difficulty = 0;
//0 for none, 1 for beginner, 2 for intermediate, 3 for advanced
let theme = 0;
//0 for none, 1 for hacker, 2 for time traveler, 3 for AI lab

//read values from local storage
if (localStorage.getItem("theme")) {
    theme = parseInt(localStorage.getItem("theme"));
}

if (localStorage.getItem("difficulty")) {
    difficulty = parseInt(localStorage.getItem("difficulty"));
}