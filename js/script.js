// Main JavaScript file for the portfolio site.
// Handles the "Say Hello" greeting on the home page.

// Grab the page elements this script needs (querySelector accepts any CSS selector).
const greetButton = document.querySelector("#greet-button");
const nameInput = document.querySelector("#name-input");
const greeting = document.querySelector("#greeting");

// Reads the visitor's name and shows a personalized message on the page.
function showGreeting() {
  const name = nameInput.value.trim();

  if (name === "") {
    // Nothing was typed, so ask for a name instead of greeting "undefined".
    greeting.textContent = "Please enter your name first.";
  } else {
    greeting.textContent = "Hello, " + name + "! Thanks for visiting.";
  }
}

// Run showGreeting every time the button is clicked.
greetButton.addEventListener("click", showGreeting);
