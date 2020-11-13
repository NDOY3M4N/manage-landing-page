// Navbar Stuff here
const iconHamburger = document.querySelector('.icon-hamburger')
const navbarLinks = document.querySelector('.navbar__links');
const closePath = 'M17.925.747l2.828 2.828L13.328 11l7.425 7.425-2.828 2.828-7.425-7.425-7.425 7.425-2.828-2.828L7.671 11 .247 3.575 3.075.747 10.5 8.171 17.925.747z'
const openPath = 'M0 0h25v4H0zM0 7h25v4H0zM0 14h25v4H0z'

let openMenu = false;

iconHamburger.addEventListener('click', () => {
  iconHamburger.querySelector('path').setAttribute('d', closePath);
  document.body.classList.add('overlay')
  navbarLinks.classList.add('active')
  
  if (openMenu) {
    iconHamburger.querySelector('path').setAttribute('d', openPath);
    document.body.classList.remove('overlay')
    navbarLinks.classList.remove('active')
  }

  openMenu = !openMenu
});

// Carousel Stuff here
const flkty = new Flickity( '.carousel', {
  cellAlign: 'center',
  contain: true,
  wrapAround: true,
  autoPlay: 5000,
  prevNextButtons: false
});

// Email validation stuff
const form = document.querySelector('form');
const formError = document.querySelector('.form-error')

const mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const email = form.mail_user;

  if(!email.value.match(mailformat)) {
    formError.style.opacity = 1
    email.classList.add('error')

    setTimeout(() => {
      formError.style.opacity = 0
      email.classList.remove('error')
    }, 5000)
  }
});
