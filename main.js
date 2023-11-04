const burger = document.querySelector("#burgermenu");
const header = document.querySelector("header");
function burgerClick() {
  if(header.className === "default"){
    header.className = "open";
    burger.setAttribute("src", "images/close-line.svg");
  } else if(header.className === "open") {
    header.className = "default";
    burger.setAttribute("src", "images/menu-line.svg");
  }
};

burger.addEventListener("click", burgerClick);

/* ADDING THE DYNAMICS TO THE HEADER LINKS */
const headerLinks = document.querySelectorAll(".headerLink");
console.log(headerLinks)
headerLinks.forEach((header) => {
  header.addEventListener('click', (event) => {
    header.id = "active";
  })
});

