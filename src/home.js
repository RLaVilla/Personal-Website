export function populateHome() {
  const content = document.getElementById("content");
  content.innerHTML = "";
  content.className = "home";
  

  const portrait = document.createElement("div");
  portrait.classList.add("portrait");

  const descCont = document.createElement("div");
  descCont.classList.add("descCont");

  const descTitle = document.createElement("h1");
  descTitle.textContent = "Hey, I'm Robert.";

  const description = document.createElement("p");
  description.textContent =
    "I'm a self-taught full-stack developer with a passion for building complete web applications. Continuously learning and experimenting with new tools, I'm excited to take on new challenges and contribute to the ever-evolving world of web development.";
  descCont.appendChild(descTitle);
  descCont.appendChild(description);

  content.appendChild(portrait);
  content.appendChild(descCont);
}
