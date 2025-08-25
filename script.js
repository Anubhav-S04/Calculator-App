let displaytext = "";

function display() { 
    document.getElementById("display").innerText = displaytext; 
}

// Function to handle button clicks
function logichandler() {
    let value = this.innerText;

    if (value === "C") {
        displaytext = "0";
        display();
    }
    else if (value === "=") {
        try {
            displaytext = eval(displaytext).toString();
            display();
        } catch (error) {
            displaytext = "Error";
            display();
        }
    } 
    else if (value === "<=") {
        displaytext = displaytext.slice(0, -1);
        if (displaytext === "") displaytext = "0"; // fallback
        display();
    } 
    else {
        if (displaytext === "0") {
            if (value === "0") {
                // do nothing if already "0" and pressing 0 again
                return;
            } 
            else if (!isNaN(value)) {
                // if it's a digit (1-9), replace "0"
                displaytext = value;
            } 
            else {
                // if it's an operator, append
                displaytext += value;
            }
        } 
        else {
            displaytext += value;
        }
        display();
    }
}

let buttons = document.getElementsByClassName("button");

for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", logichandler);
}

// Initialize display with "0"
displaytext = "0";
display();
