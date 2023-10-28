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
/* burger.setAttribute("src", "images/close-line.svg");
burger.setAttribute("src", "images/menu-line.svg"); */
