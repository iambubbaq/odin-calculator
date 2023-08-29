//variables to store
let a = 0;
let b = 0;
let op;

//get user input
let input = document.querySelectorAll(".number");
input.forEach((option) => option.addEventListener("click", function (option) {
    screen.innerHTML += option.currentTarget.innerHTML;
    let maximum = 11;
    if (screen.innerHTML.length > maximum) {
        let length = screen.innerHTML.substring(0,11);
        screen.innerHTML = length;
    }
    if (screen.innerHTML.includes(".")) {
        document.getElementById("decimalButton").disabled = true;
    }
}));

//clear button
let clearButton = document.getElementById("clearButton");
let screen = document.querySelector("#screen > p");
clearButton.addEventListener("click", clear);

function clear() {
    a = 0;
    b = 0;
    op = undefined;
    screen.innerHTML = "";
    document.getElementById("decimalButton").disabled = false;
}

//back button
let backButton = document.getElementById("backButton");
backButton.addEventListener("click",back);

function back() {
    let remove = screen.innerHTML.substring(0,screen.innerHTML.length-1);
    screen.innerHTML = remove;
    if (!screen.innerHTML.includes(".")) {
        document.getElementById("decimalButton").disabled = false;
    }
}
//basic arithmatic functions
function add(a,b) {
    return a + b;
}

function subtract(a,b) {
    return a - b;
}

function multiply(a,b) {
    return a * b;
}

function divide(a,b) {
    return a / b;
}

