export function populateAbout() {
  const content = document.getElementById("content");
  content.innerHTML = "";
  content.className = "about";

  const pageLabel = document.getElementById("pageLabel");
  pageLabel.textContent = "About Me";
  pageLabel.style.fontSize = "50px";

  const labelDiv = document.createElement("div");
  labelDiv.classList.add("labelDiv");

  const aboutLabel = document.createElement("p");
  aboutLabel.textContent =
    "Here you'll find information about the languages I know, the technologies I use, and my hobbies.";

  const meDiv = document.createElement("div");
  meDiv.classList.add("meDiv");

  const meLabel = document.createElement("h1");
  meLabel.textContent = "Get to know me!";

  const mePara = document.createElement("p");

  const skillDiv = document.createElement("div");
  skillDiv.classList.add("skillDiv");

  const skillLabel = document.createElement("h1");
  skillLabel.textContent = "My Skills";

  const skillGrid = document.createElement("div");

  labelDiv.appendChild(aboutLabel);
  meDiv.appendChild(meLabel);
  meDiv.appendChild(mePara);
  skillDiv.appendChild(skillLabel);
  skillDiv.appendChild(skillGrid);
  content.appendChild(labelDiv);
  content.appendChild(meDiv);
  content.appendChild(skillDiv);
}
