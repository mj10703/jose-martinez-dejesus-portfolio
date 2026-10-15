// Main JavaScript file for the portfolio site.
// Placeholder for now; more features will be added in later deliverables.

const greetButton = document.getElementById("greet-button");
const nameInput = document.getElementById("name-input");
const greeting = document.getElementById("greeting");

greetButton.addEventListener("click", function () {
  const name = nameInput.value.trim() || "visitor";
  greeting.textContent = "Hello, " + name + "! Thanks for visiting.";
});
