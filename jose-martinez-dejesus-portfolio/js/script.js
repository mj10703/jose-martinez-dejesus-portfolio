// Main JavaScript file for the portfolio site.
// It is loaded on every page and handles:
//   1. the dark/light theme toggle (all pages)
//   2. the "Say Hello" greeting (home page only)
//   3. the year in the footer (all pages)

// ---------- 1. Theme toggle ----------

const themeButton = document.querySelector("#theme-button");
const root = document.documentElement; // the <html> element

// Sets the theme on the page, remembers it, and updates the button text.
function applyTheme(theme) {
  root.setAttribute("data-theme", theme);
  themeButton.textContent = theme === "dark" ? "Light mode" : "Dark mode";

  // localStorage can fail (for example in private browsing), so try/catch keeps the page working.
  try {
    localStorage.setItem("theme", theme);
  } catch (error) {
    console.log("Could not save theme:", error);
  }
}

// Switches to whichever theme is not active right now.
function toggleTheme() {
  const current = root.getAttribute("data-theme");
  applyTheme(current === "dark" ? "light" : "dark");
}

// When the page loads, use the saved theme if there is one.
let savedTheme = "light";
try {
  savedTheme = localStorage.getItem("theme") || "light";
} catch (error) {
  console.log("Could not read theme:", error);
}
applyTheme(savedTheme);

themeButton.addEventListener("click", toggleTheme);

// ---------- 2. Say Hello greeting (home page only) ----------

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

// Only the home page has these elements, so check before adding the click event.
if (greetButton) {
  greetButton.addEventListener("click", showGreeting);
}

// ---------- 3. Footer year ----------

const yearSpan = document.querySelector("#year");
if (yearSpan) {
  yearSpan.textContent = new Date().getFullYear();
}
