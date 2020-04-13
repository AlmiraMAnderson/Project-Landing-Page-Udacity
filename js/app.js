const navbar = document.getElementById("navList");
const sectionLists = document.querySelectorAll("section");
let activeSection;

//dynamically adds lists to navbar
for (let section of sectionLists) {
  let navEl = document.createElement("li");
  navEl.textContent = section.dataset.nav;
  navEl.id = section.id + "-nav";
  //adds scroll behavior
  navEl.onclick = function () {
    section.scrollIntoView({ behavior: "smooth" });

    activeSection = navEl;
  };
  navbar.appendChild(navEl);
}

function makeActive() {
  for (const section of sectionLists) {
    const box = section.getBoundingClientRect();

    if (box.top <= 150 && box.bottom >= 150) {
      // Adds class 'activeSection' to section and 'active' to navlist when it is near top of viewport
      section.classList.add("activeSection");
      document.getElementById(section.id + "-nav").classList.add("active");
    } else {
      // removes class 'activeSection' to section and 'active' to navlist
      section.classList.remove("activeSection");
      document.getElementById(section.id + "-nav").classList.remove("active");
    }
  }
}

makeActive();
window.onscroll = () => makeActive();
