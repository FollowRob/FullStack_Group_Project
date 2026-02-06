// Find and select the button from the DOM
let coolButton = document.getElementById('cool-button');
// Create a variable to hold the current colour of the button
let buttonColor = "orange";
// Update the button DOM element to match the buttonColour variable's value
coolButton.style.backgroundColor = buttonColor;

/**
 * This function will change the colour of the button, depending on the current colour.
 */
function changeColor() {
    // This if statement only changes the value of the buttonColor variable - it does NOT change the DOM element! That is handled after the if statement by the DOM update line.
    if (buttonColor === "orange") {
        buttonColor = "green";
    } else {
        buttonColor = "orange";
    }

    // This line will reassign the DOM style based on the updated buttonColor value.
    coolButton.style.backgroundColor = buttonColor;

    // This brings up an alert once the button is clicked. The setTimeout thing ensures that the DOM element colour gets changed before.
    setTimeout(() => alert("You just changed the colour!"), 0);

}

// This creates a click listener on the button, which then calls the changeColor function.
coolButton.addEventListener("click", changeColor);