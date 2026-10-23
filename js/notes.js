// JavaScript for the Course Notes page.
// Lets the visitor filter notes by topic button and by typing in the search box.

const searchBox = document.querySelector("#note-search");
const filterButtons = document.querySelectorAll(".filter-buttons button");
const allNotes = document.querySelectorAll(".note");
const noteCount = document.querySelector("#note-count");

// Keeps track of which topic button is selected ("all" shows every topic).
let selectedTopic = "all";

// Shows or hides each note depending on the selected topic and the search text.
function updateNotes() {
  const searchText = searchBox.value.trim().toLowerCase();
  let visible = 0;

  allNotes.forEach(function (note) {
    const matchesTopic = selectedTopic === "all" || note.dataset.topic === selectedTopic;
    const matchesSearch = note.textContent.toLowerCase().includes(searchText);

    if (matchesTopic && matchesSearch) {
      note.hidden = false;
      visible++;
    } else {
      note.hidden = true;
    }
  });

  noteCount.textContent = "Showing " + visible + " of " + allNotes.length + " notes";
}

// When a topic button is clicked, remember its topic and highlight it.
function chooseTopic(event) {
  selectedTopic = event.currentTarget.dataset.topic;

  filterButtons.forEach(function (button) {
    button.classList.toggle("active", button === event.currentTarget);
  });

  updateNotes();
}

filterButtons.forEach(function (button) {
  button.addEventListener("click", chooseTopic);
});

searchBox.addEventListener("input", updateNotes);

// Show the starting count when the page loads.
updateNotes();
