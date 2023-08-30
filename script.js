//variables to store
let a = 0;
let b = 0;
let op;
let starter = 0;
let displayText = "";
let result;

//element variables
let addButton = document.getElementById("addButton");
let subtractButton = document.getElementById("subtractButton");
let multiplyButton = document.getElementById("multiplyButton");
let divideButton = document.getElementById("divideButton");
let equalButton = document.getElementById("equalButton");
let backButton = document.getElementById("backButton");
let clearButton = document.getElementById("clearButton");
let input = document.querySelectorAll(".number");
let screen = document.querySelector("#screen > p");
screen.innerHTML = starter;

//get user input
input.forEach((option) => option.addEventListener("click", function (option) {
    displayText += option.currentTarget.innerHTML;
    screen.innerHTML = displayText;
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
clearButton.addEventListener("click", clear);

function clear() {
    a = 0;
    b = 0;
    op = undefined;
    result = undefined;
    starter = 0;
    displayText = "";
    screen.innerHTML = starter;
    document.getElementById("decimalButton").disabled = false;
}

//back button
backButton.addEventListener("click",back);

function back() {
    let remove = screen.innerHTML.substring(0,screen.innerHTML.length-1);
    screen.innerHTML = remove;
    displayText = remove;
    if (!screen.innerHTML.includes(".")) {
        document.getElementById("decimalButton").disabled = false;
    }
}
//basic arithmatic functions
function add(a,b) {
    let answer = Number(a) + Number(b);
    result = answer.toFixed(2);
}

function subtract(a,b) {
    let answer = Number(a) - Number(b);
    result = answer.toFixed(2);
}

function multiply(a,b) {
    let answer = Number(a) * Number(b);
    result = answer.toFixed(2);
}

function divide(a,b) {
    if (b == 0) {
        result = "NaN";
    } else {
        let answer = Number(a) / Number(b);
        result = answer.toFixed(2);
    }
}

//operator button function
addButton.addEventListener("click", opButton);
subtractButton.addEventListener("click", opButton);
multiplyButton.addEventListener("click", opButton);
divideButton.addEventListener("click", opButton);
equalButton.addEventListener("click", opButton);

function opButton() {
    if (op == undefined) {
        a = screen.innerHTML;
        op = this.innerHTML;
        screen.innerHTML = "";
        displayText = "";
        result = "";
        document.getElementById("decimalButton").disabled = false; 
    } else {
        b = screen.innerHTML;
        screen.innerHTML = "";
        operate(a,b,op);
        if (result.length > 11) {
            screen.innerHTML = Number(result).toExponential(2);
        } else if (result.includes(".00")) {
            result = result.slice(0, -3);
            screen.innerHTML = result;
        } else {
            screen.innerHTML = result;
        }
        a = result;
        displayText = "";
        op = this.innerHTML;
        document.getElementById("decimalButton").disabled = false; 
    }
}

//operator function
function operate(a, b, op) {
    if (op === "+") {
        add(a,b);
    } else if (op === "-") {
        subtract(a,b);
    } else if (op === "x") {
        multiply(a,b);
    } else if (op === "÷") {
        divide(a,b);
    }
}