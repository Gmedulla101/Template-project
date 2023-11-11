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

/* ADDING THE DYNAMICS TO THE HEADER LINKS THE LONG WAY*/
const headerLinks = document.querySelectorAll(".headerLink");
console.log(headerLinks);
headerLinks[0].addEventListener('click', (event) => {
  headerLinks[0].id = "active";
  headerLinks[1].id = "";
  headerLinks[2].id = "";
  headerLinks[3].id = "";
  headerLinks[4].id = "";
  headerLinks[5].id = "";
});
headerLinks[1].addEventListener('click', (event) => {
  headerLinks[0].id = "";
  headerLinks[1].id = "active";
  headerLinks[2].id = "";
  headerLinks[3].id = "";
  headerLinks[4].id = "";
  headerLinks[5].id = "";
});
headerLinks[2].addEventListener('click', (event) => {
  headerLinks[0].id = "";
  headerLinks[1].id = "";
  headerLinks[2].id = "active";
  headerLinks[3].id = "";
  headerLinks[4].id = "";
  headerLinks[5].id = "";
});
headerLinks[3].addEventListener('click', (event) => {
  headerLinks[0].id = "";
  headerLinks[1].id = "";
  headerLinks[2].id = "";
  headerLinks[3].id = "active";
  headerLinks[4].id = "";
  headerLinks[5].id = "";
});
headerLinks[4].addEventListener('click', (event) => {
  headerLinks[0].id = "";
  headerLinks[1].id = "";
  headerLinks[2].id = "";
  headerLinks[3].id = "";
  headerLinks[4].id = "active";
  headerLinks[5].id = "";
});
headerLinks[5].addEventListener('click', (event) => {
  headerLinks[0].id = "";
  headerLinks[1].id = "";
  headerLinks[2].id = "";
  headerLinks[3].id = "";
  headerLinks[4].id = "";
  headerLinks[5].id = "active";
});

/* ADDING SELECTIVE PAGES FOR THE PORTFOLIOS */
//PULLING THE TABS FROM THE DOM
const allTab = document.querySelector('#all-tab');
const appTab = document.querySelector('#app-tab');
const cardTab = document.querySelector('#card-tab');
const webTab = document.querySelector('#web-tab');

//PULLING THE TAB ITEMS FROM THE DOM
const app = document.querySelectorAll(".app");
const card = document.querySelectorAll(".card");
const web = document.querySelectorAll(".web");

//ADDING EVENT LISTENERS TO ALL TABS
allTab.addEventListener('click', (event) => {
  app.forEach((appItem) => {
    appItem.style.display = "block";
  });
  card.forEach((cardItem) => {
    cardItem.style.display = "block";
  });
  web.forEach((webItem) => {
    webItem.style.display = "block";
  });
  allTab.id = "selected"
  webTab.id = ""
  cardTab.id = ""
  appTab.id = ""
});

appTab.addEventListener('click', (event) => {
  app.forEach((appItem) => {
    appItem.style.display = "block";
  });
  card.forEach((cardItem) => {
    cardItem.style.display = "none";
  });
  web.forEach((webItem) => {
    webItem.style.display = "none";
  });
  allTab.id = ""
  appTab.id = "selected"
  cardTab.id = ""
  webTab.id = ""
});

cardTab.addEventListener('click', (event) => {
  app.forEach((appItem) => {
    appItem.style.display = "none";
  });
  card.forEach((cardItem) => {
    cardItem.style.display = "block";
  });
  web.forEach((webItem) => {
    webItem.style.display = "none";
  });
  allTab.id = ""
  appTab.id = ""
  cardTab.id = "selected"
  webTab.id = ""
});

webTab.addEventListener('click', (event) => {
  app.forEach((appItem) => {
    appItem.style.display = "none";
  });
  card.forEach((cardItem) => {
    cardItem.style.display = "none";
  });
  web.forEach((webItem) => {
    webItem.style.display = "block";
  });
  allTab.id = ""
  appTab.id = ""
  cardTab.id = ""
  webTab.id = "selected"
});

