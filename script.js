
let displaytext = "";

function display() { document.getElementById("display").innerText = displaytext; }

// Function to handle button clicks
function logichandler() {

    if (this.innerText === "C") {
        displaytext = " ";
        display();
    }
    else if (this.innerText === "=") {
        try {
            displaytext = eval(displaytext); // evaluate expression
            display();
            
        } catch (error) {
            displaytext = "Error"; // handle evaluation error
        }
    } else if (this.innerText === "<=") {
        displaytext = displaytext.slice(0, -1);
        display();
    } else {
        displaytext += this.innerText; // append clicked button text
        display();
    }
}

// Get all buttons
let buttons = document.getElementsByClassName("button");

// Add event listener to each button
for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", logichandler);
}


