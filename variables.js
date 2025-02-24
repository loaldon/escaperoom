//0 for none, 1 for beginner, 2 for intermediate, 3 for advanced
let difficulty = 0;
//0 for none, 1 for hacker, 2 for time traveler, 3 for AI lab
let theme = 0;

//read values from local storage
if (localStorage.getItem("theme")) {
    theme = parseInt(localStorage.getItem("theme"));
}

if (localStorage.getItem("difficulty")) {
    difficulty = parseInt(localStorage.getItem("difficulty"));
}

//Stores list of theme names. themeList[theme] should return current theme.
let themeList = ["None", "Hacker Mission", "Time Traveler", "AI Lab Escape"];
//Stores list of difficulty names. difficultyList[difficulty] should return current difficulty.
let difficultyList = ["None", "Beginner", "Intermediate", "Advanced"];