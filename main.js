/* JS FOR THE HEADER RESPONSIVENESS */
const header = document.querySelector('header');
const burger = document.querySelector('#burgermenu');
const cancel = document.querySelector('#closeBtn');
const modal = document.querySelector('#modal');

//ADDING AN EVENT LISTENER TO THE BURGER BUTTON TO CALL THE MODAL
burger.addEventListener('click', (event) => {
  modal.style.display = 'flex';
});

//ADDING AN EVENT LISTENER TO CLOSE THE MODAL
cancel.addEventListener('click', (event) => {
  modal.style.display = 'none';
});

/* JS FOR THE NAV ACTIVE STATE ON SCROLL */
const dynamicHeader = () => {
  const position = window.scrollY;
  if (Math.floor(position) > 4) {
    header.classList.add('Theader');
  } else {
    header.classList.remove('Theader');
  }
};
window.addEventListener('scroll', dynamicHeader);

/* ADDING THE DYNAMICS TO THE HEADER LINKS THE LONG WAY*/
const headerLinks = document.querySelectorAll('.headerLink');
headerLinks[0].addEventListener('click', (event) => {
  headerLinks[0].id = 'active';
  headerLinks[1].id = '';
  headerLinks[2].id = '';
  headerLinks[3].id = '';
  headerLinks[4].id = '';
  headerLinks[5].id = '';
});
headerLinks[1].addEventListener('click', (event) => {
  headerLinks[0].id = '';
  headerLinks[1].id = 'active';
  headerLinks[2].id = '';
  headerLinks[3].id = '';
  headerLinks[4].id = '';
  headerLinks[5].id = '';
});
headerLinks[2].addEventListener('click', (event) => {
  headerLinks[0].id = '';
  headerLinks[1].id = '';
  headerLinks[2].id = 'active';
  headerLinks[3].id = '';
  headerLinks[4].id = '';
  headerLinks[5].id = '';
});
headerLinks[3].addEventListener('click', (event) => {
  headerLinks[0].id = '';
  headerLinks[1].id = '';
  headerLinks[2].id = '';
  headerLinks[3].id = 'active';
  headerLinks[4].id = '';
  headerLinks[5].id = '';
});
headerLinks[4].addEventListener('click', (event) => {
  headerLinks[0].id = '';
  headerLinks[1].id = '';
  headerLinks[2].id = '';
  headerLinks[3].id = '';
  headerLinks[4].id = 'active';
  headerLinks[5].id = '';
});
headerLinks[5].addEventListener('click', (event) => {
  headerLinks[0].id = '';
  headerLinks[1].id = '';
  headerLinks[2].id = '';
  headerLinks[3].id = '';
  headerLinks[4].id = '';
  headerLinks[5].id = 'active';
});

/* JS FOR THE SCROLL EFFECT ON CLICKING THE NAVLINKS */
const divisions = Array.from(document.querySelectorAll('.division'));
const sectionId = divisions.filter((division) => {
  return division.id;
});
sectionId.forEach((section) => {});
const aboutDistance = 732.7999877929688;
const servicesDistance = 2398.39990234375;
const portfolioDistance = 3437.60009765625;
const teamDistance = 5091.2001953125;
const contactDistance = 7524.7998046875;

/* ADDING SELECTIVE PAGES FOR THE PORTFOLIOS */
//PULLING THE TABS FROM THE DOM
const allTab = document.querySelector('#all-tab');
const appTab = document.querySelector('#app-tab');
const cardTab = document.querySelector('#card-tab');
const webTab = document.querySelector('#web-tab');

//PULLING THE TAB ITEMS FROM THE DOM
const app = document.querySelectorAll('.app');
const card = document.querySelectorAll('.card');
const web = document.querySelectorAll('.web');

//ADDING EVENT LISTENERS TO ALL TABS
allTab.addEventListener('click', (event) => {
  app.forEach((appItem) => {
    appItem.style.display = 'block';
  });
  card.forEach((cardItem) => {
    cardItem.style.display = 'block';
  });
  web.forEach((webItem) => {
    webItem.style.display = 'block';
  });
  allTab.id = 'selected';
  webTab.id = '';
  cardTab.id = '';
  appTab.id = '';
});

appTab.addEventListener('click', (event) => {
  app.forEach((appItem) => {
    appItem.style.display = 'block';
  });
  card.forEach((cardItem) => {
    cardItem.style.display = 'none';
  });
  web.forEach((webItem) => {
    webItem.style.display = 'none';
  });
  allTab.id = '';
  appTab.id = 'selected';
  cardTab.id = '';
  webTab.id = '';
});

cardTab.addEventListener('click', (event) => {
  app.forEach((appItem) => {
    appItem.style.display = 'none';
  });
  card.forEach((cardItem) => {
    cardItem.style.display = 'block';
  });
  web.forEach((webItem) => {
    webItem.style.display = 'none';
  });
  allTab.id = '';
  appTab.id = '';
  cardTab.id = 'selected';
  webTab.id = '';
});

webTab.addEventListener('click', (event) => {
  app.forEach((appItem) => {
    appItem.style.display = 'none';
  });
  card.forEach((cardItem) => {
    cardItem.style.display = 'none';
  });
  web.forEach((webItem) => {
    webItem.style.display = 'block';
  });
  allTab.id = '';
  appTab.id = '';
  cardTab.id = '';
  webTab.id = 'selected';
});

/* JS FOR THE EXTRA STUFF EXPANDABLE MENU */
const extraExpandMenu = Array.from(
  document.querySelectorAll('.extra-text ul li')
);
extraExpandMenu.forEach((menu) => {
  menu.addEventListener('click', function () {
    expandMenu(menu);
  });
});

function expandMenu(item) {
  if (item.className === 'closed') {
    item.style.height = '10em';
    item.className = 'expand-open';
    item.querySelector('span img').setAttribute('src', 'images/arrow-up.png');
  } else {
    item.style.height = '1.3em';
    item.className = 'closed';
    item.querySelector('span img').setAttribute('src', 'images/down-arrow.png');
  }
}
/* JS FOR THE FAQ EXPANDABLE MENU */
const faqExpandMenu = document.querySelectorAll('.faq');
faqExpandMenu.forEach((menu, i) => {
  menu.addEventListener('click', function () {
    if (menu.className.includes('closed')) {
      menu.className = 'faq readmore';
      menu
        .querySelector('.arrow-down img')
        .setAttribute('src', 'images/arrow-up.png');
    } else {
      menu.className = 'faq closed';
      menu
        .querySelector('.arrow-down img')
        .setAttribute('src', 'images/down-arrow.png');
    }
  });
});

/* JS FOR THE METERS */
const meters = document.querySelectorAll('.meter');
const meterValue = [100, 90, 75, 55];
function meterProgress() {
  meters.forEach((meter, i) => {
    const interval = setInterval(incrementor, 10);
    let width = 0;

    function incrementor() {
      if (width >= meterValue[i]) {
        clearInterval(interval);
      } else {
        width++;
        meter.querySelector('div').style.width = `${width}%`;
      }
    }
  });
}
setTimeout(meterProgress, 3000);
