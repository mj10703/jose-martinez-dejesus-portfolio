# Jose A. Martinez-De Jesus – Student Portfolio

**Name:** Jose A. Martinez-De Jesus
**Course:** Software Systems 152-110-100

## Description

A personal website that works as a portfolio of my work and as a place to keep notes and knowledge from this course. It is built with HTML, CSS, and JavaScript. Visitors can switch between a light and a dark theme, search and filter my course notes by topic, and browse the projects I have pushed to GitHub.

## Pages and Sections

- **Home (`index.html`)**
  - **About Me** – short introduction and profile picture placeholder
  - **Explore the Site** – links to the other pages
  - **What I'm Learning** – the skills covered in the course
  - **Helpful References** – cheat sheets and tutorials
  - **Say Hello** – enter your name and click the button to get a greeting (JavaScript)
- **Course Notes (`pages/notes.html`)** – class notes on HTML, CSS, JavaScript, and Git with a search box and topic filter buttons (JavaScript)
- **Projects (`pages/projects.html`)** – the portfolio itself, the course labs, and early Git practice repositories

## JavaScript Features

- **Theme toggle** (all pages) – switches between light and dark mode and remembers the choice with `localStorage`
- **Notes search and filter** (`js/notes.js`) – shows only the notes that match the selected topic and the text typed in the search box
- **Greeting** (home page) – reads the name typed in the box and displays a message, with an `if` statement to handle an empty name

## Folder Structure

```
index.html        home page
README.md         this file
css/styles.css    stylesheet shared by every page
js/script.js      theme toggle, greeting, footer year
js/notes.js       search and filter for the notes page
images/           pictures and icons
pages/            extra HTML pages (notes, projects)
```

## AI Usage Statement

AI was used during development. I used Claude (an AI assistant by Anthropic) to help write and organize the JavaScript, the page layout, and this README. I reviewed the code and can explain how it works.
