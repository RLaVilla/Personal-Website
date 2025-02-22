import "./style.css";
import { populateHome } from "./home.js";
import { populateAbout } from "./about.js";

// populateHome();
populateAbout();


const homeButton = document.getElementById("home");
homeButton.addEventListener("click", () => {
  populateHome();
});

const aboutButton = document.getElementById("about");
aboutButton.addEventListener("click", () => {
    populateAbout();
})

const projectsButton = document.getElementById("projects");

const resumeButton = document.getElementById("resume");

const contactButton = document.getElementById("contact");

const githubImg = document.getElementById("github");
githubImg.addEventListener("click", () => {
  window.open("https://github.com/RLaVilla", "_blank");
});

const linkedInImg = document.getElementById("linkedin");
linkedInImg.addEventListener("click", () => {
  window.open("https://www.linkedin.com/", "_blank");
});
