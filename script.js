const display = document.getElementById("display");

function enter(input){
    display.value += input;
}

function clearDisplay() {
    display.value = "";
}
function equal() {
    try {
        display.value = eval(display.value)
    }
    catch {
        display.value = "ERROR";
    }
}
