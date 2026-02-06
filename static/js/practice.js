let coolButton = document.getElementById('cool-button');
let buttonColor = "orange";

coolButton.style.backgroundColor = buttonColor;

function changeColor() {
    if (buttonColor === "orange") {
        buttonColor = "green";
    } else {
        buttonColor = "orange";
    }

    coolButton.style.backgroundColor = buttonColor;
}

coolButton.addEventListener("click", changeColor);