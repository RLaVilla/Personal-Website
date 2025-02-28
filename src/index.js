import "./style.css";

document.getElementById("menuToggle").addEventListener("click", function () {
  document.getElementById("nav").classList.toggle("active");
});

function scrollToSection(buttonId, targetSectionId, headerSelector = "header") {
  const button = document.getElementById(buttonId);
  button.addEventListener("click", () => {
    const targetSection = document.getElementById(targetSectionId);
    const headerHeight = document.querySelector(headerSelector).offsetHeight;
    const offsetPosition = targetSection.offsetTop - headerHeight;

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    });
    const nav = document.getElementById("nav");
    if (nav.classList.contains("active")) {
      nav.classList.toggle("active");
    }
  });
}

const homeContainerButton = document.getElementById("homeContainer");
homeContainerButton.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
  const nav = document.getElementById("nav");
  if (nav.classList.contains("active")) {
    nav.classList.toggle("active");
  }
});

const homeButton = document.getElementById("homeButton");
homeButton.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
  const nav = document.getElementById("nav");
  if (nav.classList.contains("active")) {
    nav.classList.toggle("active");
  }
});

const aboutButton = document.getElementById("aboutButton");
aboutButton.addEventListener("click", () => {
  scrollToSection("aboutButton", "about");
});

const projectsButton = document.getElementById("projectsButton");
projectsButton.addEventListener("click", () => {
  scrollToSection("projectsButton", "projects");
});

const contactButton = document.getElementById("contactButton");
contactButton.addEventListener("click", () => {
  scrollToSection("contactButton", "contact");
});

const projectSpan = document.getElementById("projectSpan");
projectSpan.addEventListener("click", () => {
  scrollToSection("projectSpan", "projects");
});

const aboutContactButton = document.getElementById("aboutContactButton");
aboutContactButton.addEventListener("click", () => {
  scrollToSection("aboutContactButton", "contact");
});

const mityGithubButton = document.getElementById("mityGithubButton");
mityGithubButton.addEventListener("click", () => {
  window.open("https://github.com/RLaVilla/fishing-tournament", "_blank");
});

const mityGoButton = document.getElementById("mityGoButton");
mityGoButton.addEventListener("click", () => {
  window.open("https://rlavilla.github.io/fishing-tournament", "_blank");
});

const battleshipGithubButton = document.getElementById(
  "battleshipGithubButton"
);
battleshipGithubButton.addEventListener("click", () => {
  window.open("https://github.com/RLaVilla/battleship-game", "_blank");
});

const battleshipGoButton = document.getElementById("battleshipGoButton");
battleshipGoButton.addEventListener("click", () => {
  window.open("https://rlavilla.github.io/battleship-game/", "_blank");
});

const linkedInHomeButton = document.getElementById("linkedInHomeButton");
linkedInHomeButton.addEventListener("click", () => {
  window.open("https://www.linkedin.com/in/robert-lavilla", "_blank");
});

const githubHomeButton = document.getElementById("githubHomeButton");
githubHomeButton.addEventListener("click", () => {
  window.open("https://github.com/RLaVilla/", "_blank");
});

const linkedInContactButton = document.getElementById("linkedInContactButton");
linkedInContactButton.addEventListener("click", () => {
  window.open("https://www.linkedin.com/in/robert-lavilla", "_blank");
});
const githubContactButton = document.getElementById("githubContactButton");
githubContactButton.addEventListener("click", () => {
  window.open("https://github.com/RLaVilla/", "_blank");
});

const projectsHomeButton = document.getElementById("projectsHomeButton");
projectsHomeButton.addEventListener("click", () => {
  scrollToSection("projectsHomeButton", "projects");
});

function toggleImage(imgId) {
  const img = document.getElementById(imgId);
  if (window.innerWidth < 500) {
    img.style.display = "none";
  } else {
    img.style.display = "block";
  }
}

toggleImage("removeImg");
toggleImage("contactImg");

window.addEventListener("resize", () => toggleImage("removeImg"));

window.addEventListener("resize", () => toggleImage("contactImg"));
