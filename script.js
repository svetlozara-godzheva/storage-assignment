const userInput = document.getElementById("username");

const saveButton = document.getElementById("save-btn");

const clearButton = document.getElementById("clear-btn");

const displayArea = document.getElementById("display-name");

saveButton.addEventListener("click", () => {
    const inputValue = userInput.value;
    localStorage.setItem("local-username", inputValue);
});

document.addEventListener("DOMContentLoaded", () => {
    const localUsername = localStorage.getItem("local-username");
    if (localUsername) {
        displayArea.innerText = greet(localUsername);
    }
});

function greet(name) {
    let now = new Date();
    if (now.getHours() < 12) {
        return `Good Morning ${name}!`;
    }
    if (now.getHours() < 17) {
        return `Good Afternoon ${name}!`;
    } else {
        return `Good Evening ${name}!`;
    }
}

clearButton.addEventListener("click", () => {
    localStorage.removeItem("local-username");
    displayArea.innerText = "";
});