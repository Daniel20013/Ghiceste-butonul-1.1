
let buttons = document.querySelectorAll("button");
let randomIndex = Math.floor(Math.random() * buttons.length);
let congratulations = document.querySelector(".congratulations");
let wrong = document.querySelector(".wrong");

for (let i = 0; i < buttons.length; ++i) {
    if (i == randomIndex) {
        buttons[i].addEventListener("click", function() {
            congratulations.style.display = "block";
        });
    } else {
        buttons[i].addEventListener("click", function() {
            wrong.style.display = "block";
        });
    }
}

function hideButtons() {
    for (let i = 0; i < buttons.length; ++i) {
        buttons[i].style.display = "none";
    }
}
